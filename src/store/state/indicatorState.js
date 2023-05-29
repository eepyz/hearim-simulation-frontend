import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  angleSearching: false,
  angleSelected: false,
  angleDecided: false,
  flowAngle: {
    selected: true,
    value: {
      theta: null,
      phi: null,
    },
  },
  gravityAngle: {
    selected: false,
    value: {
      theta: null,
      phi: null,
    },
  },
};

const indicatorStateSlice = createSlice({
  name: "indicatorState",
  initialState: initialState,
  reducers: {
    angleSearching(state) {
      state.angleSearching = !state.angleSearching;
    },
    angleSelected(state) {
      state.angleSelected = !state.angleSelected;
    },
    angleDecided(state) {
      state.angleDecided = !state.angleDecided;
    },
    flowAngleSelected(state) {
      state.flowAngle.selected = !state.flowAngle.selected;
    },
    flowAngleSelected(state, action) {
      state.flowAngle.selected = !state.flowAngle.selected;
    },
    angleSearching(state) {
      state.angleSearching = !state.angleSearching;
    },
  },
});

export const indicatorStateSliceActions = indicatorStateSlice.actions;

export default indicatorStateSlice.reducer;
