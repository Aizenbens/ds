import React from "react";
import { Canvas } from "@react-three/fiber";

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "black" }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <color attach="background" args={["#202020"]} />

        <ambientLight intensity={2} />

        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshNormalMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}
