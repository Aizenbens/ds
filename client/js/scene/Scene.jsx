import React from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "./Lights.jsx";

export default function Scene() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Canvas
        shadows
        camera={{
          position: [0, 3, 8],
          fov: 75,
        }}
      >
        <Lights />

        {/* أرضية */}
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
        >
          <planeGeometry args={[100, 100]} />
          <meshStandardMaterial color="#4caf50" />
        </mesh>

        {/* مكعب */}
        <mesh position={[0, 1, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
