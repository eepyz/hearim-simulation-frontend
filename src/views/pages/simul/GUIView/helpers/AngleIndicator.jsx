import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useThree, useFrame } from "@react-three/fiber";
import { Resize, Html } from "@react-three/drei";
import * as THREE from "three";

import { anglesActions } from "../../../../../store/config/angle";

import Spherical from "../../../../../util/math/calc/Spherical";
import { radToDeg } from "three/src/math/MathUtils";

import FlowAngleSettings from "../../userSettings/AngleSettings";

const AngleIndicator = (props) => {
  const dispatch = useDispatch();

  const flowSelected = useSelector((state) => state.angles.flowSelected);
  const gravitySelected = useSelector((state) => state.angles.gravitySelected);

  const flowAngle = useSelector((state) => state.angles.flow);
  const gravityAngle = useSelector((state) => state.angles.gravity);

  const moveBtnClicked = useSelector((state) => state.angles.moveBtnClicked);

  const coneRef = useRef();
  const stickRef = useRef();
  const arrowRef = useRef();
  const limitRef = useRef();

  const [angleSelected, setAngleSelected] = useState(false);
  const [sphereHovered, setSphereHovered] = useState(false);

  const { camera, raycaster, pointer, mouse } = useThree();

  const box = props.box;
  const boxMax = Math.max(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z
  );

  const boxCenter = new THREE.Vector3();
  box.getCenter(boxCenter);
  const sphere = box.getBoundingSphere(new THREE.Sphere(boxCenter));
  const spherical = new Spherical(sphere.radius * 2);

  //functions--------------------------------------------------------------------------
  const searchAngle = () => {
    const intersection = {
      intersects: false,
      point: new THREE.Vector3(),
      normal: new THREE.Vector3(),
    };

    const intersects = [];

    //raycaster
    raycaster.setFromCamera(mouse, camera);
    raycaster.intersectObject(limitRef.current, false, intersects);
    //get current mouse position
    if (intersects.length > 0) {
      const p = intersects[0].point;
      arrowRef.current.position.copy(new THREE.Vector3(p.x, p.y, p.z));
      intersection.point.copy(p);
      //get current position's normal
      const n = intersects[0].face.normal.clone();
      n.transformDirection(limitRef.current.matrixWorld);
      n.add(intersects[0].point);

      intersection.normal.copy(intersects[0].face.normal);
      intersection.intersects = true;

      //make sub helper: spherical
      spherical.setFromVector3(intersection.point);

      // rotate arrow head when mouse moving
      arrowRef.current.rotateX(Math.PI / 2);
      arrowRef.current.lookAt(limitRef.current.position);

      intersects.length = 0;
    }
  };

  const goToAngle = () => {
    let phi, theta, userPhiInput, userThetaInput;

    if (flowSelected) {
      phi = flowAngle.phi;
      theta = flowAngle.theta;
      userPhiInput = Number(phi);
      userThetaInput = Number(theta);
    }

    if (gravitySelected) {
      phi = gravityAngle.phi;
      theta = gravityAngle.theta;
      userPhiInput = Number(phi);
      userThetaInput = Number(theta);
    }

    arrowRef.current.position.copy(
      spherical.getVector3(userThetaInput, userPhiInput)
    );
    arrowRef.current.rotateX(Math.PI / 2);
    arrowRef.current.lookAt(limitRef.current.position);
  };

  const getAngle = () => {
    let phi = radToDeg(spherical.phi).toFixed();
    let theta = radToDeg(spherical.theta).toFixed();
    if (flowSelected) {
      dispatch(anglesActions.updateFlowAngles({ phi: phi, theta: theta }));
    }
    if (gravitySelected) {
      dispatch(anglesActions.updateGravityAngles({ phi: phi, theta: theta }));
    }
  };

  const changeArrowColor = () => {};
  //event functions----------------------------------------------------------------------
  const onLimitSphereHover = () => {
    setSphereHovered(true);
    limitRef.current.visible = false;
  };

  const onLimitSphereNotHover = () => {
    setSphereHovered(false);
    limitRef.current.visible = true;
  };

  const onLimitSphereClicked = () => {
    setAngleSelected(!angleSelected);
    if (angleSelected === true) {
      coneRef.current.material.color = new THREE.Color("red");
      stickRef.current.material.color = new THREE.Color("red");
    } else {
      coneRef.current.material.color = new THREE.Color("#145eff");
      stickRef.current.material.color = new THREE.Color("#145eff");
    }
  };
  //-------------------------------------------------------------------------------------
  useEffect(() => {
    coneRef.current.geometry.rotateX(Math.PI / 2);
    stickRef.current.geometry.rotateX(Math.PI / 2);
  }, []);

  useEffect(() => {
    goToAngle();
    setAngleSelected(true);
  }, [moveBtnClicked]);

  useFrame(() => {
    if (!angleSelected && sphereHovered) {
      searchAngle();
      getAngle();
    }
  });

  return (
    <>
      <mesh
        ref={limitRef}
        onPointerOver={onLimitSphereHover}
        onPointerLeave={onLimitSphereNotHover}
        onClick={onLimitSphereClicked}
      >
        <sphereGeometry args={[sphere.radius * 2, 100, 100]} />
        <meshBasicMaterial transparent color="white" opacity={0.2} />
      </mesh>

      <group ref={arrowRef}>
        <mesh ref={coneRef} scale={0.2}>
          <coneGeometry args={[3, 10, 30]} />
          <meshPhysicalMaterial color="red" />
        </mesh>
        <mesh ref={stickRef} scale={0.2} position={[0, 0, -3]}>
          <cylinderGeometry args={[1, 1, 23, 32]} />
          <meshPhysicalMaterial color="red" />
        </mesh>
      </group>
    </>
  );
};
export default AngleIndicator;
