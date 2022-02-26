import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getMovies,selectedMovie,getMovieCredits} from '../api/getMovies';
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
  movieCredits:null
}

export const setMovies = createAsyncThunk(
  'UPDATE_MOVIES',
  async()=>await getMovies()
)

export const selectMovie= createAsyncThunk(
  'SELECT_MOVIE',
  async(movieId)=>await selectedMovie(movieId)
)
export const getCredits = createAsyncThunk(
  'CREDITS',
  async (movieId) => await getMovieCredits(movieId)
)

export const moviesSlice = createSlice({
  name:'movies',
  initialState,
  reducers:{
    addMovies:(state,action)=>state.allMovies=action.payload.movies  
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
        const director = action.payload.crew.find(e=>e.job==='Director')
        action.payload.director = director
        state.movieCredits= action.payload
      }
    )
  }
})