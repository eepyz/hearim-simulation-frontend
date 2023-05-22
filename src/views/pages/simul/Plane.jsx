import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
const Plane = () => {
  return (
    <>
      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={1000}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={0.5}
          mirror={0.5}
          color="greenyellow"
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};
export default Plane;
