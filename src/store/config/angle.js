import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  flowSelected: true,
  gravitySelected: false,
  flow: { phi: 0, theta: 0 },
  gravity: { phi: 0, theta: 0 },
  moveBtnClicked: false,
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
    setMoveBtnClicked(state) {
      state.moveBtnClicked = !state.moveBtnClicked;
      console.log(state.moveBtnClicked);
    },
  },
});

export const anglesActions = anglesSlice.actions;
export default anglesSlice.reducer;
