import { Fragment } from "react";

const ToolMenu = () => {
  return (
    <Fragment>
      <div id="tool-menu">
        <button>
          <label htmlFor="stlfile">
            <span className="material-symbols-outlined">folder_supervised</span>
          </label>
          <input type="file" id="stlfile" />
        </button>

        <button id="show-Lines" type="button">
          <span className="material-symbols-outlined"> change_history </span>
        </button>

        <div className="flex">
          <button id="search-segment" type="button" title="[W] Select Surface">
            <span className="material-symbols-outlined"> deployed_code </span>
          </button>
          {/* <input
            type="range"
            min="0"
            max="360"
            step="1"
            className="adj-angle-range"
            placeholder="Angle (default : 90 deg)"
          /> */}

          {/* <div className="adj-angle-number">
            <input />
            <span>°</span>
          </div> */}
        </div>

        <button id="rotate-object" type="button" title="[E] Rotate Object">
          <span className="material-symbols-outlined">
            {" "}
            rotate_90_degrees_cw{" "}
          </span>
        </button>

        <button id="reset-position" type="button" title="[R] Reset Position">
          <span className="material-symbols-outlined"> sync </span>
        </button>

        <button id="z-clipping" type="button" title="[T] Clipping Object">
          <span className="material-icons"> content_cut </span>
        </button>

        <button id="bounding-box" type="button" title="[B] Show Bounding Box">
          <span className="material-icons"> view_in_ar </span>
        </button>

        <button
          id="indicator-activated"
          type="button"
          title="[I] Indicator Activate"
        >
          <span className="material-icons"> near_me </span>
        </button>

        <button id="settings" title="[S] Open Flow Settings">
          <span className="material-icons"> settings </span>
        </button>

        <button title="Divide Surface and Export STL">
          <span className="material-symbols-outlined"> file_open </span>
        </button>

        <button>
          <span className="material-symbols-outlined"> invert_colors </span>
        </button>
      </div>
    </Fragment>
  );
};
export default ToolMenu;
