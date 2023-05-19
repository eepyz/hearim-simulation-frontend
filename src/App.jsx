import { Fragment } from "react";

import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";
import Simulation from "./views/pages/simul/Simulation";

import "./assets/css/common.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Simulation />
      <Footer />
    </Fragment>
  );
}

export default App;
