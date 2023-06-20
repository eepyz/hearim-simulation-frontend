import React, { useState, useRef, useEffect } from "react";
import { extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";

import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

const Model = ({ url }) => {
  const modelRef = useRef();
  const [modelUrl, setModelUrl] = useState(url);

  const stlGeometry = useLoader(STLLoader, modelUrl);
  const { camera, gl } = useThree();

  useEffect(() => {
    const rotationAngle = Math.PI / 2;
    modelRef.current.rotation.y = rotationAngle;

    modelRef.current.position.set(-5, -3, 0);
  }, []);
  return (
    <>
      <Float speed={2} floatIntensity={10}>
        <mesh ref={modelRef} geometry={stlGeometry} scale={0.03}>
          <meshStandardMaterial roughness={0} color="#97aff8" />
        </mesh>
      </Float>
      <OrbitControls args={[camera, gl.domElement]} />
    </>
  );
};
export default Model;
