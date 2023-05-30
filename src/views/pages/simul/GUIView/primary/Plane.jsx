import { MeshReflectorMaterial } from "@react-three/drei";
import * as THREE from "three";
const Plane = () => {
  return (
    <>
      <mesh receiveShadow position-y={-1} rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[30, 30]} />
        <MeshReflectorMaterial
          resolution={512}
          mirror={0.5}
          color="white"
          // side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
};
export default Plane;
