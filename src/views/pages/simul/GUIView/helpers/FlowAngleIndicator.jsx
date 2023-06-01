import React, { useState, useRef, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Resize } from "@react-three/drei";
import * as THREE from "three";

import Spherical from "../../../../../util/math/calc/Spherical";

const FlowAngleIndicator = (props) => {
  const coneRef = useRef();
  const stickRef = useRef();
  const arrowRef = useRef();
  const sphereRef = useRef();
  const limitRef = useRef();

  const [hovered, setHovered] = useState(false);

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

  const moveArrowAngle = () => {
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
      const spherical = new Spherical();
      spherical.setFromVector3(intersection.point);

      // rotate arrow head when mouse moving
      arrowRef.current.rotateX(Math.PI / 2);
      arrowRef.current.lookAt(limitRef.current.position);

      intersects.length = 0;

      // let x = getOriginalCoorX(mouse.x);
      // let y = getOriginalCoorY(mouse.y);
      // let sPhi = radToDeg(spherical.phi);
      // let sTheta = radToDeg(spherical.theta);
    }
  };

  useEffect(() => {
    coneRef.current.geometry.rotateX(Math.PI / 2);
    stickRef.current.geometry.rotateX(Math.PI / 2);
  }, []);

  useFrame(() => {
    hovered && moveArrowAngle();
  });

  return (
    <>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[sphere.radius, 100, 100]} />
        <meshBasicMaterial transparent color="white" opacity={0.3} />
      </mesh>
      <mesh
        ref={limitRef}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerLeave={() => {
          setHovered(false);
        }}
      >
        <sphereGeometry args={[sphere.radius + sphere.radius / 3, 100, 100]} />
        <meshBasicMaterial transparent color="white" opacity={0.3} />
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
export default FlowAngleIndicator;
