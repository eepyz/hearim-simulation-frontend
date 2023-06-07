import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
const boundariesSlice = createSlice({
  name: "boundaries",
  initialState: initialState,
  reducers: {
    updateBoundaries(state, action) {
      return action.payload;
    },
  },
});

export const boundariesActions = boundariesSlice.actions;
export default boundariesSlice.reducer;
