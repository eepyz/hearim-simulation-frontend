import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flowSelected: true,
  gravitySelected: false,
  flow: { phi: 0, theta: 0 },
  gravity: { phi: 0, theta: 0 },
};

const anglesSlice = createSlice({
  name: "angles",
  initialState: initialState,
  reducers: {
    setFlowSelected(state) {
      state.flowSelected = true;
      state.gravitySelected = false;
    },
    setGravitySelected(state) {
      state.gravitySelected = true;
      state.flowSelected = false;
    },
    updateFlowAngles(state, action) {
      state.flow = action.payload;
    },
    updateGravityAngles(state, action) {
      state.gravity = action.payload;
    },
  },
});

export const anglesActions = anglesSlice.actions;
export default anglesSlice.reducer;
