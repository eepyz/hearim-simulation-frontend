import React, { useState, useRef, useEffect, useCallback } from "react";

import { useSelector, useDispatch } from "react-redux";

import { extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, CycleRaycast, Html } from "@react-three/drei";

import * as THREE from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import BoundingBox from "../helpers/BoundingBox";
import FlowAngleIndicator from "../helpers/AngleIndicator";

import MeshInfo from "../../../../../util/info/MeshInfo";
import { meshStateActions } from "../../../../../store/state/meshState"; //

import EachMesh from "./EachMesh";

//convert to jsx
extend({ DragControls });

const Model = (props) => {
  const dispatch = useDispatch();

  //useSelector
  const toolState = useSelector((state) => state.toolState);
  const flowState = useSelector((state) => state.flowState);

  //ref
  const groupRef = useRef();
  const orbitControlRef = useRef();
  const EachMeshRef = useRef();
  //state
  const [stlGeometry, setGeometry] = useState(props.stlGeometry);

  const [meshList, setMeshList] = useState([]);
  const [meshInfoList, setMeshInfoList] = useState([]);
  const [exportInfoList, setExportInfos] = useState([]);

  const [selectedMeshIndex, setSelectedMeshIndex] = useState(null);
  const [resetColorFlag, setResetColorFlag] = useState(false);

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
    let exportInfos = [];

    if (stlGeometry.groups.length > 1) {
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

        let meshInfo = new MeshInfo(separatedGeometry);
        separatedGeometries.push(separatedGeometry);
        separatedInfos.push(meshInfo);
        exportInfos.push({
          vertex: meshInfo.vertex,
          indices: meshInfo.indices,
        });
      }
      setMeshList(separatedGeometries);
      setMeshInfoList(separatedInfos);
    } else {
      let meshInfo = new MeshInfo(stlGeometry);
      exportInfos.push({
        vertex: meshInfo.vertex,
        indices: meshInfo.indices,
      });

      setMeshList([stlGeometry]);
      setMeshInfoList([meshInfo]);
    }
    dispatch(meshStateActions.saveMeshInfoList(exportInfos));
  };

  const resetColors = () => {
    setResetColorFlag(true);
  };

  //useEffect
  useEffect(() => {
    setMeshInfos(stlGeometry);
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

  useEffect(() => {
    setGeometry(props.stlGeometry);
    setMeshInfos(props.stlGeometry);
  }, [props.stlGeometry]);

  //animate
  // useFrame((state, delta) => {});

  //jsx
  return (
    <>
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

      {toolState.showBbox && <BoundingBox box={stlGeometry.boundingBox} />}

      {toolState.showIndicator && (
        <FlowAngleIndicator box={stlGeometry.boundingBox} />
      )}
      <OrbitControls
        ref={orbitControlRef}
        args={[camera, gl.domElement]}
        enableDamping={true}
        screenSpacePanning={false}
        dampingFactor={0.2}
        enableZoom={true}
        target={[0, 0, 0]}
        zoomSpeed={3}
        rotateSpeed={1.5}
        enablePan={false}
      />
    </>
  );
};

export default Model;
