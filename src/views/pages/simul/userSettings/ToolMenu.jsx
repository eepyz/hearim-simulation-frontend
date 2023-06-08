import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toolStateActions } from "../../../../store/state/toolState";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import * as THREE from "three";
import styles from "../../../../assets/css/Simulation.module.css";

const ToolMenu = ({ onFileChange }) => {
  const dispatch = useDispatch();
  const toolState = useSelector((state) => state.toolState);
  const flowState = useSelector((state) => state.flowState);

  const [selectedFile, setSelectedFile] = useState(null);

  const ToolHandlers = {
    showLine: () => {
      dispatch(toolStateActions.showLine());
    },
    findBoundary: () => {
      dispatch(toolStateActions.findBoundary());
    },
    resetPosition: () => {
      dispatch(toolStateActions.resetPosition());
    },
    rotateObject: () => {
      dispatch(toolStateActions.rotateObject());
    },
    rotateCamera: () => {
      dispatch(toolStateActions.rotateCamera());
    },
    clippingObject: () => {
      dispatch(toolStateActions.clippingObject());
    },
    showFlowSettings: () => {
      dispatch(toolStateActions.showFlowSettings());
    },
    showBbox: () => {
      dispatch(toolStateActions.showBbox());
    },
    showIndicator: () => {
      dispatch(toolStateActions.showIndicator());
    },
    showLookupTable: () => {
      dispatch(toolStateActions.showLookupTable());
    },
  };

  const changeSTLfile = (e) => {
    const loader = new STLLoader();
    const uploadFile = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      const target = e.target;
      let stlGeometry = loader.parse(target.result);
      setSelectedFile(stlGeometry);
      onFileChange(stlGeometry);
      THREE.Cache.clear();
    };
    fileReader.readAsArrayBuffer(uploadFile);
  };

  return (
    <Fragment>
      <div className={styles["tool-menu"]}>
        <button>
          <label htmlFor="stlfile">
            <span className={"material-symbols-outlined " + styles["icons"]}>
              folder_supervised
            </span>
          </label>
          <input onChange={changeSTLfile} type="file" id="stlfile" />
        </button>

        <button id="show-Lines" type="button" onClick={ToolHandlers.showLine}>
          <span
            className={
              toolState.showLine
                ? "material-symbols-outlined " + styles["icons-clicked"]
                : "material-symbols-outlined " + styles["icons"]
            }
          >
            {" "}
            change_history{" "}
          </span>
        </button>

        <div className="flex">
          <button
            id="found-boundary"
            type="button"
            title="[W] Find Boundary"
            onClick={ToolHandlers.findBoundary}
          >
            <span
              className={
                toolState.findBoundary
                  ? "material-symbols-outlined " + styles["icons-clicked"]
                  : "material-symbols-outlined " + styles["icons"]
              }
            >
              {" "}
              deployed_code{" "}
            </span>
          </button>
          {/* <input
            type="range"
            min="0"
            max="360"
            step="1"
            className="adj-angle-range"
            placeholder="Angle (default : 90 deg)"
          /> */}

          {/* <div className="adj-angle-number">
            <input />
            <span>°</span>
          </div> */}
        </div>

        <button
          id="rotate-object"
          type="button"
          title="[E] Rotate Object"
          onClick={ToolHandlers.rotateObject}
        >
          <span
            className={
              toolState.rotateObject
                ? "material-symbols-outlined " + styles["icons-clicked"]
                : "material-symbols-outlined " + styles["icons"]
            }
          >
            {" "}
            rotate_90_degrees_cw{" "}
          </span>
        </button>

        <button
          id="reset-position"
          type="button"
          title="[R] Reset Position"
          onClick={ToolHandlers.resetPosition}
        >
          <span className={"material-symbols-outlined " + styles["icons"]}>
            {" "}
            sync{" "}
          </span>
        </button>

        <button
          id="z-clipping"
          type="button"
          title="[T] Clipping Object"
          onClick={ToolHandlers.clippingObject}
        >
          <span
            className={
              toolState.clippingObject
                ? "material-symbols-outlined " + styles["icons-clicked"]
                : "material-symbols-outlined " + styles["icons"]
            }
          >
            {" "}
            content_cut{" "}
          </span>
        </button>
        {flowState.external && (
          <button
            id="bounding-box"
            type="button"
            title="[B] Show Bounding Box"
            onClick={ToolHandlers.showBbox}
          >
            <span
              className={
                toolState.showBbox
                  ? "material-symbols-outlined " + styles["icons-clicked"]
                  : "material-symbols-outlined " + styles["icons"]
              }
            >
              {" "}
              view_in_ar{" "}
            </span>
          </button>
        )}
        {(flowState.external || flowState.gravity) && (
          <button
            id="indicator-activated"
            type="button"
            title="[I] Indicator Activate"
            onClick={ToolHandlers.showIndicator}
          >
            <span
              className={
                toolState.showIndicator
                  ? "material-symbols-outlined " + styles["icons-clicked"]
                  : "material-symbols-outlined " + styles["icons"]
              }
            >
              {" "}
              near_me{" "}
            </span>
          </button>
        )}

        <button
          id="settings"
          title="[S] Open Flow Settings"
          onClick={ToolHandlers.showFlowSettings}
        >
          <span className={"material-symbols-outlined " + styles["icons"]}>
            {" "}
            settings{" "}
          </span>
        </button>

        <button title="Divide Surface and Export STL">
          <span className={"material-symbols-outlined " + styles["icons"]}>
            {" "}
            file_open{" "}
          </span>
        </button>

        <button>
          <span className={"material-symbols-outlined " + styles["icons"]}>
            {" "}
            invert_colors{" "}
          </span>
        </button>
      </div>
    </Fragment>
  );
};
export default ToolMenu;
