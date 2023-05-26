import { Fragment, Suspense, useState } from "react";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./menus/ToolMenu";
import BoundaryMenu from "./menus/BoundaryMenu";
import FlowMenu from "./menus/FlowMenu";
import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  const [flowMenuOpen, setFlowMenuOpen] = useState(false);
  const toggleFlowMenu = () => {
    setFlowMenuOpen(!flowMenuOpen);
  };

  return (
    <Fragment>
      <div className="container">
        <Leva collapsed />
        <GUIView />
      </div>
      {flowMenuOpen && <FlowMenu />}
      <ToolMenu />
      <BoundaryMenu />
    </Fragment>
  );
};
export default Simulation;
