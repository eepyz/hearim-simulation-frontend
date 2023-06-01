import { configureStore } from "@reduxjs/toolkit";

import flowStateReducer from "./state/flowState";
import toolStateReducer from "./state/toolState";
import pointerStateReducer from "./state/pointerState";
import inidicatorStateReducer from "./state/indicatorState";
import AnglesReducer from "./config/angle";

const store = configureStore({
  reducer: {
    flowState: flowStateReducer,
    toolState: toolStateReducer,
    pointerState: pointerStateReducer,
    inidicatorState: inidicatorStateReducer,
    angles: AnglesReducer,
  },
});

export default store;
