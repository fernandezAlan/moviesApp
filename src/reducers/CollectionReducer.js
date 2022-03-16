import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {getCollection} from '../api/getCollection';

const initialState = {
    selectedCollection:null,
    allCollections:null,
  }

  export const addCollection = createAsyncThunk(
    'SELECT_COLLECTION',
    async(id)=>await getCollection(id)
  )

  export const collectionSlice = createSlice({
    name:'collection',
    initialState,
    reducers:{
      clearSelectedCollection:(state,action)=>{
        state.selectedCollection=null
      }  
    },
    extraReducers:(builder)=>{
      builder.addCase(
        addCollection.fulfilled,
        (state,action)=>{state.selectedCollection= action.payload}
      )
    }
  })