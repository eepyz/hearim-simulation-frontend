import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import styles from "../../../assets/css/Notice.module.css";

const Notice = () => {
  return (
    <Fragment>
      <main className="container">
        <section className="sub-header">
          <div className="sub-header-content">
            <p>Notice</p>
            <div>See What's going on in HEARIM.</div>
          </div>
        </section>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default Notice;
