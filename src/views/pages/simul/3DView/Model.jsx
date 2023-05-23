import BoundaryDetail from "../menus/BoundarySettings";
import MeshInfo from "../../../../util/math/info/MeshInfo";
import BoundaryInfo from "../../../../util/math/info/BoundaryInfo";

import { useLoader, useFrame } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Fragment, useState, useRef, useEffect } from "react";
import { Html, TransformControls } from "@react-three/drei";

const Model = ({ url }) => {
  const [hovered, setHover] = useState(false);
  const [active, useFrame] = useState(false);
  const [modelUrl, setModelUrl] = useState(url);

  const [meshInfo, setMeshInfo] = useState();
  const [boundary, setBoundary] = useState();

  const modelRef = useRef();
  const geom = useLoader(STLLoader, modelUrl);

  useEffect(() => {
    setMeshInfo(new MeshInfo(geom));
    setBoundary(new BoundaryInfo());
  }, []);

  return (
    <Fragment>
      {/* <mesh position={modelRef.current.position} geometry={geom} scale={0.5}>
        <meshBasicMaterial wireframe />
      </mesh> */}
      <mesh
        ref={modelRef}
        geometry={geom}
        scale={0.5}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        castShadow
      >
        <meshStandardMaterial roughness={0.01} color="#97aff8" />
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
