import { configureStore } from "@reduxjs/toolkit";

import flowStateReducer from "./state/flowState";
import toolStateReducer from "./state/toolState";
import pointerStateReducer from "./state/pointerState";
import inidicatorStateReducer from "./state/indicatorState";
import AnglesReducer from "./config/angle";
import boundariesReducer from "./config/boundaries";
import boundaryReducer from "./config/boundary";

const store = configureStore({
  reducer: {
    flowState: flowStateReducer,
    toolState: toolStateReducer,
    pointerState: pointerStateReducer,
    inidicatorState: inidicatorStateReducer,
    angles: AnglesReducer,
    boundaries: boundariesReducer,
    boundary: boundaryReducer,
  },
});

export default store;
