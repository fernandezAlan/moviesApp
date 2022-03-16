import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectPerson, getPersonCredits } from "../api/getPerson";

const initialState = {
  selectedPerson: null,
  personCredits: null,
};

export const addPerson = createAsyncThunk(
  "ADD_SELECTED_PERSON",
  async (id) => await selectPerson(id)
);

export const addPersonCredits = createAsyncThunk(
  "ADD_PERSON_CREDITS",
  async (id) => await getPersonCredits(id)
);
export const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {
    clearSelectedPerson: (state, action) => {
      state.selectedPerson = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addPerson.fulfilled, (state, action) => {
        state.selectedPerson = action.payload;
      })
      .addCase(addPersonCredits.fulfilled, (state, action) => {
        state.personCredits = action.payload;
      });
  },
});

export const {clearSelectedPerson} = PersonSlice.actions
 