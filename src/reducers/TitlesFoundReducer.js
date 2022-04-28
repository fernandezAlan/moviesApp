import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchTitle } from "../api/search";
const initialState = {
  actualPage: 1,
  totalPages: null,
  totalResults: null,
  results: [],
};
export const setTitlesFound = createAsyncThunk(
  "ADD_TITLES_FOUND",
  async (data) => await searchTitle(data)
);
export const titlesFoundSlice = createSlice({
  name: "titles_found",
  initialState,
  reducers: {
    clearTitlesFound: (state, action) => {
      state.results = [];
      state.actualPage = 1;
      state.totalResults = null;
      state.totalPages = null;
    },
    setNextPageFT: (state, action) => {
      state.actualPage++;
    },
    setPrevPageFT: (state, action) => {
      if (state.actualPage > 1) {
        state.actualPage--;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setTitlesFound.fulfilled, (state, action) => {
      state.results.push(action.payload);
      state.totalPages = action.payload.total_pages;
      state.totalResults = action.payload.total_results;
    });
  },
});

export const { clearTitlesFound, setNextPageFT, setPrevPageFT } =
  titlesFoundSlice.actions;
