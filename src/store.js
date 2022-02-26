/**
 import { createStore, applyMiddleware, compose } from 'redux';
 import { createLogger } from 'redux-logger';
 import thunkMiddleware from 'redux-thunk';
 import reducer from './reducers';
 
 
 
 export default createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware));
 
*/
import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './reducers/moviesReducer';

export default configureStore({
  reducer: {
    movies: moviesSlice.reducer,
  },
});