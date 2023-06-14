const GuiSettings = () => {
  return (
    <>
      <directionalLight position={[0, 1, 1]} intensity={0.5} />
      <ambientLight intensity={1} />
    </>
  );
};

export default GuiSettings;
