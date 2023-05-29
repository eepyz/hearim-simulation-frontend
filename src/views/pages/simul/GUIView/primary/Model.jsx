import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

import { extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

import * as THREE from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import BoundaryDetail from "../../userSettings/BoundarySettings";
import MeshInfo from "../../../../../util/math/info/MeshInfo";
import BoundaryInfo from "../../../../../util/math/info/BoundaryInfo";

//convert to jsx
extend({ DragControls });

const Model = (props) => {
  const toolState = useSelector((state) => state.toolState);

  //ref
  const groupRef = useRef();
  const modelRef = useRef();
  const lineRef = useRef();
  const orbitControlRef = useRef();

  //state
  const [hovered, setHover] = useState(false);

  const [modelUrl, setModelUrl] = useState(props.url);

  const [meshList, setMeshList] = useState([]);
  const [lineList, setLineList] = useState([]);
  const [meshInfoList, setMeshInfoList] = useState([]);

  const [boundary, setBoundary] = useState();

  //variables
  const { camera, gl, viewport } = useThree();
  const stlGeometry = useLoader(STLLoader, modelUrl);

  //animate
  useFrame(() => {
    if (toolState.rotateObject) {
      groupRef.current.rotation.y += 0.01;
    }
  });

  //functions
  const createMeshes = (geometries) => {
    return geometries.map((geometry, index) => (
      <>
        <mesh key={index} geometry={geometry} ref={modelRef}>
          <meshStandardMaterial roughness={0.01} color="#97aff8" />
          <Html
            position={[10, 2, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
          >
            <BoundaryDetail />
          </Html>
          {toolState.showLine && (
            <mesh key={index} geometry={geometry} ref={lineRef}>
              <meshStandardMaterial roughness={0.01} color="white" wireframe />
            </mesh>
          )}
        </mesh>
      </>
    ));
  };

  const setMeshInfos = (stlGeometry) => {
    let separatedGeometries = [];
    let separatedInfos = [];

    const { attributes, groups } = stlGeometry;

    for (let i = 0; i < groups.length; i++) {
      let group = groups[i];
      const start = group.start;
      const count = group.count;

      const separatedGeometry = new THREE.BufferGeometry();

      const position = new THREE.Float32BufferAttribute(
        new Float32Array(count * 3),
        3
      );
      const normal = new THREE.Float32BufferAttribute(
        new Float32Array(count * 3),
        3
      );

      for (let p = 0; p < count; p++) {
        position.copyAt(p, attributes.position, start + p);
        normal.copyAt(p, attributes.normal, start + p);
      }

      separatedGeometry.setAttribute("position", position);
      separatedGeometry.setAttribute("normal", normal);
      separatedGeometries.push(separatedGeometry);
      separatedInfos.push(new MeshInfo(separatedGeometry));
    }

    setMeshList(separatedGeometries);
    setMeshInfoList(separatedInfos);
  };

  //useEffect
  useEffect(() => {
    setMeshInfos(stlGeometry);
    setBoundary(new BoundaryInfo());
  }, []);

  useEffect(() => {
    const dragControls = new DragControls(
      [groupRef.current],
      camera,
      gl.domElement
    );

    const handleDragStart = () => {
      orbitControlRef.current.enabled = false;
    };

    const handleDragEnd = () => {
      orbitControlRef.current.enabled = true;
    };

    dragControls.addEventListener("dragstart", handleDragStart);
    dragControls.addEventListener("dragend", handleDragEnd);

    return () => {
      dragControls.removeEventListener("dragstart", handleDragStart);
      dragControls.removeEventListener("dragend", handleDragEnd);
      dragControls.dispose();
    };
  }, [camera, gl.domElement]);

  //jsx
  return (
    <>
      <group ref={groupRef}>{createMeshes(meshList)}</group>
      <OrbitControls ref={orbitControlRef} args={[camera, gl.domElement]} />
    </>
  );
};

export default Model;
