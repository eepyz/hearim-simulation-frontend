import { createSlice } from "@reduxjs/toolkit";

import BoundaryInfo from "../../util/math/info/BoundaryInfo";

const initialState = { boundaries: {}, boundary: null };
const boundarySlice = createSlice({
  name: "boundaryState",
  initialState: initialState,
  reducers: {
    updateBoundaries(state, action) {
      state.boundaries = action.payload;
      return state;
    },
    updateBoundary(state, action) {
      state.boundary = action.payload;
      // console.log(state.boundary);
      return state;
    },
  },
});

export const boundaryActions = boundarySlice.actions;
export default boundarySlice.reducer;
