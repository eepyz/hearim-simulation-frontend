import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toolStateActions } from "../../../../store/state/toolState";

import styles from "../../../../assets/css/Simulation.module.css";

const AngleSettingsResult = () => {
  const dispatch = useDispatch();
  const toolState = useSelector((state) => state.toolState);
  const flowState = useSelector((state) => state.flowState);
  const flowAngle = useSelector((state) => state.angles.flow);
  const gravityAngle = useSelector((state) => state.angles.gravity);

  const decideHandler = () => {
    dispatch(toolStateActions.showIndicator());
  };

  return (
    <Fragment>
      <div className={styles["indicator-result-box"]}>
        {flowState.external && (
          <div>
            <div className={styles["indicator-result-box-title"]}>
              flow angle
            </div>
            <span>phi: </span>
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="phi: empty"
              readOnly
              value={flowAngle.phi}
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>theta: </span>
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="theta: empty"
              readOnly
              value={flowAngle.theta}
            />
          </div>
        )}
        {flowState.external && flowState.gravity && (
          <hr className={styles["hr"]} />
        )}

        {flowState.gravity && (
          <div>
            <div className={styles["indicator-result-box-title"]}>
              gravity angle
            </div>
            <span>phi: </span>
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="phi: empty"
              readOnly
              value={gravityAngle.phi}
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <span>theta: </span>
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="theta: empty"
              readOnly
              value={gravityAngle.theta}
            />
          </div>
        )}

        {toolState.showIndicator && (
          <div
            className={styles["indicator-save-angle-btn"]}
            onClick={decideHandler}
          >
            decide
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default AngleSettingsResult;
