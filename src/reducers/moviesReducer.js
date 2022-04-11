import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getMovies,selectedMovie,getMovieCredits,searchMovie} from '../api/getMovies';
import { getMovieGenres } from '../api/genres';
//const initialState = { movies: "aun no hay movies aqui!" };

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_MOVIES": 
       return Object.assign({}, state, { movies: action.movies });
    default: 
       return state;
  }
}

const initialState = {
  allMovies:[],
  selectedMovie:null,
  movieCredits:null,
  moviesGenres:null
}

export const setMovies = createAsyncThunk(
  'UPDATE_MOVIES',
  async(type)=>await getMovies(type)
)
export const addMovieGenres= createAsyncThunk(
  'ADD_MOVIE_GENRES',
  async()=>await getMovieGenres()
)
export const selectMovie= createAsyncThunk(
  'SELECT_MOVIE',
  async(movieId)=>await selectedMovie(movieId)
)
export const getCredits = createAsyncThunk(
  'CREDITS',
  async (movieId) => await getMovieCredits(movieId)
)

export const addFindMovie = createAsyncThunk(
  'ADD_FIND_MOVIES',
  async (movieName)=> await searchMovie(movieName) 
)

export const moviesSlice = createSlice({
  name:'movies',
  initialState,
  reducers:{
    clearSelectedMovie:(state,action)=>{
      state.selectedMovie=null
    }  
  },
  extraReducers:(builder)=>{
    builder.addCase(
      setMovies.fulfilled,
      (state,action)=>{state.allMovies= action.payload}
    )
    .addCase(
      selectMovie.fulfilled,
      (state,action)=>{state.selectedMovie= action.payload}
    )
    .addCase(
      getCredits.fulfilled,
      (state,action)=>{
        action.payload.cast.length=4
        const director = action.payload.crew.filter(e=>e.job==='Director')
        director.length = 3
        action.payload.director = director
        state.movieCredits= action.payload
      }
    )
    .addCase(
      addFindMovie.fulfilled,
      (state,action)=>{state.allMovies= action.payload}
    )
    .addCase(
      addMovieGenres.fulfilled,
      (state,action)=>{state.moviesGenres= action.payload}
    )
  }
})

export const {clearSelectedMovie} = moviesSlice.actions