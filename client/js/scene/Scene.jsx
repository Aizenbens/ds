import React from "react";
import { Canvas } from "@react-three/fiber";

import Lights from "./Lights";
import Sky from "./Sky";
import Ground from "../world/Ground";

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
        <Sky />
        <Lights />

        <Ground />

        {/* مكعب اختبار */}
        <mesh
          position={[0, 1, 0]}
          castShadow
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
