import { useEffect, useRef, useState, Suspense } from "react";

import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";

import GuiSettings from "./primary/GuiSettings";
import Model from "./primary/Model";
import Plane from "./primary/Plane";

const cameraConfig = {
  fov: 45,
  near: 0.1,
  far: 20000,
  position: [0, 13, 30],
};

const GUIView = () => {
  const [url, setUrl] = useState("/models/duct_matched_ascii.stl");
  // const [url, setUrl] = useState("/models/Manfold_solid_ascii.stl");

  //view
  return (
    <Canvas camera={cameraConfig} raycaster shadows>
      <Suspense fallback={null}>
        <GuiSettings />
        <Model url={url} />
        {/* <Plane /> */}
      </Suspense>
    </Canvas>
  );
};
export default GUIView;
