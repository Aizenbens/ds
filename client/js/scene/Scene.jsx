import React from "react";
import { Canvas } from "@react-three/fiber";

import Lights from "./Lights";
import Sky from "./Sky";

import Physics from "../physics/Physics";
import World from "../world/World";
import Player from "../player/Player";

export default function Scene() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        shadows
        camera={{
          position: [0, 6, 12],
          fov: 75,
        }}
      >
        <Sky />
        <Lights />

        <Physics>
          <World />
          <Player />
        </Physics>
      </Canvas>
    </div>
  );
}
