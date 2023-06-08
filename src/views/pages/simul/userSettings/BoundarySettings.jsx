import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Html } from "@react-three/drei";
import { boundariesActions } from "../../../../store/config/boundaries";
import styles from "../../../../assets/css/Simulation.module.css";

const BoundarySettings = () => {
  const dispatch = useDispatch();
  const boundary = useSelector((state) => state.boundaries.currentBoundary);

  const wallSelected = boundary.wall.selected;
  const inflowSelected = boundary.inflow.selected;
  const outflowSelected = boundary.outflow.selected;

  const storeBoundarySetValues = (e) => {
    let updatedBoundaryState = {};

    switch (e.target.id) {
      case "wallV-nv":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            wallV: {
              ...boundary.wall.wallV,
              normalV: {
                ...boundary.wall.wallV.normalV,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "wallV-tv":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            wallV: {
              ...boundary.wall.wallV,
              tangentialV: {
                ...boundary.wall.wallV.tangentialV,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "wallV-cv-x":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            wallV: {
              ...boundary.wall.wallV,
              cartesianV: {
                ...boundary.wall.wallV.cartesianV,
                Xvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "wallV-cv-y":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            wallV: {
              ...boundary.wall.wallV,
              cartesianV: {
                ...boundary.wall.wallV.cartesianV,
                Yvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "wallV-cv-z":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            wallV: {
              ...boundary.wall.wallV,
              cartesianV: {
                ...boundary.wall.wallV.cartesianV,
                Zvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "constantST-t":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            constantST: {
              ...boundary.wall.constantST,
              temperature: e.target.value,
            },
          },
        };
        break;
      case "ambientT-highT":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            ambientT: {
              ...boundary.wall.ambientT,
              highT: {
                ...boundary.wall.ambientT.highT,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "highT-radiative":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            ambientT: {
              ...boundary.wall.ambientT,
              highT: {
                ...boundary.wall.ambientT.highT,
                radiative: {
                  ...boundary.wall.ambientT.highT.radiative,
                  value: e.target.value,
                },
              },
            },
          },
        };
        break;
      case "ambientT-naturalV":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            ambientT: {
              ...boundary.wall.ambientT,
              naturalV: {
                ...boundary.wall.ambientT.naturalV,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "naturalV-convective":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            ambientT: {
              ...boundary.wall.ambientT,
              naturalV: {
                ...boundary.wall.ambientT.naturalV,
                convective: {
                  ...boundary.wall.ambientT.naturalV.convective,
                  value: e.target.value,
                },
              },
            },
          },
        };
        break;
      case "ambientT-highV":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            ambientT: {
              ...boundary.wall.ambientT,
              highV: {
                ...boundary.wall.ambientT.highV,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "highV-convective":
        updatedBoundaryState = {
          ...boundary,
          wall: {
            ...boundary.wall,
            ambientT: {
              ...boundary.wall.ambientT,
              highV: {
                ...boundary.wall.ambientT.highV,
                convective: {
                  ...boundary.wall.ambientT.highV.convective,
                  value: e.target.value,
                },
              },
            },
          },
        };
        break;
      case "fluidUser-density":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            user: {
              ...boundary.inflow.user,
              density: e.target.value,
            },
          },
        };
        break;
      case "fluidUser-viscosity":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            user: {
              ...boundary.inflow.user,
              viscosity: e.target.value,
            },
          },
        };
        break;
      case "fluidUser-cp":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            user: {
              ...boundary.inflow.user,
              cp: e.target.value,
            },
          },
        };
        break;
      case "fluidUser-thermal":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            user: {
              ...boundary.inflow.user,
              thermalC: e.target.value,
            },
          },
        };
        break;
      case "inflowP-inflowT":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            inflowP: {
              ...boundary.inflow.inflowP,
              inflowT: e.target.value,
            },
          },
        };
        break;
      case "inflowP-sp":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            inflowP: {
              ...boundary.inflow.inflowP,
              staticP: e.target.value,
            },
          },
        };
        break;
      case "inflowP-nv":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            inflowP: {
              ...boundary.inflow.inflowP,
              normalV: {
                ...boundary.inflow.inflowP.normalV,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "inflowP-cv-x":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            inflowP: {
              ...boundary.inflow.inflowP,
              cartesianV: {
                ...boundary.inflow.inflowP.cartesianV,
                Xvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "inflowP-cv-y":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            inflowP: {
              ...boundary.inflow.inflowP,
              cartesianV: {
                ...boundary.inflow.inflowP.cartesianV,
                Yvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "inflowP-cv-z":
        updatedBoundaryState = {
          ...boundary,
          inflow: {
            ...boundary.inflow,
            inflowP: {
              ...boundary.inflow.inflowP,
              cartesianV: {
                ...boundary.inflow.inflowP.cartesianV,
                Zvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "outflowP-sp":
        updatedBoundaryState = {
          ...boundary,
          outflow: {
            ...boundary.outflow,
            outflowP: {
              ...boundary.outflow.outflowP,
              staticP: e.target.value,
            },
          },
        };
        break;
      case "outflowP-nsv":
        updatedBoundaryState = {
          ...boundary,
          outflow: {
            ...boundary.outflow,
            outflowP: {
              ...boundary.outflow.outflowP,
              normalSV: {
                ...boundary.outflow.normalSV,
                value: e.target.value,
              },
            },
          },
        };
        break;
      case "outflowP-cv-x":
        updatedBoundaryState = {
          ...boundary,
          outflow: {
            ...boundary.outflow,
            outflowP: {
              ...boundary.outflow.outflowP,
              cartesianV: {
                ...boundary.outflow.cartesianV,
                Xvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "outflowP-cv-y":
        updatedBoundaryState = {
          ...boundary,
          outflow: {
            ...boundary.outflow,
            outflowP: {
              ...boundary.outflow.outflowP,
              cartesianV: {
                ...boundary.outflow.cartesianV,
                Yvalue: e.target.value,
              },
            },
          },
        };
        break;
      case "outflowP-cv-z":
        updatedBoundaryState = {
          ...boundary,
          outflow: {
            ...boundary.outflow,
            outflowP: {
              ...boundary.outflow.outflowP,
              cartesianV: {
                ...boundary.outflow.cartesianV,
                Zvalue: e.target.value,
              },
            },
          },
        };
        break;
    }
    dispatch(boundariesActions.updateBoundaryValue(updatedBoundaryState));
  };

  return (
    <Fragment>
      {wallSelected && (
        <div className={styles["boundary-settings-box"]}>
          <div className={styles["settings-title"]}>Wall Settings</div>

          <select id="velocity" className={styles["boundary-settings-select"]}>
            <option value="nearWallZeroV">
              Near Wall Zero Velocity(No-slip)
            </option>
            <option value="nearWallV">Near Wall Velocity(Slip)</option>
            <option value="wallV">Wall Velocity</option>
          </select>

          <div>
            <button className={styles["show-settings-detail-btn"]}>
              Velocity
            </button>
            <div className={styles["boundary-settings-detail"]}>
              <input id="wallV-nv-btn" type="radio" name="wallV" />
              <label htmlFor="wallV-nv-btn">Normal Velocity</label>
              <input
                id="wallV-nv"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.wall.wallV.normalV.value}
              />
              <span>[m/s]</span>
              <input id="wallV-tv-btn" type="radio" name="wallV" />
              <label htmlFor="wallV-tv-btn">Tangential Velocity</label>
              <input
                id="wallV-tv"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.wall.wallV.tangentialV.value}
              />
              <span>[m/s]</span>
              <input id="wallV-cv-btn" type="radio" name="wallV" />
              <label htmlFor="wallV-cv-btn">Cartesian Velocity</label>
              <input
                id="wallV-cv-x"
                type="text"
                placeholder="X"
                onChange={storeBoundarySetValues}
                value={boundary.wall.wallV.cartesianV.Xvalue}
              />
              <span v-show="boundary.wall.wallV.cartesianV.selected">
                [m/s]
              </span>
              <input
                id="wallV-cv-y"
                type="text"
                placeholder="Y"
                onChange={storeBoundarySetValues}
                value={boundary.wall.wallV.cartesianV.Yvalue}
              />
              <span>[m/s]</span>
              <input
                id="wallV-cv-z"
                type="text"
                placeholder="Z"
                onChange={storeBoundarySetValues}
                value={boundary.wall.wallV.cartesianV.Zvalue}
              />
              <span>[m/s]</span>
            </div>
          </div>

          <select
            id="temperature"
            className={styles["boundary-settings-select"]}
          >
            <option value="adiabatic">Adiabatic</option>
            <option value="constantST">Constant Surface Temperature</option>
            <option value="ambientT">Ambient Temperature</option>
          </select>

          <div>
            <button className={styles["show-settings-detail-btn"]}>
              Temperature
            </button>
            <div className={styles["boundary-settings-detail"]}>
              <input
                id="constantST-t"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.wall.constantST.temperature}
              />
              <span>[℃]</span>
            </div>
          </div>

          <div className={styles["boundary-settings-detail"]}>
            <button className={styles["show-settings-detail-btn"]}>
              Temperature
            </button>
            <input id="ambientT-highT-btn" type="radio" name="wallT" />
            <label htmlFor="ambientT-highT-btn">High Temperature </label>
            <input
              id="ambientT-highT"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.wall.ambientT.highT.value}
            />
            <span>[℃]</span>

            <div className={styles["checkbox-div"]}>
              <input type="checkbox" id="highT-radiative-btn" />
              <label htmlFor="highT-radiative-btn">
                Radiative Heat Transfer Coefficient
              </label>
              <br />
              <input
                id="highT-radiative"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.wall.ambientT.highT.radiative.value}
              />
              <span>[W/m^2-K]</span>
            </div>

            <input id="ambientT-naturalV-btn" type="radio" name="wallT" />
            <label htmlFor="ambientT-naturalV-btn">
              Temperature & Nature Velocity
            </label>
            <input
              id="ambientT-naturalV"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.wall.ambientT.naturalV.value}
            />
            <span>[℃]</span>

            <div className={styles["checkbox-div"]}>
              <input type="checkbox" id="naturalV-convective-btn" />
              <label htmlFor="naturalV-convective-btn">
                Convective Heat Transfer Coefficient
              </label>
              <br />
              <input
                id="naturalV-convective"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.wall.ambientT.naturalV.convective.value}
              />
              <span>[W/m^2-K]</span>
            </div>

            <input type="radio" id="ambientT-highV-btn" name="wallT" />
            <label htmlFor="ambientT-highV-btn">
              Temperature & High Velocity
            </label>
            <input
              id="ambientT-highV"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.wall.ambientT.highV.value}
            />
            <span>[℃]</span>

            <div className={styles["checkbox-div"]}>
              <input type="checkbox" id="highV-convective-btn" />
              <label htmlFor="highV-convective-btn">
                Convective Heat Transfer Coefficient
              </label>
              <br />
              <input
                id="highV-convective"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.wall.ambientT.highV.convective.value}
              />
              <span>[W/m^2-K]</span>
            </div>
          </div>
        </div>
      )}
      {inflowSelected && (
        <div className={styles["boundary-settings-box"]}>
          <div className={styles["settings-title"]}>Inflow Settings</div>
          <select id="subsFluid" className={styles["boundary-settings-select"]}>
            <option value="user">Substance Of Fluid : User</option>
            <option value="Air">Air</option>
            <option value="Nitrogen">Nitrogen</option>
            <option value="WaterVapor">WaterVapor</option>
            <option value="CarbonDioxide">CarbonDioxide</option>
            <option value="Argon">Argon</option>
            <option value="N2">N2</option>
            <option value="O2">O2</option>
            <option value="H2O">H2O(gas)</option>
            <option value="CO2">CO2</option>
            <option value="Ar">Ar</option>
          </select>

          <button className={styles["show-settings-detail-btn"]}>
            User Fluid Setting
          </button>
          <div className={styles["boundary-settings-detail"]}>
            <div className={styles["title"]}>Density</div>
            <input
              id="fluidUser-density"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.user.density}
            />
            <span>[kg/m^3]</span>

            <div className={styles["title"]}>Viscosity</div>
            <input
              id="fluidUser-viscosity"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.user.viscosity}
            />
            <span>[kg/m-s]</span>

            <div className={styles["title"]}>Cp</div>
            <input
              id="fluidUser-cp"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.user.cp}
            />
            <span>[j/kg-K]</span>

            <div className={styles["title"]}>Thermal Conductivity</div>
            <input
              id="fluidUser-thermal"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.user.thermalC}
            />
            <span>[w/m-K]</span>
          </div>

          <div
            id="inflowP"
            value="inflowP"
            className={styles["boundary-settings-select-one"]}
          >
            Property
          </div>
          <button className={styles["show-settings-detail-btn"]}>
            Temperature
          </button>
          <div className={styles["boundary-settings-detail"]}>
            <div className={styles["title"]}>Inflow Temperature</div>
            <input
              id="inflowP-inflowT"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.inflowP.inflowT}
            />
            <span>[℃]</span>
          </div>

          <button className={styles["show-settings-detail-btn"]}>
            Pressure
          </button>
          <div className={styles["boundary-settings-detail"]}>
            <div className={styles["title"]}>Static Pressure(Gage)</div>
            <input
              id="inflowP-sp"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.inflowP.staticP}
            />
            <span>[Pa]</span>
          </div>

          <button className={styles["show-settings-detail-btn"]}>
            Velocity
          </button>
          <div className={styles["boundary-settings-detail"]}>
            <input type="radio" id="inflowP-nv-btn" name="inflowV" />
            <label htmlFor="inflowP-nv-btn">
              Normal Velocity
              <br />
            </label>
            <input
              id="inflowP-nv"
              type="text"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.inflowP.normalV.value}
            />
            <span>[m/s]</span>

            <input
              id="inflowP-cv-btn"
              type="radio"
              className={styles["title"]}
              name="inflowV"
            />
            <label htmlFor="inflowP-cv-btn">
              Cartesian Velocity
              <br />
            </label>

            <input
              id="inflowP-cv-x"
              type="text"
              placeholder="X"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.inflowP.cartesianV.Xvalue}
            />

            <span>[m/s]</span>

            <input
              id="inflowP-cv-y"
              type="text"
              placeholder="Y"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.inflowP.cartesianV.Yvalue}
            />
            <span>[m/s]</span>

            <input
              id="inflowP-cv-z"
              type="text"
              placeholder="Z"
              onChange={storeBoundarySetValues}
              value={boundary.inflow.inflowP.cartesianV.Zvalue}
            />
            <span>[m/s]</span>
          </div>
        </div>
      )}
      {outflowSelected && (
        <div className={styles["boundary-settings-box"]}>
          <div className={styles["settings-title"]}>Outflow Settings</div>
          <div className={styles["border"]}>
            <div className={styles["boundary-settings-select-one"]}>
              {" "}
              Property
            </div>
            <button className={styles["show-settings-detail-btn"]}>
              Pressure
            </button>
            <div className={styles["boundary-settings-detail"]}>
              <div className={styles["title"]}>Static Pressure (Gage)</div>
              <input
                id="outflowP-sp"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.outflow.outflowP.staticP}
              />
              <span>[Pa]</span>

              <button className={styles["show-settings-detail-btn"]}>
                Velocity
              </button>

              <input id="outflowP-nsv-btn" type="radio" name="outflowV" />
              <label htmlFor="outflowP-nsv-btn">
                Normal Suction Velocity
                <br />
              </label>
              <input
                id="outflowP-nsv"
                type="text"
                onChange={storeBoundarySetValues}
                value={boundary.outflow.outflowP.normalSV.value}
              />
              <span>[m/s]</span>

              <input id="outflowP-cv-btn" type="radio" name="outflowV" />
              <label htmlFor="outflowP-cv-btn">
                Cartessian Velocity
                <br />
              </label>
              <input
                id="outflowP-cv-x"
                type="text"
                placeholder="X"
                onChange={storeBoundarySetValues}
                value={boundary.outflow.outflowP.cartesianV.Xvalue}
              />
              <span>[m/s]</span>

              <input
                id="outflowP-cv-y"
                type="text"
                placeholder="Y"
                onChange={storeBoundarySetValues}
                value={boundary.outflow.outflowP.cartesianV.Yvalue}
              />
              <span>[m/s]</span>

              <input
                id="outflowP-cv-z"
                type="text"
                placeholder="Z"
                onChange={storeBoundarySetValues}
                value={boundary.outflow.outflowP.cartesianV.Zvalue}
              />
              <span>[m/s]</span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default BoundarySettings;
