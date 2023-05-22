import BoundaryDetail from "./component/BoundarySettings";
import { useLoader, useFrame } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Fragment, useState, useRef } from "react";
import { Html, TransformControls } from "@react-three/drei";

const Model = ({ url }) => {
  const [hovered, setHover] = useState(false);
  const [active, useFrame] = useState(false);
  const [modelUrl, setModelUrl] = useState(url);

  const modelRef = useRef();
  const geom = useLoader(STLLoader, modelUrl);

  return (
    <Fragment>
      <mesh
        ref={modelRef}
        geometry={geom}
        scale={0.5}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        castShadow
      >
        <meshStandardMaterial roughness={0.01} color="orange" />
        <Html
          position={[10, 2, 0]}
          wrapperClass="label"
          center
          distanceFactor={8}
        >
          <BoundaryDetail />
        </Html>
      </mesh>
      {/* <TransformControls object={modelRef} mode="translate" size={1} /> */}
    </Fragment>
  );
};

export default Model;
