import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  meshList: [],
  meshInfoList: [],
};

const meshStateSlice = createSlice({
  name: "flowState",
  initialState: initialState,
  reducers: {
    saveMeshList(state, action) {
      return action.payload;
    },
    saveMeshInfoList(state, action) {
      state.meshInfoList = action.payload;
    },
  },
});

export const meshStateActions = meshStateSlice.actions;
export default meshStateSlice.reducer;
