import { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import styles from "../../../../assets/css/Simulation.module.css";

const AngleSettingsResult = () => {
  const flowAngle = useSelector((state) => state.angles.flow);
  const gravityAngle = useSelector((state) => state.angles.gravity);

  return (
    <Fragment>
      <div className={styles["indicator-result-box"]}>
        <div>
          <p>flow angle</p>
          <input
            type="text"
            className={styles["indicator-result"]}
            placeholder="phi: empty"
            readOnly
            value={flowAngle.phi}
          />
          &nbsp;
          <input
            type="text"
            className={styles["indicator-result"]}
            placeholder="theta: empty"
            readOnly
            value={flowAngle.theta}
          />
        </div>
        <div>
          <p>gravity angle</p>
          <input
            type="text"
            className={styles["indicator-result"]}
            placeholder="phi: empty"
            readOnly
            value={gravityAngle.phi}
          />
          &nbsp;
          <input
            type="text"
            className={styles["indicator-result"]}
            placeholder="theta: empty"
            readOnly
            value={gravityAngle.theta}
          />
        </div>
      </div>
    </Fragment>
  );
};
export default AngleSettingsResult;
