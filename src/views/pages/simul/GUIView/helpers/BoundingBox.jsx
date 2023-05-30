import * as THREE from "three";
import { Edges } from "@react-three/drei";
const BoundingBox = (props) => {
  const box = props.box;
  const boxMax = Math.max(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z
  );

  const boxCenter = new THREE.Vector3();
  box.getCenter(boxCenter);

  const bboxX = (box.max.x - box.min.x) * 20;
  const bboxY = (box.max.y - box.min.y) * 20;
  const bboxZ = (box.max.z - box.min.z) * 20;
  return (
    <mesh>
      <boxGeometry args={[bboxX, bboxY, bboxZ]} />
      <meshBasicMaterial transparent opacity={0.5} />
      <Edges />
    </mesh>
  );
};
export default BoundingBox;
