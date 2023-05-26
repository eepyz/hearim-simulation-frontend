import { Html } from "@react-three/drei";
import { Fragment, useState } from "react";

const BoundarySettings = (props) => {
  //이거 Model에서 설정하고 boundaryMenu, BoundarySettings로 넘겨줘야함
  const [wallSelected, setWallSelected] = useState(true);
  const [inflowSelected, setInflowSelected] = useState(true);
  const [outflowSelected, setOutflowSelected] = useState(true);

  return (
    <Fragment>
      {!wallSelected && (
        <div className="boundary-settings-box">
          <div className="settings-title">Wall Settings</div>

          <select id="velocity" className="boundary-settings-select">
            <option value="nearWallZeroV">
              Near Wall Zero Velocity(No-slip)
            </option>
            <option value="nearWallV">Near Wall Velocity(Slip)</option>
            <option value="wallV">Wall Velocity</option>
          </select>

          <div>
            <button className="show-settings-detail-btn">Velocity</button>
            <div className="boundary-settings-detail">
              <input id="wallV-nv-btn" type="radio" name="wallV" />
              <label htmlFor="wallV-nv-btn">Normal Velocity</label>
              <input id="wallV-nv" type="text" />
              <span>[m/s]</span>

              <input id="wallV-tv-btn" type="radio" name="wallV" />
              <label htmlFor="wallV-tv-btn">Tangential Velocity</label>
              <input id="wallV-tv" type="text" />
              <span>[m/s]</span>

              <input id="wallV-cv-btn" type="radio" name="wallV" />
              <label htmlFor="wallV-cv-btn">Cartesian Velocity</label>
              <input id="wallV-cv-x" type="text" placeholder="X" />
              <span v-show="boundary.wall.wallV.cartesianV.selected">
                [m/s]
              </span>
              <input id="wallV-cv-y" type="text" placeholder="Y" />
              <span>[m/s]</span>

              <input id="wallV-cv-z" type="text" placeholder="Z" />
              <span>[m/s]</span>
            </div>
          </div>

          <select id="temperature" className="boundary-settings-select">
            <option value="adiabatic">Adiabatic</option>
            <option value="constantST">Constant Surface Temperature</option>
            <option value="ambientT">Ambient Temperature</option>
          </select>

          <div>
            <button className="show-settings-detail-btn">Temperature</button>
            <div className="boundary-settings-detail">
              <input id="constantST-t" type="text" />
              <span>[℃]</span>
            </div>
          </div>

          <div className="boundary-settings-detail">
            <button className="show-settings-detail-btn">Temperature</button>
            <input id="ambientT-highT-btn" type="radio" name="wallT" />
            <label htmlFor="ambientT-highT-btn">High Temperature </label>
            <input id="ambientT-highT" type="text" />
            <span>[℃]</span>

            <div className="checkbox-div">
              <input type="checkbox" id="highT-radiative-btn" />
              <label htmlFor="highT-radiative-btn">
                Radiative Heat Transfer Coefficient
              </label>
              <br />
              <input id="highT-radiative" type="text" />
              <span>[W/m^2-K]</span>
            </div>

            <input id="ambientT-naturalV-btn" type="radio" name="wallT" />
            <label htmlFor="ambientT-naturalV-btn">
              Temperature & Nature Velocity
            </label>
            <input id="ambientT-naturalV" type="text" />
            <span>[℃]</span>

            <div className="checkbox-div">
              <input type="checkbox" id="naturalV-convective-btn" />
              <label htmlFor="naturalV-convective-btn">
                Convective Heat Transfer Coefficient
              </label>
              <br />
              <input id="naturalV-convective" type="text" />
              <span>[W/m^2-K]</span>
            </div>

            <input type="radio" id="ambientT-highV-btn" name="wallT" />
            <label htmlFor="ambientT-highV-btn">
              Temperature & High Velocity
            </label>
            <input id="ambientT-highV" type="text" />
            <span>[℃]</span>

            <div className="checkbox-div">
              <input type="checkbox" id="highV-convective-btn" />
              <label htmlFor="highV-convective-btn">
                Convective Heat Transfer Coefficient
              </label>
              <br />
              <input id="highV-convective" type="text" />
              <span>[W/m^2-K]</span>
            </div>
          </div>
        </div>
      )}
      {!inflowSelected && (
        <div className="boundary-settings-box">
          <div className="settings-title">Inflow Settings</div>
          <select id="subsFluid" className="boundary-settings-select">
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

          <button className="show-settings-detail-btn">
            User Fluid Setting
          </button>
          <div className="boundary-settings-detail">
            <div className="title">Density</div>
            <input id="fluidUser-density" type="text" />
            <span>[kg/m^3]</span>

            <div className="title">Viscosity</div>
            <input id="fluidUser-viscosity" type="text" />
            <span>[kg/m-s]</span>

            <div className="title">Cp</div>
            <input id="fluidUser-cp" type="text" />
            <span>[j/kg-K]</span>

            <div className="title">Thermal Conductivity</div>
            <input id="fluidUser-thermal" type="text" />
            <span>[w/m-K]</span>
          </div>

          <div
            id="inflowP"
            value="inflowP"
            className="boundary-settings-select-one"
          >
            Property
          </div>
          <button className="show-settings-detail-btn">Temperature</button>
          <div className="boundary-settings-detail">
            <div className="title">Inflow Temperature</div>
            <input id="inflowP-inflowT" type="text" />
            <span>[℃]</span>
          </div>

          <button className="show-settings-detail-btn">Pressure</button>
          <div className="boundary-settings-detail">
            <div className="title">Static Pressure(Gage)</div>
            <input id="inflowP-sp" type="text" />
            <span>[Pa]</span>
          </div>

          <button className="show-settings-detail-btn">Velocity</button>
          <div className="boundary-settings-detail">
            <input type="radio" id="inflowP-nv-btn" name="inflowV" />
            <label for="inflowP-nv-btn">
              Normal Velocity
              <br />
            </label>
            <input id="inflowP-nv" type="text" />
            <span>[m/s]</span>

            <input
              id="inflowP-cv-btn"
              type="radio"
              className="title"
              name="inflowV"
            />
            <label for="inflowP-cv-btn">
              Cartesian Velocity
              <br />
            </label>

            <input id="inflowP-cv-x" type="text" placeholder="X" />
            <span>[m/s]</span>

            <input id="inflowP-cv-y" type="text" placeholder="Y" />
            <span>[m/s]</span>

            <input id="inflowP-cv-z" type="text" placeholder="Z" />
            <span>[m/s]</span>
          </div>
        </div>
      )}
      {!outflowSelected && (
        <div className="boundary-settings-box">
          <div className="settings-title">Outflow Settings</div>
          <div className="border">
            <div className="boundary-settings-select-one"> Property</div>
            <button className="show-settings-detail-btn">Pressure</button>
            <div className="boundary-settings-detail">
              <div className="title">Static Pressure (Gage)</div>
              <input id="outflowP-sp" type="text" />
              <span>[Pa]</span>

              <button className="show-settings-detail-btn">Velocity</button>

              <input id="outflowP-nsv-btn" type="radio" name="outflowV" />
              <label for="outflowP-nsv-btn">
                Normal Suction Velocity
                <br />
              </label>
              <input id="outflowP-nsv" type="text" />
              <span>[m/s]</span>

              <input id="outflowP-cv-btn" type="radio" name="outflowV" />
              <label for="outflowP-cv-btn">
                Cartessian Velocity
                <br />
              </label>
              <input id="outflowP-cv-x" type="text" placeholder="X" />
              <span>[m/s]</span>

              <input id="outflowP-cv-y" type="text" placeholder="Y" />
              <span>[m/s]</span>

              <input id="outflowP-cv-z" type="text" placeholder="Z" />
              <span>[m/s]</span>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default BoundarySettings;
