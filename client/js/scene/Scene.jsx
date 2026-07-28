import React from "react";
import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <Canvas
      style={{
        width: "100vw",
        height: "100vh",
        background: "black",
      }}
      camera={{
        position: [0, 0, 5],
        fov: 75,
      }}
    >
      <ambientLight intensity={2} />

      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshNormalMaterial />
      </mesh>
    </Canvas>
  );
}
