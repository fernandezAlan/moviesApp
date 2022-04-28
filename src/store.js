/**
 import { createStore, applyMiddleware, compose } from 'redux';
 import { createLogger } from 'redux-logger';
 import thunkMiddleware from 'redux-thunk';
 import reducer from './reducers';
 
 
 
 export default createStore(reducer, applyMiddleware(createLogger(), thunkMiddleware));
 
*/
import { configureStore } from '@reduxjs/toolkit';
import { moviesSlice } from './reducers/moviesReducer';
import {tvSeriesSlice} from './reducers/TvShowsReducer'
import {PersonSlice} from './reducers/PersonReducer'
import { collectionSlice } from './reducers/CollectionReducer';
import { titlesFoundSlice } from './reducers/TitlesFoundReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
export default configureStore({
  reducer: {
    movies: moviesSlice.reducer,
    tvSeries: tvSeriesSlice.reducer,
    person:PersonSlice.reducer,
    collection:collectionSlice.reducer,
    titlesFound:titlesFoundSlice.reducer
  },
  middleware:[logger,thunk]
});