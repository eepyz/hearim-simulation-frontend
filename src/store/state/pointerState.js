import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  objectHovered: false,
  objectClicked: false,
  hoverInfo: {
    number: null,
    object: null,
    face: null,
  },
  clickInfo: {
    number: null,
    object: null,
    face: null,
  },
};

const pointerStateSlice = createSlice({
  name: "pointerState",
  initialState: initialState,
  reducers: {
    objectHovered(state, action) {
      state.objectHovered = action.payload;
    },
    objectClicked(state, action) {
      state.objectClicked = action.payload;
    },
    hoverInfo(state, action) {
      state.hoverInfo.number = action.payload.number;
      state.hoverInfo.object = action.payload.object;
      state.hoverInfo.face = action.payload.face;
    },
    clickInfo(state, action) {
      state.clickInfo.number = action.payload.number;
      state.clickInfo.object = action.payload.object;
      state.clickInfo.face = action.payload.face;
    },
  },
});

export const pointerStateActions = pointerStateSlice.actions;
export default pointerStateSlice.reducer;
