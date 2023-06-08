import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { boundariesActions } from "../../../../store/config/boundaries";

import styles from "../../../../assets/css/Simulation.module.css";

const BoundaryMenu = () => {
  const dispatch = useDispatch();
  const boundary = useSelector((state) => state.boundaries.currentBoundary);

  const updateBoundaryType = (e) => {
    let updatedBoundaryState = {};

    switch (e.target.id) {
      case "wall":
        updatedBoundaryState = {
          wall: { ...boundary.wall, selected: true },
          inflow: { ...boundary.inflow, selected: false },
          outflow: { ...boundary.outflow, selected: false },
          farField: { ...boundary.farField, selected: false },
          symmetry: { ...boundary.symmetry, selected: false },
        };
        break;
      case "inflow":
        updatedBoundaryState = {
          wall: { ...boundary.wall, selected: false },
          inflow: { ...boundary.inflow, selected: true },
          outflow: { ...boundary.outflow, selected: false },
          farField: { ...boundary.farField, selected: false },
          symmetry: { ...boundary.symmetry, selected: false },
        };
        break;
      case "outflow":
        updatedBoundaryState = {
          wall: { ...boundary.wall, selected: false },
          inflow: { ...boundary.inflow, selected: false },
          outflow: { ...boundary.outflow, selected: true },
          farField: { ...boundary.farField, selected: false },
          symmetry: { ...boundary.symmetry, selected: false },
        };
        break;
      case "far-field":
        updatedBoundaryState = {
          wall: { ...boundary.wall, selected: false },
          inflow: { ...boundary.inflow, selected: false },
          outflow: { ...boundary.outflow, selected: false },
          farField: { ...boundary.farField, selected: true },
          symmetry: { ...boundary.symmetry, selected: false },
        };
        break;
      case "symmetry":
        updatedBoundaryState = {
          wall: { ...boundary.wall, selected: false },
          inflow: { ...boundary.inflow, selected: false },
          outflow: { ...boundary.outflow, selected: false },
          farField: { ...boundary.farField, selected: false },
          symmetry: { ...boundary.symmetry, selected: true },
        };
        break;
    }
    dispatch(boundariesActions.updateBoundaryType(updatedBoundaryState));
  };

  return (
    <Fragment>
      <div className={styles["boundary-menu"]}>
        <div className={styles["boundary-menu-title"]}>Boundary Type</div>
        <div
          id="wall"
          href="#"
          className={
            boundary.wall.selected
              ? styles["boundary-menu-elem-selected"]
              : styles["boundary-menu-elem"]
          }
          onClick={updateBoundaryType}
        >
          Wall
        </div>
        <div
          id="inflow"
          href="#"
          className={
            boundary.inflow.selected
              ? styles["boundary-menu-elem-selected"]
              : styles["boundary-menu-elem"]
          }
          onClick={updateBoundaryType}
        >
          Inflow
        </div>
        <div
          id="outflow"
          href="#"
          className={
            boundary.outflow.selected
              ? styles["boundary-menu-elem-selected"]
              : styles["boundary-menu-elem"]
          }
          onClick={updateBoundaryType}
        >
          Outflow
        </div>
        <div
          id="far-field"
          href="#"
          className={
            boundary.farField.selected
              ? styles["boundary-menu-elem-selected"]
              : styles["boundary-menu-elem"]
          }
          onClick={updateBoundaryType}
        >
          Far-Field
        </div>
        <div
          id="symmetry"
          href="#"
          className={
            boundary.symmetry.selected
              ? styles["boundary-menu-elem-selected"]
              : styles["boundary-menu-elem"]
          }
          onClick={updateBoundaryType}
        >
          Symmetry
        </div>
      </div>
    </Fragment>
  );
};
export default BoundaryMenu;
