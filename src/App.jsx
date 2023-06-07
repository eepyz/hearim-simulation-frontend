import { RouterProvider, Route } from "react-router-dom";
import Root from "./views/layout/Root";

import router from "./router/Router";

import "./assets/css/common.css";

import BoundaryInfo from "./util/math/info/BoundaryInfo";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
