import { Fragment, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./userSettings/ToolMenu";
import BoundaryMenu from "./userSettings/BoundaryMenu";
import FlowMenu from "./userSettings/FlowMenu";
import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  const showFlowSettings = useSelector(
    (state) => state.toolState.showFlowSettings
  );

  return (
    <Fragment>
      <div className={styles["container"]}>
        <GUIView />
      </div>
      {showFlowSettings && <FlowMenu />}
      <ToolMenu />
      <BoundaryMenu />
    </Fragment>
  );
};
export default Simulation;
