import ToolMenu from "./menus/ToolMenu";
import BoundaryMenu from "./menus/BoundaryMenu";
import FlowMenu from "./menus/FlowMenu";

import GraphicView from "./3DView/GraphicView";

import { Fragment, Suspense, useState } from "react";

import { Leva } from "leva";

import "../../../assets/css/simul.css";

const Simulation = () => {
  const [flowMenuOpen, setFlowMenuOpen] = useState(false);
  const toggleFlowMenu = () => {
    setFlowMenuOpen(!flowMenuOpen);
  };

  return (
    <Fragment>
      {flowMenuOpen && <FlowMenu />}
      <ToolMenu />
      <BoundaryMenu />
      <div className="container">
        <Leva collapsed />
        <GraphicView />
      </div>
    </Fragment>
  );
};
export default Simulation;
