import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getMovies,selectedMovie,getMovieCredits} from '../api/getMovies';
import { searchTitle } from '../api/search';
import { getMovieGenres } from '../api/genres';


export default function reducer (state = initialState, action) {
  switch (action.type) {
    case "UPDATE_MOVIES": 
       return Object.assign({}, state, { movies: action.movies });
    default: 
       return state;
  }
}

const initialState = {
  allMovies:{
    popular:{
      totalPages:null,
      actualPage:1,
      results:[]
    },
    top_rated:{
      totalPages:null,
      actualPage:1,
      results:[]
    },
    now_playing:{
      totalPages:null,
      actualPage:1,
      results:[]
    },
    upcoming:{
      totalPages:null,
      actualPage:1,
      results:[]
    }
  },
  selectedMovie:null,
  movieCredits:null,
  moviesGenres:[],
  genres:[]
}

export const setMovies = createAsyncThunk(
  'UPDATE_MOVIES',
  async(data)=>await getMovies(data)
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
  async (name)=> await searchTitle(name) 
)

export const moviesSlice = createSlice({
  name:'movies',
  initialState,
  reducers:{
    clearSelectedMovie:(state,action)=>{
      state.selectedMovie=null
    },
    setNextPageMovie:(state,action)=>{
      state.allMovies[action.payload.type].actualPage++
    },
    setPrevPageMovie:(state,action)=>{
      state.allMovies[action.payload.type].actualPage--
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(
      setMovies.fulfilled,
      (state,action)=>{
        const {type} = action.meta.arg
        state.allMovies[type].results.push(action.payload)
        state.allMovies[type].totalPages=action.payload.total_pages
      }
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

export const {clearSelectedMovie,setNextPageMovie,setPrevPageMovie} = moviesSlice.actions