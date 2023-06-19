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

            <section className={styles["about-tech-detail-container"]}>
              <div className={styles["tech-detail-box"]}>
                <div className={styles["tech-detail-content-box"]}>
                  <div>
                    <div className={styles["tech-detail-title"]}>
                      Grid Creation SW (Copyrighted)
                    </div>
                    <div className={styles["tech-detail-content"]}>
                      <div>
                        <h1>Soar Mesher</h1>
                        <p>
                          Structured based Octree Adaptive Refinement Mesher
                        </p>
                      </div>
                      <div>
                        <h1>FOAR Mesher</h1>
                        <p>
                          Fully threaded based Octree Adaptive Refinement Mesher
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["tech-detail-img"]}>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              <div className={styles["tech-detail-box"]}>
                <div className={styles["tech-detail-content-box"]}>
                  <div>
                    <div className={styles["tech-detail-title"]}>
                      Analysis engine SW (Copyrighted)
                    </div>
                    <div className={styles["tech-detail-content"]}>
                      <div>
                        <h1>LAFIV 3D</h1>
                        <p>LAplace solver by Finite Volume method 3D</p>
                      </div>
                      <div>
                        <h1>EMWavel 3D</h1>
                        <p>
                          ElectroMagnetic Wave solver by Intergral equation of
                          maxwell's equation
                        </p>
                      </div>
                      <div>
                        <h1>DPFIV 2D</h1>
                        <p>Dc Plama solver by Finite Volume method 2D</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles["tech-detail-img"]}>
                    <img src="" alt="" />
                  </div>
                </div>
              </div>

              <div className={styles["tech-detail-box"]}>
                <div className={styles["tech-detail-content-box"]}>
                  <div>
                    <div className={styles["tech-detail-title"]}>
                      CFD Tool Utilizing Skill
                    </div>
                    <div className={styles["tech-detail-content"]}>
                      <div>
                        <h1>Ansys Fluent</h1>
                        <p>
                          1. General heat-fluid-turbulence problem analysis
                          technology
                        </p>
                        <p>
                          2. VOF (Volume-Of-Fluids; multi-phase flow) based
                          surface evaporation model utilization analysis
                          technology
                        </p>
                        <p>3. Compressible Flow Analysis Technology</p>
                      </div>
                      <div>
                        <h1>CFD-ACE+</h1>
                        <p>
                          1. General heat-fluid-turbulence problem analysis
                          technology
                        </p>
                        <p>
                          2. Thermal fluid-battery linkage analysis technology
                        </p>
                        <p>3. Low-temperature plasma analysis technology</p>
                        <p>4. High-temperature plasma analysis technology</p>
                      </div>
                      <div>
                        <h1>SimicsMP</h1>
                        <p>
                          1. General heat-fluid-turbulence problem analysis
                          technology
                        </p>
                        <p>
                          2. Analysis technology for complex shapes (ex,
                          showerhead chamber with 10,000 nozzels)
                        </p>
                      </div>
                      <div>
                        <h1>DSMC-Neutral</h1>
                        <p>
                          1. Lean gas analysis technology (evaporator, etc.)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className={`${styles["between-div"]} ${styles["two"]}`}>
              <div>SIMULATION</div>
            </div>
            <div className={styles["about-simul"]}>
              <div className={styles["about-simul-box"]}>
                <video
                  className={styles["video"]}
                  src={aboutVideo}
                  controls
                  autoPlay
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
