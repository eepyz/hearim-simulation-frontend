import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { useFrame } from "@react-three/fiber";
import { Html, useCursor } from "@react-three/drei";

import * as THREE from "three";

import BoundingSphere from "../helpers/BoundingSphere";
import BoundaryDetail from "../../userSettings/BoundarySettings";

const STLMeshes = (props) => {
  const toolState = useSelector((state) => state.toolState);

  const modelRef = useRef();
  const lineRef = useRef();

  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [meshInfo, setMeshInfo] = useState(null);

  //functions
  const resetColor = () => {
    const colors = [];
    const color = new THREE.Color("red");
    const positionAttribute =
      modelRef.current.geometry.getAttribute("position");
    for (let i = 0; i < positionAttribute.count; i += 3) {
      colors.push(color.r, color.g, color.b);
      colors.push(color.r, color.g, color.b);
      colors.push(color.r, color.g, color.b);
    }

    modelRef.current.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );
  };

  const SelectAndPaintFaces = (face, color) => {
    const colorAttribute = modelRef.current.geometry.getAttribute("color");
    colorAttribute.setXYZ(face.a, color.r, color.g, color.b);
    colorAttribute.setXYZ(face.b, color.r, color.g, color.b);
    colorAttribute.setXYZ(face.c, color.r, color.g, color.b);
    colorAttribute.needsUpdate = true;

    if (meshInfo) {
      let first = meshInfo.getTriangle(face.a, face.b, face.c);
      let last = undefined;
      let twinT;
      let searchedTriangles = [];
      let detectedTriangles = {};

      let currentTriangles = {};
      function saveSurfaceTriangle(triangle) {
        currentTriangles[triangle.triIndex] = {
          abc: triangle.abc,
          normal: triangle.normal,
          triIndex: triangle.triIndex,
        };
      }

      searchedTriangles.push(first);
      detectedTriangles[first.triIndex] = first.triIndex;
      saveSurfaceTriangle(first);

      let currentT = first;
      let index = 1;

      while (true) {
        // Triangle Searched finished
        if (
          currentT !== undefined &&
          currentT.triIndex === last &&
          searchedTriangles.length === meshInfo.indices.length / 3
        ) {
          break;
        }

        if (currentT === undefined) {
          break;
        }

        //twinT of currentT
        twinT = meshInfo.getTwinTriangle(
          currentT.abc.a,
          currentT.abc.b,
          currentT.abc.c
        );

        //color twinT
        const colorAttribute = modelRef.current.geometry.getAttribute("color");
        for (let i = 0; i < twinT.length; i++) {
          if (
            meshInfo.getAngleBetween(first.normal, twinT[i].normal) <
            // adjAngle.value
            90
          ) {
            let tt = twinT[i].abc;
            colorAttribute.setXYZ(tt.a, color.r, color.g, color.b);
            colorAttribute.setXYZ(tt.b, color.r, color.g, color.b);
            colorAttribute.setXYZ(tt.c, color.r, color.g, color.b);
            colorAttribute.needsUpdate = true;

            let ti = twinT[i].triIndex;
            if (!(ti in detectedTriangles)) {
              detectedTriangles[ti] = twinT[i];
              searchedTriangles.push(twinT[i]);
              saveSurfaceTriangle(twinT[i]);
            }
          } else continue;
        }

        currentT = searchedTriangles[index]; //next
        index++;
        last = searchedTriangles[searchedTriangles.length - 1].triIndex;
      }
      let key = Object.keys(detectedTriangles);
      let firstTi = key[0];
      let lastTi = key[key.length - 1];
    }
  };

  useCursor(hovered);

  useEffect(() => {
    setMeshInfo(props.meshInfo);
  }, [meshInfo]);

  return (
    <mesh
      {...props}
      ref={modelRef}
      receiveShadow
      castShadow
      onClick={(e) => (
        e.stopPropagation(),
        setClicked(!clicked),
        resetColor(),
        SelectAndPaintFaces(e.face, new THREE.Color("#12f"))
      )}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(e) => setHovered(false)}
      position={[-3, 0, 5]}
    >
      <meshStandardMaterial
        roughness={1}
        opacity={hovered ? 0.8 : 1}
        color={clicked ? "pink" : hovered ? "pink" : "lightblue"}
        // color={hovered ? "pink" : "lightblue"}
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

      {toolState.showLine && (
        <mesh {...props} ref={lineRef}>
          <meshStandardMaterial
            roughness={0.01}
            color="#292828"
            wireframe
            vertexColors={true}
          />
        </mesh>
      )}
    </mesh>
  );
};
export default STLMeshes;
