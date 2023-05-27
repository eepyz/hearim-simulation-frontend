import { Fragment, Suspense, useState } from "react";
import { Leva } from "leva";

import GUIView from "./GUIView/GUIView";
import ToolMenu from "./menus/ToolMenu";
import BoundaryMenu from "./menus/BoundaryMenu";
import FlowMenu from "./menus/FlowMenu";
import styles from "../../../assets/css/Simulation.module.css";

const Simulation = () => {
  //state
  const [flowMenuOpen, setFlowMenuOpen] = useState(false);

  const [toolState, setToolState] = useState({
    showLine: false,
    findBoundary: false,
    resetPosition: false,
    rotateObject: false,
    rotateCamera: false,
    clippingObject: false,
    showFlowSettings: true,
    showBbox: false,
    showIndicator: false,
    showLookupTable: false,
  });

  const [indicatorState, setIndicatorState] = useState({
    angleSearching: false,
    angleSelected: false,
    angleDecided: false,
    flowAngle: {
      selected: true,
      value: {
        theta: null,
        phi: null,
      },
    },
    gravityAngle: {
      selected: false,
      value: {
        theta: null,
        phi: null,
      },
    },
  });

  const [pointerState, setPointerState] = useState({
    objectHovered: false,
    objectClicked: false,
    hoverInfo: {
      number: null,
      object: null,
      face: null,
    },
    clickInfo: {
      number: null,
      object: null,
      face: null,
    },
  });

  const [controlState, setControlState] = useState({
    isDragging: false,
    isWindowResized: false,
    isKeyLocked: false,
  });

  return (
    <Fragment>
      <div className={styles["container"]}>
        <GUIView toolState={toolState} />
      </div>
      {flowMenuOpen && <FlowMenu />}
      <ToolMenu toolState={toolState} />
      <BoundaryMenu />
    </Fragment>
  );
};
export default Simulation;
