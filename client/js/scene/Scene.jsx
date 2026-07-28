import React from "react";
import { Canvas } from "@react-three/fiber";

import Lights from "./Lights.jsx";
import Sky from "./Sky.jsx";

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{
          position: [0, 5, 10],
          fov: 75,
        }}
      >
        <Sky />
        <Lights />

        <gridHelper args={[20, 20]} />
        <axesHelper args={[5]} />

        <mesh position={[0, 1, 0]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  );
}
