import { Canvas } from "@react-three/fiber";

function Box() {
  return (
    <mesh>
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas>
        <ambientLight />
        <Box />
      </Canvas>
    </div>
  );
}
