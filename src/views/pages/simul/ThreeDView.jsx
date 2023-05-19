import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import { Perf } from "r3f-perf";
import * as THREE from "three";

const ThreeDView = () => {
  const { perfVisible } = useControls({
    perfVisible: true,
  });

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: "invertY",
    },
    color: "#d88f8f",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: {
      options: ["a", "b", "c"],
    },
  });

  const { cubeScale } = useControls("cube", {
    cubeScale: {
      value: 1.5,
      step: 0.01,
      min: 0,
      max: 5,
    },
  });

  return (
    <>
      {/* Perf: 성능 검사 position으로 위치 변경 */}
      {perfVisible ? <Perf position="top-left" /> : null}
      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position={[position.x, position.y, 0]} visible={visible}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh castShadow position-x={2} scale={cubeScale}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};
export default ThreeDView;
