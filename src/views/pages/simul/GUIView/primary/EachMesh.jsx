import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useFrame, useThree } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";

import * as THREE from "three";

import BoundingSphere from "../helpers/AngleIndicator";

import Boundary from "../../../../../util/math/info/Boundary";

import { boundariesActions } from "../../../../../store/config/boundaries";
import { boundaryActions } from "../../../../../store/config/boundary";

const EachMesh = (props) => {
  const dispatch = useDispatch();
  const toolState = useSelector((state) => state.toolState);

  //useRef----------------------------------------------------------------------------------
  const modelRef = useRef();
  const lineRef = useRef();

  //useState---------------------------------------------------------------------------------
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [faceClicked, setFaceClicked] = useState(false);
  const [meshInfo, setMeshInfo] = useState(null);
  const [currentMesh, setCurrentMesh] = useState(null);
  const [boundaries, setBoundaries] = useState({});
  const [boundary, setBoundary] = useState(Boundary);
  const [initPosition, setInitPosition] = useState();
  const [initCameraPosition, setInitCameraPosition] = useState();

  //useThree---------------------------------------------------------------------------------
  const { gl, camera } = useThree();

  //functions------------------------------------------------------------------------------
  const saveInitPosition = () => {
    const box = props.box;
    const boxMax = Math.max(
      box.max.x - box.min.x,
      box.max.y - box.min.y,
      box.max.z - box.min.z
    );
    const boxCenter = new THREE.Vector3();
    box.getCenter(boxCenter);

    modelRef.current.position.sub(boxCenter);
    const initPosition = modelRef.current.getWorldPosition(new THREE.Vector3());

    boxCenter.normalize();
    const initCameraPosition = new THREE.Vector3(
      boxCenter.x,
      boxCenter.y + 5,
      boxMax * 3
    );

    setInitPosition(initPosition);
    setInitCameraPosition(initCameraPosition);
    camera.position.copy(initCameraPosition);
  };

  const resetColor = () => {
    const colors = [];
    const color = new THREE.Color("white");
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
    //change color of clicked face
    const colorAttribute = modelRef.current.geometry.getAttribute("color");
    colorAttribute.setXYZ(face.a, color.r, color.g, color.b);
    colorAttribute.setXYZ(face.b, color.r, color.g, color.b);
    colorAttribute.setXYZ(face.c, color.r, color.g, color.b);
    colorAttribute.needsUpdate = true;

    //change color of halfedge triangles which is neighbor with face
    if (meshInfo) {
      let first = meshInfo.getTriangle(face.a, face.b, face.c);
      let last = undefined;
      let twinT;
      let searchedTriangles = [];
      let detectedTriangles = {};

      let boundaryID;
      const updatedBoundaries = {};
      const updateBoundary = { ...Boundary };

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

      boundaryID = [firstTi, lastTi];

      if (!([boundaryID] in updatedBoundaries)) {
        updatedBoundaries[boundaryID] = updateBoundary;
        updatedBoundaries[boundaryID].id = boundaryID;
        updatedBoundaries[boundaryID].mesh = currentMesh;
        updatedBoundaries[boundaryID].triangle = currentTriangles;
      }

      setBoundaries((prev) => ({ ...prev, ...updatedBoundaries }));
      setBoundary(updateBoundary);
      console.log(boundary);
      console.log(boundaries);
    }

    setFaceClicked(true);
  };

  //event functions---------------------------------------------------------------------------
  const meshClick = (e) => {
    // console.log(Number(e.object.name.substr(-1)));
    e.stopPropagation(),
      // setClicked(!clicked),
      setClicked(true),
      resetColor(),
      setCurrentMesh(e.object.name),
      toolState.findBoundary &&
        SelectAndPaintFaces(e.face, new THREE.Color("#f16464"));
  };

  const meshHover = (e) => {
    e.stopPropagation(), setHovered(true);
  };

  const meshLeave = (e) => {
    setHovered(false);
  };

  //useCursor------------------------------------------------------------------------------
  useCursor(hovered);

  //useEffect------------------------------------------------------------------------------
  useEffect(() => {
    saveInitPosition();
  }, []);

  useEffect(() => {
    resetColor();
  }, [toolState.findBoundary]);

  useEffect(() => {
    if (initPosition !== undefined) {
      modelRef.current.position.copy(initPosition);
      camera.position.copy(initCameraPosition);
    }
  }, [toolState.resetPosition]);

  useEffect(() => {
    if (toolState.clippingObject) {
      gl.localClippingEnabled = true;
    } else {
      gl.localClippingEnabled = false;
    }
  }, [toolState.clippingObject]);

  useEffect(() => {
    setMeshInfo(props.meshInfo);
  }, [meshInfo]);

  //useFrame------------------------------------------------------------------------------
  useFrame((_, delta) => {});

  //----------------------------------------------------------------------------------------
  return (
    <>
      <mesh
        {...props}
        ref={modelRef}
        onClick={(e) => {
          meshClick(e);
        }}
        onPointerOver={(e) => {
          meshHover(e);
        }}
        onPointerOut={(e) => {
          meshLeave(e);
        }}
      >
        <meshStandardMaterial
          roughness={1}
          opacity={hovered ? 0.8 : 1}
          // color={clicked ? "pink" : hovered ? "pink" : "lightblue"}
          color={toolState.findBoundary && hovered ? "pink" : "lightblue"}
          side={THREE.DoubleSide}
          vertexColors={true}
          clipShadows
        >
          <plane attach="clippingPlanes-0" normal={[0, 0, -1]} constant={0} />
        </meshStandardMaterial>
        {toolState.showLine && (
          <mesh {...props} ref={lineRef}>
            <meshStandardMaterial roughness={0.01} color="gray" wireframe>
              <plane
                attach="clippingPlanes-0"
                normal={[0, 0, 1]}
                position={[0, 0, 0]}
                constant={0}
              />
            </meshStandardMaterial>
          </mesh>
        )}
      </mesh>
    </>
  );
};
export default EachMesh;
