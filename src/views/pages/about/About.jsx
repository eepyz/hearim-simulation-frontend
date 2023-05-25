import { Fragment } from "react";

import styles from "../../../assets/css/About.module.css";

import aboutLogoImg from "../../../assets/img/logo.png";
import aboutQuoteImg from "../../../assets/img/about/quote.png";
import aboutVideo from "../../../assets/video/HEARIM.mp4";

const About = () => {
  return (
    <Fragment>
      <main>
        <section className={styles["container"]}>
          <div className="sub-header">
            <div className="sub-header-content">
              <p>About</p>
              <div>What is HEARIM?</div>
            </div>
          </div>
          <div className={styles["about-main-box"]}>
            <div className={styles["about-info"]}>
              {/* <AboutTechDetail></AboutTechDetail> */}
              <div className={styles["info-img"]}>
                <img src={aboutLogoImg} />
              </div>
              <div className={styles["info-content"]}>
                <span>
                  <img
                    src={aboutQuoteImg}
                    className={`${styles["quote"]} ${styles["front"]}`}
                    alt=""
                  />
                </span>
                HEARIM is a company that develops general-purpose numerical
                analysis software and provides sales and services using it.
                <span>
                  <img
                    src={aboutQuoteImg}
                    className={`${styles["quote"]} ${styles["back"]}`}
                    alt=""
                  />
                </span>
              </div>
            </div>
            <div className={`${styles["between-div"]} ${styles["one"]}`}>
              <div>TECHNOLOGY</div>
            </div>
            <div className={styles["about-tech"]}>
              <div className={styles["about-tech-elem"]} id="gridCreation">
                <div className={styles["tech-elem-title"]}>
                  Grid Creation SW (Copyrighted)
                </div>
                <div className="flex">
                  <div className={styles["about-tech-skills"]}>SOAR Mesher</div>
                  <div className={styles["about-tech-skills"]}>FOAR Mesher</div>
                </div>
              </div>
              <div className={styles["about-tech-elem"]} id="analysisEngine">
                <div className={styles["tech-elem-title"]}>
                  Analysis engine SW (Copyrighted)
                </div>
                <div className="flex">
                  <div className={styles["about-tech-skills"]}>LAFIV 3D</div>
                  <div className={styles["about-tech-skills"]}>EMWavel 3D</div>
                  <div className={styles["about-tech-skills"]}>DPFIV 2D</div>
                </div>
              </div>
              <div className={styles["about-tech-elem"]} id="other">
                <div className={styles["tech-elem-title"]}>
                  CFD Tool Utilizing Skill
                </div>
                <div className="flex">
                  <div className={styles["about-tech-skills"]}>
                    Ansys Fluent
                  </div>
                  <div className={styles["about-tech-skills"]}>CFD-ACE+</div>
                  <div className={styles["about-tech-skills"]}>SimicsMP</div>
                  <div className={styles["about-tech-skills"]}>
                    DSMC-Neutral
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles["between-div"]} ${styles["two"]}`}>
              <div>SIMULATION</div>
            </div>
            <div className={styles["about-simul"]}>
              <div className={styles["about-simul-box"]}>
                <video
                  className={styles["video"]}
                  src={aboutVideo}
                  controls
                  autoplay
                  muted
                  loop=""
                ></video>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};
export default About;
