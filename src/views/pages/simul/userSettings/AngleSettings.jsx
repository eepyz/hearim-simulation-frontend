import { Fragment, useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toolStateActions } from "../../../../store/state/toolState";
import { anglesActions } from "../../../../store/config/angle";

import styles from "../../../../assets/css/Simulation.module.css";

const FlowAngleSettings = () => {
  const dispatch = useDispatch();
  const toolState = useSelector((state) => state.toolState);

  const flowSelected = useSelector((state) => state.angles.flowSelected);
  const gravitySelected = useSelector((state) => state.angles.gravitySelected);
  const flowAngle = useSelector((state) => state.angles.flow);
  const gravityAngle = useSelector((state) => state.angles.gravity);

  const [userInputAngles, setUserInputAngles] = useState({
    phi: "",
    theta: "",
  });

  const decideHandler = () => {
    dispatch(toolStateActions.showIndicator());
  };

  const flowSelectedHandler = () => {
    dispatch(anglesActions.setFlowSelected());
  };

  const gravitySelectedHandler = () => {
    dispatch(anglesActions.setGravitySelected());
  };

  const phiAngleInputHandler = (e) => {
    setUserInputAngles((prev) => {
      return { ...prev, phi: e.target.value };
    });
  };

  const thetaAngleInputHandler = (e) => {
    setUserInputAngles((prev) => {
      return { ...prev, theta: e.target.value };
    });
  };

  const moveAngles = () => {
    if (userInputAngles.phi === "" || userInputAngles.theta === "") {
      alert("please enter values");
    } else {
      if (flowSelected) {
        dispatch(anglesActions.updateFlowAngles(userInputAngles));
      }
      if (gravitySelected) {
        dispatch(anglesActions.updateGravityAngles(userInputAngles));
      }
      dispatch(anglesActions.setMoveBtnClicked());
    }
  };

  return (
    <Fragment>
      <div>
        <div className={styles["indicator-angle-input-box"]}>
          {/* <div className={styles["indicator-angle-input-box-title"]}>
            (Angle Indicator)
          </div> */}
          <span className={styles["indicator-angle-input-title"]}>phi</span>
          <input
            id="phi"
            type="text"
            className={styles["indicator-angle-input"]}
            placeholder="phi(degree)"
            autoComplete="off"
            onChange={phiAngleInputHandler}
          />
          <span className={styles["indicator-angle-input-title"]}>theta</span>
          <input
            id="theta"
            type="text"
            className={styles["indicator-angle-input"]}
            placeholder="theta(degree)"
            autoComplete="off"
            onChange={thetaAngleInputHandler}
          />

          <button
            className={styles["indicator-angle-move-btn"]}
            onClick={moveAngles}
          >
            move
          </button>
          <button
            className={
              flowSelected
                ? styles["which-angle-btn-selected"]
                : styles["which-angle-btn"]
            }
            onClick={flowSelectedHandler}
          >
            flow
          </button>
          <button
            className={
              gravitySelected
                ? styles["which-angle-btn-selected"]
                : styles["which-angle-btn"]
            }
            onClick={gravitySelectedHandler}
          >
            gravity
          </button>
        </div>

        {/* <div className={styles["indicator-calculating-box"]}>
          <p>{flowSelected ? "flow angle" : "gravity angle"}</p>
          <p>phi : {flowSelected ? flowAngle.phi : gravityAngle.phi}</p>
          <p>theta : {flowSelected ? flowAngle.theta : gravityAngle.theta}</p>
          <button
            className={styles["indicator-save-angle-btn"]}
            onClick={decideHandler}
          >
            decide&nbsp;<i className={styles["bi bi-check2-circle"]}></i>
          </button>
        </div> */}
      </div>
    </Fragment>
  );
};

export default FlowAngleSettings;
