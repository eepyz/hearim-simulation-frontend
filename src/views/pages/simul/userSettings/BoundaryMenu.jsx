import { Fragment } from "react";

import styles from "../../../../assets/css/Simulation.module.css";

const BoundaryMenu = () => {
  return (
    <Fragment>
      <div className={styles["boundary-menu"]}>
        <div className={styles["boundary-menu-title"]}>Boundary Type</div>
        <div id="wall" href="#" className={styles["boundary-menu-elem"]}>
          Wall
        </div>
        <div id="inflow" href="#" className={styles["boundary-menu-elem"]}>
          Inflow
        </div>
        <div id="outflow" href="#" className={styles["boundary-menu-elem"]}>
          Outflow
        </div>
        <div id="far-field" href="#" className={styles["boundary-menu-elem"]}>
          Far-Field
        </div>
        <div id="symmetry" href="#" className={styles["boundary-menu-elem"]}>
          Symmetry
        </div>
      </div>
    </Fragment>
  );
};
export default BoundaryMenu;
