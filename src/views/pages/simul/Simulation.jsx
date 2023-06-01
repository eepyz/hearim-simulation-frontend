import { Fragment, useState, createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./userSettings/ToolMenu";
import BoundaryMenu from "./userSettings/BoundaryMenu";
import FlowMenu from "./userSettings/FlowMenu";
import BoundarySettings from "./userSettings/BoundarySettings";
import FlowAngleSettings from "./userSettings/FlowAngleSettings";

import BoundaryInfo from "../../../util/math/info/BoundaryInfo";

import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  const showFlowSettings = useSelector(
    (state) => state.toolState.showFlowSettings
  );

  const [boundaries, setBoundaries] = useState({});
  const [boundary, setBoundary] = useState(new BoundaryInfo());

  return (
    <Fragment>
      <BoundariesContext.Provider
        value={[setBoundaries, setBoundary, boundaries, boundary]}
      >
        <div className={styles["container"]}>
          <GUIView />
        </div>
        {showFlowSettings && <FlowMenu />}
        <ToolMenu />
        <BoundaryMenu />
        <FlowAngleSettings />

        {/* <BoundarySettings /> */}
      </BoundariesContext.Provider>
    </Fragment>
  );
};
export default Simulation;
export const BoundariesContext = createContext(null);
