const GuiSettings = () => {
  return (
    <>
      <directionalLight position={[-1, 1, -1]} intensity={0.5} />
      <directionalLight position={[0, 1, 2]} intensity={0.5} />
      <directionalLight position={[0, 1, 0]} intensity={0.5} />
      <ambientLight intensity={1} />
    </>
  );
};

export default GuiSettings;
