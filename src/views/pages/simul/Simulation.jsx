import { Fragment, useState, createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./userSettings/ToolMenu";
import BoundaryMenu from "./userSettings/BoundaryMenu";
import FlowMenu from "./userSettings/FlowMenu";
import BoundarySettings from "./userSettings/BoundarySettings";
import AngleSettings from "./userSettings/AngleSettings";

import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  const toolState = useSelector((state) => state.toolState);

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
      {toolState.showIndicator && <AngleSettings />}
      {/* <BoundarySettings /> */}
    </Fragment>
  );
};
export default Simulation;
