import { Fragment } from "react";
import styled from "../../../assets/css/Notice.module.css";

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
        <router-view></router-view>
      </main>
    </Fragment>
  );
};
export default Notice;
