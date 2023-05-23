import { Fragment } from "react";

const FlowMenu = () => {
  return (
    <Fragment>
      <div className="flow-settings-container">
        <div className="flow-settings-box">
          <div>
            <div className="flow-settings-title">
              <span className="material-symbols-outlined icon"> water </span>
              Flow Settings
            </div>
          </div>
          <table className="flow-settings-table">
            <thead>
              <td>
                <input
                  name="inout"
                  type="radio"
                  className="flow-type"
                  id="internal"
                />
                <label htmlFor="internal" className="modal-checkbox">
                  Internal Flow
                </label>
              </td>
              <td>
                <input
                  name="inout"
                  type="radio"
                  className="flow-type"
                  id="external"
                />
                <label htmlFor="external" className="modal-checkbox">
                  External Flow
                </label>
              </td>
            </thead>
            <thead>
              <td>
                <input
                  name="continuity"
                  type="radio"
                  className="flow-type"
                  id="transient"
                />
                <label htmlFor="transient" className="modal-checkbox">
                  Transient Flow
                </label>
              </td>
              <td>
                <input
                  name="continuity"
                  type="radio"
                  className="flow-type"
                  id="steady"
                />

                <label htmlFor="steady" className="modal-checkbox">
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
                  className="flow-detail-input"
                />
              </td>
            </thead>
            <thead>
              <td>
                <input
                  name="gravity"
                  type="radio"
                  className="flow-type"
                  id="gravity"
                />
                <label htmlFor="gravity" className="modal-checkbox">
                  Gravity
                </label>
              </td>

              <td>
                <input
                  name="gravity"
                  type="radio"
                  className="flow-type"
                  id="no-gravity"
                />
                <label htmlFor="no-gravity" className="modal-checkbox">
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
                  className="flow-detail-input"
                />
              </td>
            </thead>
          </table>
          <div>
            <button type="button" className="flow-settings-done-btn">
              DONE
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default FlowMenu;
