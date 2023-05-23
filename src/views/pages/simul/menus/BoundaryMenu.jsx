import { Fragment } from "react";

const BoundaryMenu = () => {
  return (
    <Fragment>
      <div className="boundary-menu">
        <div className="boundary-menu-title">Boundary Type</div>
        <div id="wall" href="#" className="boundary-menu-elem">
          Wall
        </div>
        <div id="inflow" href="#" className="boundary-menu-elem">
          Inflow
        </div>
        <div id="outflow" href="#" className="boundary-menu-elem">
          Outflow
        </div>
        <div id="far-field" href="#" className="boundary-menu-elem">
          Far-Field
        </div>
        <div id="symmetry" href="#" className="boundary-menu-elem">
          Symmetry
        </div>
      </div>
    </Fragment>
  );
};
export default BoundaryMenu;
