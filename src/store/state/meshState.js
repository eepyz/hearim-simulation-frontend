import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meshList: null,
  meshInfoList: null,
};

const meshStateSlice = createSlice({
  name: "flowState",
  initialState: initialState,
  reducers: {
    saveMeshList(state, action) {
      state.meshList = action.payload;
    },
    saveMeshInfoList(state, action) {
      state.meshInfoList = action.payload;
    },
  },
});

export const meshStateActions = meshStateSlice.actions;
export default meshStateSlice.reducer;
