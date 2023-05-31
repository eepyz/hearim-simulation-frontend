import { configureStore } from "@reduxjs/toolkit";

import toolStateReducer from "./state/toolState";
import pointerStateReducer from "./state/pointerState";
import inidicatorStateReducer from "./state/indicatorState";
import boundaryReducer from "./config/boundary";

const store = configureStore({
  reducer: {
    toolState: toolStateReducer,
    pointerState: pointerStateReducer,
    inidicatorState: inidicatorStateReducer,
    boundaryState: boundaryReducer,
  },
});

export default store;
