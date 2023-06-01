import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useThree, useFrame } from "@react-three/fiber";
import { Resize } from "@react-three/drei";
import * as THREE from "three";

import { anglesActions } from "../../../../../store/config/angle";

import Spherical from "../../../../../util/math/calc/Spherical";
import { radToDeg } from "three/src/math/MathUtils";

const AngleIndicator = (props) => {
  const dispatch = useDispatch();

  const flowSelected = useSelector((state) => state.angles.flowSelected);
  const gravitySelected = useSelector((state) => state.angles.gravitySelected);

  const flowAngle = useSelector((state) => state.angles.flow);
  const gravityAngle = useSelector((state) => state.angles.gravity);

  const coneRef = useRef();
  const stickRef = useRef();
  const arrowRef = useRef();
  const sphereRef = useRef();
  const limitRef = useRef();

  const [angleSelected, setAngleSelected] = useState(false);

  const { camera, raycaster, pointer, mouse } = useThree();

  const spherical = new Spherical();

  const box = props.box;
  const boxMax = Math.max(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z
  );

  const boxCenter = new THREE.Vector3();
  box.getCenter(boxCenter);
  const sphere = box.getBoundingSphere(new THREE.Sphere(boxCenter));

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

  const moveAngle = () => {
    const flowSelected = useSelector((state) => state.angles.flowSelected);
    const gravitySelected = useSelector(
      (state) => state.angles.gravitySelected
    );

    const flowAngle = useSelector((state) => state.angles.flow);
    const gravityAngle = useSelector((state) => state.angles.gravity);

    // let phi = Number(userPhi);
    // let theta = Number(userTheta);

    let phi = 0;
    let theta = 0;

    setAngleSelected(true);
    arrowRef.current.position.copy(spherical.getVector3(theta, phi));
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

  //event functions----------------------------------------------------------------------
  const onLimitSphereHover = () => {
    limitRef.current.visible = false;
  };

  const onLimitSphereNotHover = () => {
    limitRef.current.visible = true;
  };

  const onLimitSphereClicked = () => {
    setAngleSelected(!angleSelected);
    if (angleSelected === true) {
      coneRef.current.material.color = new THREE.Color("red");
      stickRef.current.material.color = new THREE.Color("red");
    } else {
      coneRef.current.material.color = new THREE.Color("blue");
      stickRef.current.material.color = new THREE.Color("blue");
    }
  };
  //-------------------------------------------------------------------------------------
  useEffect(() => {
    coneRef.current.geometry.rotateX(Math.PI / 2);
    stickRef.current.geometry.rotateX(Math.PI / 2);
  }, []);

  useFrame(() => {
    if (!angleSelected) {
      searchAngle();
      getAngle();
    }
  });

  return (
    <>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[sphere.radius, 100, 100]} />
        <meshBasicMaterial transparent color="white" opacity={0.3} />
      </mesh>

      <mesh
        ref={limitRef}
        onPointerOver={onLimitSphereHover}
        onPointerLeave={onLimitSphereNotHover}
        onClick={onLimitSphereClicked}
      >
        <sphereGeometry args={[sphere.radius + sphere.radius / 2, 100, 100]} />
        <meshBasicMaterial transparent color="red" opacity={0.2} />
      </mesh>

      <group ref={arrowRef}>
        <mesh ref={coneRef} scale={0.3}>
          <coneGeometry args={[3, 10, 30]} />
          <meshBasicMaterial color="red" />
        </mesh>
        <mesh ref={stickRef} scale={0.3} position={[0, 0, -5]}>
          <cylinderGeometry args={[1, 1, 23, 32]} />
          <meshBasicMaterial color="red" />
        </mesh>
      </group>
    </>
  );
};
export default AngleIndicator;
