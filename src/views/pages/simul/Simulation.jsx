import React, { Fragment, useState, createContext, useContext } from "react";
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
  const [updatedFile, setUpdatedFile] = useState(null);
  const onFileChange = (file) => {
    setUpdatedFile(file);
    console.log(updatedFile);
  };

  return (
    <Fragment>
      <div className={styles["container"]}>
        <GUIView updatedFile={updatedFile} />
      </div>

      {showFlowSettings && <FlowMenu />}
      <ToolMenu onFileChange={onFileChange} />

      {findBoundary && <BoundaryMenu />}
      {findBoundary && <BoundarySettings />}

      {showIndicator && <AngleSettings />}
      <AngleSettingsResult />
    </Fragment>
  );
};
export default Simulation;
