import { Fragment, Suspense, useState } from "react";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./userSettings/ToolMenu";
import BoundaryMenu from "./userSettings/BoundaryMenu";
import FlowMenu from "./userSettings/FlowMenu";
import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  //state
  const [flowMenuOpen, setFlowMenuOpen] = useState(false);

  return (
    <Fragment>
      <div className={styles["container"]}>
        <GUIView />
      </div>
      {flowMenuOpen && <FlowMenu />}
      <ToolMenu />
      <BoundaryMenu />
    </Fragment>
  );
};
export default Simulation;
