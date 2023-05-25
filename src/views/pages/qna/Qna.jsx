import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import styles from "../../../assets/css/Qna.module.css";

const Qna = () => {
  return (
    <Fragment>
      <main className="container">
        <section className="sub-header">
          <div className="sub-header-content">
            <p>Q&A</p>
            <div>Do you have any opinion? Share with people.</div>
          </div>
        </section>
        <Outlet />
      </main>
    </Fragment>
  );
};
export default Qna;
