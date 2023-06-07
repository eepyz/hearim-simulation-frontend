import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { boundaryActions } from "../../../../store/config/boundary";
import styles from "../../../../assets/css/Simulation.module.css";

const BoundaryMenu = () => {
  const dispatch = useDispatch();
  const boundary = useSelector((state) => state.boundary);
  const [updatedBoundary, setBoundary] = useState(boundary);

  const updateBoundaryType = (e) => {
    let updatedBoundaryState = {};

    switch (e.target.id) {
      case "wall":
        updatedBoundaryState = {
          wall: { ...updatedBoundary.wall, selected: true },
          inflow: { ...updatedBoundary.inflow, selected: false },
          outflow: { ...updatedBoundary.outflow, selected: false },
          farField: { ...updatedBoundary.farField, selected: false },
          symmetry: { ...updatedBoundary.symmetry, selected: false },
        };
        break;
      case "inflow":
        updatedBoundaryState = {
          wall: { ...updatedBoundary.wall, selected: false },
          inflow: { ...updatedBoundary.inflow, selected: true },
          outflow: { ...updatedBoundary.outflow, selected: false },
          farField: { ...updatedBoundary.farField, selected: false },
          symmetry: { ...updatedBoundary.symmetry, selected: false },
        };
        break;
      case "outflow":
        updatedBoundaryState = {
          wall: { ...updatedBoundary.wall, selected: false },
          inflow: { ...updatedBoundary.inflow, selected: false },
          outflow: { ...updatedBoundary.outflow, selected: true },
          farField: { ...updatedBoundary.farField, selected: false },
          symmetry: { ...updatedBoundary.symmetry, selected: false },
        };
        break;
      case "far-field":
        updatedBoundaryState = {
          wall: { ...updatedBoundary.wall, selected: false },
          inflow: { ...updatedBoundary.inflow, selected: false },
          outflow: { ...updatedBoundary.outflow, selected: false },
          farField: { ...updatedBoundary.farField, selected: true },
          symmetry: { ...updatedBoundary.symmetry, selected: false },
        };
        break;
      case "symmetry":
        updatedBoundaryState = {
          wall: { ...updatedBoundary.wall, selected: false },
          inflow: { ...updatedBoundary.inflow, selected: false },
          outflow: { ...updatedBoundary.outflow, selected: false },
          farField: { ...updatedBoundary.farField, selected: false },
          symmetry: { ...updatedBoundary.symmetry, selected: true },
        };
        break;
      default:
        updatedBoundaryState = updatedBoundary;
    }

    setBoundary(updatedBoundaryState);
    dispatch(boundaryActions.updateBoundary(updatedBoundaryState));
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
