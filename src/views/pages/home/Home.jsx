import { Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/Home.module.css";

const Home = () => {
  return (
    <Fragment>
      <main className={styles.container}>
        <section className={styles["home-content-box"]}>
          <div>
            <div className={styles["content-big-font"]}>Into the Flow.</div>
            <div className={styles["content-small-font"]}>
              HEARIM is fluid dynamics analysis and simulation website. Expert
              engineers, cutting-edge software, reliable results. Optimize
              design, improve performance.
            </div>
          </div>
          <button className={styles["go-to-simul-btn"]}>
            <Link to="/simulation">Start Simulation</Link>
          </button>
        </section>
        <section className={styles.threeJs}>
          <div className={styles["change-stlfile-div"]}>
            <label htmlFor="stlfile">
              <span className="material-symbols-outlined"> folder_open </span>
            </label>
            <input type="file" id="stlfile" />
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default Home;
