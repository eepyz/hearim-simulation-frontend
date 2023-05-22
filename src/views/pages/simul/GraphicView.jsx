import Model from "./Model";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  OrbitControls,
} from "@react-three/drei";

import { useEffect, useRef, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";

const GraphicView = () => {
  //
  const cameraConfig = {
    fov: 45,
    near: 0.1,
    far: 20000,
    position: [-4, 3, 6],
  };
  const [url, setUrl] = useState("/models/duct_matched_ascii.stl");

  //view
  return (
    <Canvas camera={cameraConfig} shadows>
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[-1, 1, 0]} intensity={1} />
      <ambientLight intensity={0.5} />

      <Model url={url} />

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={1000}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.5}
          color="greenyellow"
          side={THREE.DoubleSide}
        />
      </mesh>
    </Canvas>
  );
};
export default GraphicView;
