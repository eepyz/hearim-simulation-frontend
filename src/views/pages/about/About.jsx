import { Fragment } from "react";
import "../../../assets/css/About.module.css";

const About = () => {
  return (
    <Fragment>
      <main>
        <section className="container">
          <div className="sub-header">
            <div className="sub-header-content">
              <p>About</p>
              <div>What is HEARIM?</div>
            </div>
          </div>
          <div className="about-main-box">
            <div className="about-info">
              <AboutTechDetail></AboutTechDetail>
              <div className="info-img">
                <img src="../../../assets/img/logo.png" />
              </div>
              <div className="info-content">
                <span>
                  <img className="quote front" alt="" />
                </span>
                HEARIM is a company that develops general-purpose numerical
                analysis software and provides sales and services using it.
                <span>
                  <img className="quote back" alt="" />
                </span>
              </div>
            </div>
            <div className="between-div one">
              <div>TECHNOLOGY</div>
            </div>
            <div className="about-tech">
              <div className="about-tech-elem" id="gridCreation">
                <div className="tech-elem-title">
                  Grid Creation SW (Copyrighted)
                </div>
                <div className="flex">
                  <div className="about-tech-skills">SOAR Mesher</div>
                  <div className="about-tech-skills">FOAR Mesher</div>
                </div>
              </div>
              <div className="about-tech-elem" id="analysisEngine">
                <div className="tech-elem-title">
                  Analysis engine SW (Copyrighted)
                </div>
                <div className="flex">
                  <div className="about-tech-skills">LAFIV 3D</div>
                  <div className="about-tech-skills">EMWavel 3D</div>
                  <div className="about-tech-skills">DPFIV 2D</div>
                </div>
              </div>
              <div className="about-tech-elem" id="other">
                <div className="tech-elem-title">CFD Tool Utilizing Skill</div>
                <div className="flex">
                  <div className="about-tech-skills">Ansys Fluent</div>
                  <div className="about-tech-skills">CFD-ACE+</div>
                  <div className="about-tech-skills">SimicsMP</div>
                  <div className="about-tech-skills">DSMC-Neutral</div>
                </div>
              </div>
            </div>
            <div className="between-div two">
              <div>SIMULATION</div>
            </div>
            <div className="about-simul">
              <div className="about-simul-box">
                <video
                  className="video"
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
