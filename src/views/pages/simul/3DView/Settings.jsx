import { OrbitControls } from "@react-three/drei";
const Settings = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight castShadow position={[-1, 1, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default Settings;
