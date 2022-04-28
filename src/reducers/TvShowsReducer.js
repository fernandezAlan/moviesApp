import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getTvSeries,
  selectTvSerie,
  getTvSerieCredits,
  getSeasonDetails,
} from "../api/getTvSeries";

const initialState = {
  TvSeries: {
    popular: {
      totalPages:null,
      actualPage: 1,
      results: [],
    },
    top_rated: {
      totalPages:null,
      actualPage: 1,
      results: [],
    },
    on_the_air: {
      totalPages:null,
      actualPage: 1,
      results: [],
    },
  },
  selectedTvSerie: null,
  selectedTvSerieCredits: null,
  tvSerieCredits: null,
  seasonDetails: null,
};

export const AddTvSeries = createAsyncThunk(
  "UPDATE_TV_SERIES",
  async (data) => await getTvSeries(data)
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
    clearSeasonDetails: (state, action) => {
      state.seasonDetails = null;
    },
    setNextPageTV: (state, action) => {
      state.TvSeries[action.payload.type].actualPage++;
    },
    setPrevPageTV: (state, action) => {
      state.TvSeries[action.payload.type].actualPage--;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(AddTvSeries.fulfilled, (state, action) => {
        const {type} = action.meta.arg;
        state.TvSeries[type].results.push(action.payload);
        state.TvSeries[type].totalPages=action.payload.total_pages
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
      });
  },
});

export const {
  clearSelectedTvSerie,
  clearPopularTvSerie,
  clearSeasonDetails,
  setNextPageTV,
  setPrevPageTV,
} = tvSeriesSlice.actions;
