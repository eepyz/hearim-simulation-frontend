import { Fragment } from "react";

import styles from "../../../../assets/css/Simulation.module.css";

const FlowMenu = () => {
  return (
    <Fragment>
      <div className={styles["flow-settings-container"]}>
        <div className={styles["flow-settings-box"]}>
          <div>
            <div className={styles["flow-settings-title"]}>
              <span className={styles["material-symbols-outlined icon"]}>
                {" "}
                water{" "}
              </span>
              Flow Settings
            </div>
          </div>
          <table className={styles["flow-settings-table"]}>
            <thead>
              <td>
                <input
                  name="inout"
                  type="radio"
                  className={styles["flow-type"]}
                  id="internal"
                />
                <label htmlFor="internal" className={styles["modal-checkbox"]}>
                  Internal Flow
                </label>
              </td>
              <td>
                <input
                  name="inout"
                  type="radio"
                  className={styles["flow-type"]}
                  id="external"
                />
                <label htmlFor="external" className={styles["modal-checkbox"]}>
                  External Flow
                </label>
              </td>
            </thead>
            <thead>
              <td>
                <input
                  name="continuity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="transient"
                />
                <label htmlFor="transient" className={styles["modal-checkbox"]}>
                  Transient Flow
                </label>
              </td>
              <td>
                <input
                  name="continuity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="steady"
                />

                <label htmlFor="steady" className={styles["modal-checkbox"]}>
                  Steady Flow
                </label>
              </td>
            </thead>
            <thead>
              <td v-show="flowSettings.continuity.physicalFlowTime.show">
                <input
                  type="number"
                  name="physicalFlow"
                  placeholder="physical flow time(s)"
                  className={styles["flow-detail-input"]}
                />
              </td>
            </thead>
            <thead>
              <td>
                <input
                  name="gravity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="gravity"
                />
                <label htmlFor="gravity" className={styles["modal-checkbox"]}>
                  Gravity
                </label>
              </td>

              <td>
                <input
                  name="gravity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="no-gravity"
                />
                <label
                  htmlFor="no-gravity"
                  className={styles["modal-checkbox"]}
                >
                  No Gravity
                </label>
              </td>
            </thead>
            <thead>
              <td>
                <input
                  type="number"
                  name="gravityForce"
                  placeholder="gravity force(m/s^2)"
                  className={styles["flow-detail-input"]}
                />
              </td>
            </thead>
          </table>
          <div>
            <button type="button" className={styles["flow-settings-done-btn"]}>
              DONE
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FlowMenu;
