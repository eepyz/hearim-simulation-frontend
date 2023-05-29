import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { useFrame } from "@react-three/fiber";
import { Html, useCursor } from "@react-three/drei";

import * as THREE from "three";

import BoundaryDetail from "../../userSettings/BoundarySettings";

const STLMeshes = (props) => {
  const toolState = useSelector((state) => state.toolState);

  const modelRef = useRef();
  const lineRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  useFrame((state) =>
    modelRef.current.scale.setScalar(
      hovered && !clicked ? 1 + Math.sin(state.clock.elapsedTime * 10) / 100 : 1
    )
  );

  useCursor(hovered);

  return (
    <mesh
      {...props}
      ref={modelRef}
      receiveShadow
      castShadow
      onClick={(e) => (
        e.stopPropagation(), setClicked(!clicked), console.log(e)
      )}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
    >
      <meshStandardMaterial
        roughness={1}
        transparent
        opacity={!clicked ? 0.5 : 1}
        color={clicked ? "pink" : hovered ? "pink" : "lightblue"}
        side={THREE.DoubleSide}
      />
      {clicked && (
        <Html
          position={[20, 5, 0]}
          wrapperClass="label"
          center
          //   distanceFactor={8}
          distanceFactor={30}
        >
          <BoundaryDetail />
        </Html>
      )}

      {clicked && (
        <mesh {...props} ref={lineRef}>
          <meshStandardMaterial roughness={0.01} color="#292828" wireframe />
        </mesh>
      )}
    </mesh>
  );
};
export default STLMeshes;
