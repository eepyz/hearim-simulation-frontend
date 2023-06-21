import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { useFrame, useThree } from "@react-three/fiber";
import { useCursor } from "@react-three/drei";

import * as THREE from "three";

import BoundingSphere from "../helpers/AngleIndicator";

import Boundary from "../../../../../util/math/info/Boundary";

import { boundariesActions } from "../../../../../store/config/boundaries";
import { pointerStateActions } from "../../../../../store/state/pointerState";

const EachMesh = (props) => {
  const dispatch = useDispatch();
  const toolState = useSelector((state) => state.toolState);
  const boundaries = useSelector((state) => state.boundaries.boundaries);
  const pointerState = useSelector((state) => {
    state.pointerState;
  });

  //useRef----------------------------------------------------------------------------------
  const modelRef = useRef();
  const lineRef = useRef();

  //useState---------------------------------------------------------------------------------
  const [hovered, setHovered] = useState(false);
  const [meshInfo, setMeshInfo] = useState(null);

  const [initPosition, setInitPosition] = useState();
  const [initCameraPosition, setInitCameraPosition] = useState();

  //useThree---------------------------------------------------------------------------------
  const { gl, camera, raycaster, mouse } = useThree();

  //functions------------------------------------------------------------------------------
  const saveInitPosition = () => {
    console.log("initPosition");
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

  const SelectAndPaintFaces = (e, color) => {
    //change color of clicked face
    const colorAttribute = modelRef.current.geometry.getAttribute("color");
    colorAttribute.setXYZ(e.face.a, color.r, color.g, color.b);
    colorAttribute.setXYZ(e.face.b, color.r, color.g, color.b);
    colorAttribute.setXYZ(e.face.c, color.r, color.g, color.b);
    colorAttribute.needsUpdate = true;

    //change color of halfedge triangles which is neighbor with e.face
    if (meshInfo) {
      let first = meshInfo.getTriangle(e.face.a, e.face.b, e.face.c);
      let last = undefined;
      let twinT;
      let searchedTriangles = [];
      let detectedTriangles = {};

      let boundaryID;

      let currentTriangles = {};
      function saveSurfaceTriangle(triangle) {
        currentTriangles[triangle.triIndex] = {
          abc: triangle.abc,
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
            // meshInfo.getAngleBetween(currentT.normal, twinT[i].normal) <
            meshInfo.getAngleBetween(first.normal, twinT[i].normal) <
            // adjAngle.value
            toolState.angleValue
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

      boundaryID = [e.object.name, firstTi, lastTi];
      dispatch(boundariesActions.saveCurrentId(boundaryID));

      if (!([boundaryID] in boundaries)) {
        dispatch(
          boundariesActions.saveNewBoundary({
            boundary: { ...Boundary },
            id: boundaryID,
            mesh: e.object.name,
            triangle: currentTriangles,
          })
        );
        dispatch(boundariesActions.updateBoundary());
      }

      dispatch(boundariesActions.updateBoundary());
    }
  };

  //event functions---------------------------------------------------------------------------
  const meshClick = (e) => {
    e.stopPropagation();
    props.onClick();
    dispatch(pointerStateActions.objectClicked(true));
    resetColor();
    toolState.findBoundary &&
      SelectAndPaintFaces(e, new THREE.Color("#5599ff"));
  };

  const meshHover = (e) => {
    e.stopPropagation();
    setHovered(true);
  };

  const meshLeave = (e) => {
    e.stopPropagation();
    setHovered(false);
  };
  //useCursor------------------------------------------------------------------------------
  useCursor(hovered);

  //useEffect------------------------------------------------------------------------------
  useEffect(() => {
    resetColor();
    if (!toolState.findBoundary) {
      dispatch(pointerStateActions.objectClicked(false));
    }
  }, [toolState.findBoundary]);

  useEffect(() => {
    if (initPosition !== undefined) {
      modelRef.current.position.copy(initPosition);
      camera.position.copy(initCameraPosition);
    }
  }, [toolState.resetPosition, toolState.showIndicator]);

  useEffect(() => {
    if (toolState.clippingObject) {
      gl.localClippingEnabled = true;
    } else {
      gl.localClippingEnabled = false;
    }
  }, [toolState.clippingObject]);

  useEffect(() => {
    setMeshInfo(props.meshInfo);
  }, [props.meshInfo]);

  useEffect(() => {
    if (props.resetColor) {
      resetColor();
    }
  }, [props.resetColor]);

  useEffect(() => {
    resetColor();
    saveInitPosition();
  }, [props.geometry]);
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
        onPointerEnter={(e) => {
          meshHover(e);
        }}
        onPointerLeave={(e) => {
          meshLeave(e);
        }}
      >
        <meshStandardMaterial
          roughness={0.01}
          opacity={hovered ? 0.8 : 1}
          color={toolState.findBoundary && hovered ? "white" : "#748DA6"}
          side={THREE.DoubleSide}
          vertexColors={true}
          clipShadows
        >
          <plane attach="clippingPlanes-0" normal={[0, 0, -1]} constant={0} />
        </meshStandardMaterial>
        {toolState.showLine && (
          <mesh {...props} ref={lineRef}>
            <meshBasicMaterial color="white" wireframe>
              <plane
                attach="clippingPlanes-0"
                normal={[0, 0, 1]}
                position={[0, 0, 0]}
                constant={0}
              />
            </meshBasicMaterial>
          </mesh>
        )}
      </mesh>
    </>
  );
};
export default EachMesh;
