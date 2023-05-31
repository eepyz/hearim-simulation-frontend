import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";

import { useSelector } from "react-redux";

import { extend, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Html, OrbitControls, CycleRaycast } from "@react-three/drei";

import * as THREE from "three";
import { DragControls } from "three/examples/jsm/controls/DragControls";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";

import BoundingBox from "../helpers/BoundingBox";
import BoundingSphere from "../helpers/BoundingSphere";
import Arrow from "../helpers/Arrow";

import MeshInfo from "../../../../../util/math/info/MeshInfo";
import BoundaryInfo from "../../../../../util/math/info/BoundaryInfo";
import STLMeshes from "./STLMeshes";
import BoundarySettings from "../../userSettings/BoundarySettings";

//convert to jsx
extend({ DragControls });

const Model = (props) => {
  //useSelector
  const toolState = useSelector((state) => state.toolState);

  //ref
  const groupRef = useRef();
  const orbitControlRef = useRef();

  //state
  const [modelUrl, setModelUrl] = useState(props.url);
  const [meshList, setMeshList] = useState([]);
  const [lineList, setLineList] = useState([]);
  const [meshInfoList, setMeshInfoList] = useState([]);
  const [meshPosition, setMeshPosition] = useState([0, 0, 0]);
  const [boundaries, setBoundaries] = useState({});
  const [boundary, setBoundary] = useState(new BoundaryInfo());

  //variables
  const { camera, gl, viewport } = useThree();
  const stlGeometry = useLoader(STLLoader, modelUrl);
  stlGeometry.computeBoundingBox();

  //animate
  useFrame((state, delta) => {
    if (toolState.rotateObject) {
      groupRef.current.rotation.y += delta;
    }
  });

  //functions
  const createMeshes = (geometries) => {
    const clippingSize = -1;
    return geometries.map((geometry, i) => (
      <STLMeshes
        geometry={geometry}
        key={i}
        name={"stlMesh-" + (i + 1)}
        meshInfo={meshInfoList[i]}
      />
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
    <BoundariesContext.Provider
      value={[setBoundaries, setBoundary, boundaries, boundary]}
    >
      {toolState.showBbox && <BoundingBox box={stlGeometry.boundingBox} />}
      <group ref={groupRef}>
        {createMeshes(meshList)}
        {
          <Html
            wrapperClass="label"
            // center
            //   distanceFactor={8}
            // distanceFactor={8}
          >
            {/* <BoundarySettings /> */}
          </Html>
        }
      </group>

      {toolState.showIndicator && (
        <group>
          <BoundingSphere box={stlGeometry.boundingBox} />
          <Arrow />
        </group>
      )}
      <OrbitControls ref={orbitControlRef} args={[camera, gl.domElement]} />
    </BoundariesContext.Provider>
  );
};

export default Model;
export const BoundariesContext = createContext(null);
