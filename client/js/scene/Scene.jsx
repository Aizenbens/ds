import React from "react";
import { Canvas } from "@react-three/fiber";

import Lights from "./Lights";
import Sky from "./Sky";
import World from "../world/World";

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
        <World />
      </Canvas>
    </div>
  );
}
