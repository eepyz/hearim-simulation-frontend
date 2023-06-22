import { Fragment, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toolStateActions } from "../../../../store/state/toolState";
import { Exporter } from "../../../../util/exporter/exporter";

import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import * as THREE from "three";
import styles from "../../../../assets/css/Simulation.module.css";

const ToolMenu = () => {
  const dispatch = useDispatch();
  const toolState = useSelector((state) => state.toolState);
  const flowState = useSelector((state) => state.flowState);
  const meshInfoList = useSelector((state) => state.meshState.meshInfoList);
  const currentBoundary = useSelector(
    (state) => state.boundaries.currentBoundary
  );

  const exporter = new Exporter();

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
    exportSTL: () => {
      exporter.toASCIISTL(meshInfoList, currentBoundary);
    },
    showLookupTable: () => {
      dispatch(toolStateActions.showLookupTable());
    },
  };

  const colorRangeBar = () => {
    let value = toolState.angleValue;
    const min = 0;
    const max = 360;
    const percentage = (value - min) / (max - min);
    const bg = `linear-gradient(90deg, #85abfe ${percentage * 100}%, #ddd ${
      percentage * 100
    }%)`;
    return {
      background: bg,
    };
  };

  const changeAngleValue = (e) => {
    dispatch(toolStateActions.changeAngle(e.target.value));
  };

  useEffect(() => {
    const keyBoardHandler = (e) => {
      let key = e.key.toUpperCase();
      switch (key) {
        case "Q":
          dispatch(toolStateActions.showLine());
          break;
        case "W":
          dispatch(toolStateActions.findBoundary());
          break;
        case "R":
          dispatch(toolStateActions.resetPosition());
          break;
        case "E":
          dispatch(toolStateActions.rotateObject());
          break;
        case "T":
          dispatch(toolStateActions.clippingObject());
          break;
        case "S":
          dispatch(toolStateActions.showFlowSettings());
          break;
        case "B":
          dispatch(toolStateActions.showBbox());
          break;
        case "I":
          dispatch(toolStateActions.showIndicator());
          break;
        case "L":
          dispatch(toolStateActions.showLookupTable());
          break;
      }
    };
    window.addEventListener("keydown", keyBoardHandler);
    return () => {
      window.removeEventListener("keydown", keyBoardHandler);
    };
  }, []);

  return (
    <Fragment>
      <div className={styles["tool-menu"]}>
        {/* <button>
          <label htmlFor="stlfile">
            <span className={"material-symbols-outlined " + styles["icons"]}>
              folder_supervised
            </span>
          </label>
          <input  type="file" id="stlfile" />
        </button> */}

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
          {toolState.findBoundary && (
            <>
              <input
                style={colorRangeBar()}
                type="range"
                min="0"
                max="360"
                step="1"
                className={styles["adj-angle-range"]}
                value={toolState.angleValue}
                onChange={changeAngleValue}
              />
              <div className={styles["adj-angle-number"]}>
                {toolState.angleValue}
                <span>°</span>
              </div>
            </>
          )}
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

        <button
          title="Divide Surface and Export STL"
          onClick={ToolHandlers.exportSTL}
        >
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
