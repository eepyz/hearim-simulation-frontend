import * as THREE from "three";

const BoundingSphere = (props) => {
  const box = props.box;
  const boxMax = Math.max(
    box.max.x - box.min.x,
    box.max.y - box.min.y,
    box.max.z - box.min.z
  );

  const boxCenter = new THREE.Vector3();
  box.getCenter(boxCenter);

  const sphere = box.getBoundingSphere(new THREE.Sphere(boxCenter));

  return (
    <>
      <mesh>
        <sphereGeometry args={[sphere.radius, 100, 100]} />
        <meshBasicMaterial transparent color="white" opacity={0.3} />
      </mesh>
    </>
  );
};
export default BoundingSphere;
