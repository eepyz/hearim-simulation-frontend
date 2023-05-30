import React, { useState, useRef, useEffect } from "react";

const Arrow = () => {
  const coneRef = useRef();
  const stickRef = useRef();

  useEffect(() => {
    coneRef.current.geometry.rotateX(Math.PI / 2);
    stickRef.current.geometry.rotateX(Math.PI / 2);
  });
  return (
    <>
      <mesh ref={coneRef} scale={0.3}>
        <coneGeometry args={[3, 10, 30]} />
        <meshBasicMaterial color="red" />
      </mesh>
      <mesh ref={stickRef} scale={0.3} position={[0, 0, -5]}>
        <cylinderGeometry args={[1, 1, 23, 32]} />
        <meshBasicMaterial color="red" />
      </mesh>
    </>
  );
};
export default Arrow;
