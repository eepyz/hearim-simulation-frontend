import { createSlice, current } from "@reduxjs/toolkit";

import Boundary from "../../util/info/Boundary";

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
    saveNewBoundary(state, action) {
      state.boundaries[action.payload.id] = action.payload.boundary;
      state.boundaries[action.payload.id].id = action.payload.id;
      state.boundaries[action.payload.id].mesh = action.payload.mesh;
      state.boundaries[action.payload.id].meshNum = action.payload.meshNum;
      state.boundaries[action.payload.id].triangle = action.payload.triangle;
      state.currentBoundary = state.boundaries[action.payload.id];
    },
    updateBoundary(state, action) {
      state.currentBoundary = state.boundaries[state.currentId];
    },
    updateBoundaryType(state, action) {
      state.boundaries[state.currentId] = action.payload;
      state.currentBoundary = state.boundaries[state.currentId];
    },
    updateBoundaryValue(state, action) {
      state.boundaries[state.currentId] = action.payload;
      state.currentBoundary = state.boundaries[state.currentId];
    },
  },
});

export const boundariesActions = boundariesSlice.actions;
export default boundariesSlice.reducer;
