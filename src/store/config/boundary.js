import { createSlice } from "@reduxjs/toolkit";
import Boundary from "../../util/math/info/Boundary";

const boundarySlice = createSlice({
  name: "boundary",
  initialState: Boundary,
  reducers: {
    updateBoundary(state, action) {
      return action.payload;
      console.log(state);
    },
  },
});

export const boundaryActions = boundarySlice.actions;
export default boundarySlice.reducer;
