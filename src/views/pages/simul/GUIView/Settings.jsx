const Settings = () => {
  return (
    <>
      <directionalLight castShadow position={[-1, 1, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
    </>
  );
};

export default Settings;
