import { createSlice, current } from "@reduxjs/toolkit";

import Boundary from "../../util/math/info/Boundary";

const initialState = {
  boundaries: {},
  currentId: null,
  currentBoundary: { ...Boundary },
};
const boundariesSlice = createSlice({
  name: "boundaries",
  initialState: initialState,
  reducers: {
    saveCurrentId(state, action) {
      state.currentId = action.payload;
    },

    updateBoundary(state, action) {
      state.currentBoundary = state.boundaries[state.currentId];
    },

    updateBoundaryType(state, action) {
      state.boundaries[state.currentId] = action.payload;
      state.currentBoundary = state.boundaries[state.currentId];
      console.log(state.boundaries[state.currentId]);
    },

    saveNewBoundary(state, action) {
      state.boundaries[action.payload.id] = action.payload.boundary;
      state.boundaries[action.payload.id].id = action.payload.id;
      state.boundaries[action.payload.id].mesh = action.payload.mesh;
      state.boundaries[action.payload.id].triangle = action.payload.triangle;
      state.currentBoundary = state.boundaries[action.payload.id];
    },
  },
});

export const boundariesActions = boundariesSlice.actions;
export default boundariesSlice.reducer;
