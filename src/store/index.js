import { configureStore } from "@reduxjs/toolkit";

import flowStateReducer from "./state/flowState";
import toolStateReducer from "./state/toolState";
import pointerStateReducer from "./state/pointerState";
import AnglesReducer from "./config/angle";
import boundariesReducer from "./config/boundaries";

const store = configureStore({
  reducer: {
    flowState: flowStateReducer,
    toolState: toolStateReducer,
    pointerState: pointerStateReducer,
    angles: AnglesReducer,
    boundaries: boundariesReducer,
  },
});

export default store;
