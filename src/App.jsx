import { RouterProvider, Route } from "react-router-dom";
import Root from "./views/layout/Root";
import { useMemo, createContext, useState } from "react";

import router from "./router/Router";

import "./assets/css/common.css";

import BoundaryInfo from "./util/math/info/BoundaryInfo";

export const BoundariesContext = createContext({
  //초기값 설정
  setBoundaries: () => {},
  setBoundary: () => {},
});

function App() {
  const [boundaries, setBoundaries] = useState({});
  const [boundary, setBoundary] = useState(new BoundaryInfo());

  const value = useMemo(
    () => (
      { setBoundaries, setBoundary },
      [boundaries, boundary, setBoundaries, setBoundary]
    )
  );

  return (
    <BoundariesContext.Provider value={value}>
      <RouterProvider router={router} />
    </BoundariesContext.Provider>
  );
}

export default App;
