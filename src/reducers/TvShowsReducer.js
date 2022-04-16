import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTvSeries,
  selectTvSerie,
  getTvSerieCredits,
  getSeasonDetails,
} from "../api/getTvSeries";

const initialState = {
  TvSeries: {
    popular:{},
    top_rated:{},
    on_the_air:{},
  },
  selectedTvSerie: null,
  selectedTvSerieCredits: null,
  tvSerieCredits: null,
  seasonDetails: null,
};

export const AddPopularTvSeries = createAsyncThunk(
  "UPDATE_TV_SERIES",
  async (type) => await getTvSeries(type)
);
export const addSelectedTvSerie = createAsyncThunk(
  "SELECT_TV_SERIE",
  async (id) => await selectTvSerie(id)
);
export const addTvSerieCredits = createAsyncThunk(
  "SELECT_SERIE_CREDITS",
  async (id) => await getTvSerieCredits(id)
);

export const addSeasonDetails = createAsyncThunk(
  "ADD_SEASON_DETAILS",
  async (data) => await getSeasonDetails(data)
);

export const tvSeriesSlice = createSlice({
  name: "TVseries",
  initialState,
  reducers: {
    clearSelectedTvSerie: (state, action) => {
      state.selectedTvSerie = null;
    },
    clearPopularTvSerie: (state, action) => {
      state.popularTvSeries = null;
    },
    clearSeasonDetails:(state,action)=>{
      state.seasonDetails=null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddPopularTvSeries.fulfilled, (state, action) => {
        state.TvSeries[action.meta.arg] = action.payload;
      })
      .addCase(addSelectedTvSerie.fulfilled, (state, action) => {
        state.selectedTvSerie = action.payload;
      })
      .addCase(addTvSerieCredits.fulfilled, (state, action) => {
        action.payload.allCast = action.payload.cast.slice();
        action.payload.cast.length = 4;
        action.payload.director = null;
        state.selectedTvSerieCredits = action.payload;
      })
      .addCase(addSeasonDetails.fulfilled, (state, action) => {
        state.seasonDetails = action.payload;
      })
  },
});

export const { clearSelectedTvSerie, clearPopularTvSerie,clearSeasonDetails} =
  tvSeriesSlice.actions;
