import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

import Settings from "./Settings";
import Model from "./Model";

const cameraConfig = {
  fov: 45,
  near: 0.1,
  far: 20000,
  position: [-3, 0, 20],
};

const GUIView = () => {
  const [url, setUrl] = useState("/models/Manfold_fluid_solid_ascii.stl");
  return (
    <Canvas camera={cameraConfig}>
      <Settings />
      <Model url={url} />
    </Canvas>
  );
};
export default GUIView;
