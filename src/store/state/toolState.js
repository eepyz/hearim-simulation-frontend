import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showLine: false,
  findBoundary: false,
  resetPosition: false,
  rotateObject: false,
  rotateCamera: false,
  clippingObject: false,
  showFlowSettings: true,
  showBbox: false,
  showIndicator: false,
  showLookupTable: false,
};

const toolStateSlice = createSlice({
  name: "toolState",
  initialState: initialState,
  reducers: {
    showLine(state) {
      state.showLine = !state.showLine;
    },
    findBoundary(state) {
      state.findBoundary = !state.findBoundary;
    },
    resetPosition(state, action) {
      state.resetPosition = !state.resetPosition;
      state.showLine = false;
      state.findBoundary = false;
      state.rotateObject = false;
      state.rotateCamera = false;
      state.clippingObject = false;
      state.showLookupTable = false;
    },
    rotateObject(state) {
      state.rotateObject = !state.rotateObject;
    },
    rotateCamera(state) {
      state.rotateCamera = !state.rotateCamera;
    },
    clippingObject(state) {
      state.clippingObject = !state.clippingObject;
    },
    showFlowSettings(state) {
      state.showFlowSettings = !state.showFlowSettings;
    },
    showBbox(state) {
      state.showBbox = !state.showBbox;
    },
    showIndicator(state) {
      state.showIndicator = !state.showIndicator;
    },
    showLookupTable(state) {
      state.showLookupTable = !state.showLookupTable;
    },
  },
});

export const toolStateActions = toolStateSlice.actions;
export default toolStateSlice.reducer;
