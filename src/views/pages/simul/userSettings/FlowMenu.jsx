import { Fragment } from "react";

import styles from "../../../../assets/css/Simulation.module.css";

const FlowMenu = () => {
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
                />

                <label htmlFor="steady" className={styles["modal-checkbox"]}>
                  Steady Flow
                </label>
              </div>
            </div>
            <div className="flex">
              <div
              // v-show="flowSettings.continuity.physicalFlowTime.show"
              >
                <input
                  type="number"
                  name="physicalFlow"
                  placeholder="physical flow time(s)"
                  className={styles["flow-detail-input"]}
                />
              </div>
            </div>
            <div className="flex">
              <div className={styles["flow-settings-checkbox"]}>
                <input
                  name="gravity"
                  type="radio"
                  className={styles["flow-type"]}
                  id="gravity"
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
                />
                <label
                  htmlFor="no-gravity"
                  className={styles["modal-checkbox"]}
                >
                  No Gravity
                </label>
              </div>
            </div>
            <div className="flex">
              <div>
                <input
                  type="number"
                  name="gravityForce"
                  placeholder="gravity force(m/s^2)"
                  className={styles["flow-detail-input"]}
                />
              </div>
            </div>
          </div>
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
