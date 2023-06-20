import React, { useState, useRef, useEffect, useCallback } from "react";

import { useSelector } from "react-redux";

import { extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, CycleRaycast, Html } from "@react-three/drei";

import * as THREE from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import BoundingBox from "../helpers/BoundingBox";
import FlowAngleIndicator from "../helpers/AngleIndicator";

import MeshInfo from "../../../../../util/math/info/MeshInfo";
import EachMesh from "./EachMesh";

import styles from "../../../../../assets/css/Simulation.module.css";

//convert to jsx
extend({ DragControls });

const Model = (props) => {
  //useSelector
  const toolState = useSelector((state) => state.toolState);
  const flowState = useSelector((state) => state.flowState);

  //ref
  const groupRef = useRef();
  const orbitControlRef = useRef();
  const EachMeshRef = useRef();
  //state
  const [modelUrl, setModelUrl] = useState(props.url);
  const [meshList, setMeshList] = useState([]);
  const [lineList, setLineList] = useState([]);
  const [meshInfoList, setMeshInfoList] = useState([]);
  const [selectedMeshIndex, setSelectedMeshIndex] = useState(null);
  const [resetColorFlag, setResetColorFlag] = useState(false);
  const [stlGeometry, setGeometry] = useState(useLoader(STLLoader, modelUrl));

  //variables
  const { camera, gl, viewport, raycaster, mouse } = useThree();
  stlGeometry.computeBoundingBox();

  //functions
  const handleEachMeshClick = (index) => {
    setSelectedMeshIndex(index);
    setResetColorFlag(true);
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

  const resetColors = () => {
    setResetColorFlag(true);
  };

  const changeSTLfile = useCallback(async (e) => {
    const loader = new STLLoader();
    const uploadFile = e.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = function (e) {
      const target = e.target;
      let stlGeometry = loader.parse(target.result);
      setGeometry(stlGeometry);
      THREE.Cache.clear();
    };
    fileReader.readAsArrayBuffer(uploadFile);
  }, []);

  //useEffect
  useEffect(() => {
    setMeshInfos(stlGeometry);
    groupRef.current.position.set(0, 0, 0);
  }, []);

  useEffect(() => {
    if (stlGeometry !== null) {
      setMeshInfos(stlGeometry);
    }
  }, [stlGeometry]);

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

  //animate
  useFrame((state, delta) => {
    if (toolState.rotateObject) {
      groupRef.current.rotation.y += delta;
    }
  });
  //jsx
  return (
    <>
      {toolState.showBbox && <BoundingBox box={stlGeometry.boundingBox} />}
      <Html wrapperClass={styles["tool-menu"]}>
        <button>
          <label htmlFor="stlfile">
            <span className={"material-symbols-outlined " + styles["icons"]}>
              folder_supervised
            </span>
          </label>
          <input type="file" onChange={changeSTLfile} id="stlfile" />
        </button>
      </Html>
      <group ref={groupRef}>
        {meshList.map((geometry, i) => (
          <EachMesh
            geometry={geometry}
            key={i}
            name={"stlMesh-" + (i + 1)}
            meshInfo={meshInfoList[i]}
            box={stlGeometry.boundingBox}
            onClick={() => {
              handleEachMeshClick(i);
            }}
            resetColor={resetColorFlag && selectedMeshIndex !== i}
          />
        ))}
      </group>

      {toolState.showIndicator && (
        <FlowAngleIndicator box={stlGeometry.boundingBox} />
      )}
      <OrbitControls ref={orbitControlRef} args={[camera, gl.domElement]} />
    </>
  );
};

export default Model;
