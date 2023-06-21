import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
const Plane = () => {
  return (
    <>
      <mesh
        receiveShadow
        position-y={-100}
        rotation-x={-Math.PI * 0.5}
        scale={100}
      >
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial
          resolution={512}
          mirror={0.5}
          color="#c2d7eb"
          // side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};
export default Plane;
