import { Fragment } from "react";
import styles from "../../../../assets/css/Simulation.module.css";

const FlowAngleSettings = () => {
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
          />
          <span className={styles["indicator-angle-input-title"]}>theta</span>
          <input
            id="theta"
            type="text"
            className={styles["indicator-angle-input"]}
            placeholder="theta(degree)"
            autoComplete="off"
          />
          <button className={styles["which-angle-btn"]}>flow</button>
          <button className={styles["which-angle-btn"]}>gravity</button>
          <button className={styles["indicator-angle-move-btn"]}>move</button>
        </div>

        <div className={styles["indicator-calculating-box"]}>
          <p>
            <b>flow angle</b>
          </p>

          <p>
            <b>gravity angle</b>
          </p>

          <input
            id="phi"
            type="text"
            className={styles["indicator-calculating-angle"]}
            readOnly
          />
          <br />

          <input
            id="theta"
            type="text"
            className={styles["indicator-calculating-angle"]}
            readOnly
          />
          <br />
          <span>
            <button className={styles["indicator-save-angle-btn"]}>
              decide&nbsp;<i className={styles["bi bi-check2-circle"]}></i>
            </button>
          </span>
        </div>

        <div className={styles["indicator-result-box"]}>
          <div>
            <p>flow angle</p>
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="phi: empty"
              readOnly
            />
            &nbsp;
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="theta: empty"
              readOnly
            />
          </div>
          <div>
            <p>gravity angle</p>
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="phi: empty"
              readOnly
            />
            &nbsp;
            <input
              type="text"
              className={styles["indicator-result"]}
              placeholder="theta: empty"
              readOnly
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FlowAngleSettings;
