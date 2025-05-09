import React, {
  Fragment,
  useState,
  useEffect,
  createContext,
  useContext,
  Suspense,
} from "react";
import { useSelector } from "react-redux";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./userSettings/ToolMenu";
import BoundaryMenu from "./userSettings/BoundaryMenu";
import FlowMenu from "./userSettings/FlowMenu";
import BoundarySettings from "./userSettings/BoundarySettings";
import AngleSettings from "./userSettings/AngleSettings";

import AngleSettingsResult from "./userSettings/AngleSettingsResult";

import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  const showFlowSettings = useSelector(
    (state) => state.toolState.showFlowSettings
  );
  const showIndicator = useSelector((state) => state.toolState.showIndicator);
  const findBoundary = useSelector((state) => state.toolState.findBoundary);
  const pointerState = useSelector((state) => state.pointerState);

  return (
    <Fragment>
      <div className={styles["container"]}>
        <GUIView />
      </div>

      <ToolMenu />

      {showFlowSettings && <FlowMenu />}
      {findBoundary && pointerState.objectClicked && <BoundaryMenu />}
      {findBoundary && pointerState.objectClicked && <BoundarySettings />}
      {findBoundary && !pointerState.objectClicked && (
        <div className={styles["click-surface"]}>Click the surface.</div>
      )}

      {showIndicator && <AngleSettings />}
      <AngleSettingsResult />
    </Fragment>
  );
};
export default Simulation;
