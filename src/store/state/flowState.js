import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  internal: true,
  external: false,
  transient: true,
  steady: false,
  gravity: true,
  noGravity: false,
  physicalFlowTime: null,
  gravityForce: null,
};

const flowStateSlice = createSlice({
  name: "flowState",
  initialState: initialState,
  reducers: {
    internalFlow(state) {
      state.internal = true;
      state.external = false;
    },
    externalFlow(state) {
      state.external = true;
      state.internal = false;
    },
    transientFlow(state) {
      state.transient = true;
      state.steady = false;
    },
    steadyFlow(state) {
      state.steady = true;
      state.transient = false;
    },
    gravity(state) {
      state.gravity = true;
      state.noGravity = false;
    },
    noGravity(state) {
      state.noGravity = true;
      state.gravity = false;
    },
    updatePhysicalFlowTime(state, action) {
      state.physicalFlowTime = action.payload;
    },
    updateGravityForce(state, action) {
      state.gravityForce = action.payload;
    },
  },
});

export const flowStateActions = flowStateSlice.actions;
export default flowStateSlice.reducer;
