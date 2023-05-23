import Settings from "./Settings";
import Model from "./Model";
import Plane from "./Plane";

import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import { useEffect, useRef, useState } from "react";
import { Perf } from "r3f-perf";

const cameraConfig = {
  fov: 45,
  near: 0.1,
  far: 20000,
  position: [-4, 3, 6],
};

const GraphicView = () => {
  const [url, setUrl] = useState("/models/duct_matched_ascii.stl");

  //view
  return (
    <Canvas camera={cameraConfig} shadows>
      <Settings />
      <Model url={url} />
      <Plane />
    </Canvas>
  );
};
export default GraphicView;
