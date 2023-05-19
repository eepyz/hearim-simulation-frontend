import { Fragment } from "react";

import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";

import ThreeDView from "./ThreeDView";

import "../../../assets/css/simul.css";

const Simulation = () => {
  return (
    <Fragment>
      <div className="container">
        <Leva collapsed />
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 3, 6],
          }}
        >
          <ThreeDView />
        </Canvas>
      </div>
    </Fragment>
  );
};
export default Simulation;
