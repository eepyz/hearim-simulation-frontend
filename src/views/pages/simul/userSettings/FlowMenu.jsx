import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toolStateActions } from "../../../../store/state/toolState";
import { flowStateActions } from "../../../../store/state/flowState";

import styles from "../../../../assets/css/Simulation.module.css";

const FlowMenu = () => {
  const dispatch = useDispatch();

  const flowState = useSelector((state) => state.flowState);

  const closeFlowMenu = () => {
    dispatch(toolStateActions.showFlowSettings());
  };

  const changeFlowSettings = (e) => {
    switch (e.target.id) {
      case "internal":
        dispatch(flowStateActions.internalFlow());
        break;
      case "external":
        dispatch(flowStateActions.externalFlow());
        break;
      case "transient":
        dispatch(flowStateActions.transientFlow());
        break;
      case "steady":
        dispatch(flowStateActions.steadyFlow());
        break;
      case "gravity":
        dispatch(flowStateActions.gravity());
        break;
      case "no-gravity":
        dispatch(flowStateActions.noGravity());
        break;
    }
  };

  const updateFlowDetails = (e) => {
    switch (e.target.name) {
      case "physicalFlow":
        dispatch(flowStateActions.updatePhysicalFlowTime(e.target.value));
        break;
      case "gravityForce":
        dispatch(flowStateActions.updateGravityForce(e.target.value));
        break;
    }
  };

  return (
    <Fragment>
      <div className={styles["flow-settings-container"]}>
        <div className={styles["flow-settings-box"]}>
          <div>
            <div className={styles["flow-settings-title"]}>Flow Settings</div>
          </div>
          <div className={styles["flow-settings-table"]}>
            <div className="flex">
              <div className={styles["flow-settings-checkbox"]}>
                <input
                  name="inout"
                  type="radio"
                  className={styles["flow-type"]}
                  id="internal"
                  onChange={changeFlowSettings}
                  checked={flowState.internal}
                />
                <label htmlFor="internal" className={styles["modal-checkbox"]}>
                  Internal Flow
                </label>
              </div>
              <div>
                <input
                  name="inout"
                  type="radio"
                  className={styles["flow-type"]}
                  id="external"
                  onChange={changeFlowSettings}
                  checked={flowState.external}
                />
                <label htmlFor="external" className={styles["modal-checkbox"]}>
                  External Flow
                </label>
              </div>
            </div>
            <div className="flex">
              <div className={styles["flow-settings-checkbox"]}>
                <input
                  name="continuity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="transient"
                  onChange={changeFlowSettings}
                  checked={flowState.transient}
                />
                <label htmlFor="transient" className={styles["modal-checkbox"]}>
                  Transient Flow
                </label>
              </div>
              <div>
                <input
                  name="continuity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="steady"
                  onChange={changeFlowSettings}
                  checked={flowState.steady}
                />
                <label htmlFor="steady" className={styles["modal-checkbox"]}>
                  Steady Flow
                </label>
              </div>
            </div>
            {flowState.transient && (
              <div className="flex">
                <div>
                  <input
                    type="number"
                    name="physicalFlow"
                    placeholder="physical flow time(s)"
                    className={styles["flow-detail-input"]}
                    onChange={updateFlowDetails}
                    value={flowState.physicalFlowTime}
                  />
                </div>
              </div>
            )}
            <div className="flex">
              <div className={styles["flow-settings-checkbox"]}>
                <input
                  name="gravity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="gravity"
                  onChange={changeFlowSettings}
                  checked={flowState.gravity}
                />
                <label htmlFor="gravity" className={styles["modal-checkbox"]}>
                  Gravity
                </label>
              </div>
              <div>
                <input
                  name="gravity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="no-gravity"
                  onChange={changeFlowSettings}
                  checked={flowState.noGravity}
                />
                <label
                  htmlFor="no-gravity"
                  className={styles["modal-checkbox"]}
                >
                  No Gravity
                </label>
              </div>
            </div>
            {flowState.gravity && (
              <div className="flex">
                <div>
                  <input
                    type="number"
                    name="gravityForce"
                    placeholder="gravity force(m/s^2)"
                    className={styles["flow-detail-input"]}
                    onChange={updateFlowDetails}
                    value={flowState.gravityForce}
                  />
                </div>
              </div>
            )}
          </div>
          <div className={styles["flow-settings-done-div"]}>
            <button
              type="button"
              className={styles["flow-settings-done-btn"]}
              onClick={closeFlowMenu}
            >
              DONE
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FlowMenu;
