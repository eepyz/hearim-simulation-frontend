import { Fragment, Suspense } from "react";

import { Leva } from "leva";

import GraphicView from "./GraphicView";

import "../../../assets/css/simul.css";

const Simulation = () => {
  return (
    <Fragment>
      <div className="container">
        <Leva collapsed />
        <GraphicView />
      </div>
    </Fragment>
  );
};
export default Simulation;
