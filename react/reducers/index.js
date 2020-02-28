import { combineReducers } from 'redux';

import moviesReducer from './moviesReducer';
import selectedMovie from "./selectedMovieReducer"
import foundMovie from "./SearchMoviesReducer"
import FavMovie from "./FavMovie"

export default combineReducers(
   { movies:moviesReducer,
      selectedMovie:selectedMovie,
      foundMovie: foundMovie,
      FavMovie:FavMovie
   }
)