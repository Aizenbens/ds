import React from "react";
import { Canvas } from "@react-three/fiber";

import Lights from "./Lights.jsx";
import Sky from "./Sky.jsx";

import Physics from "../physics/Physics.jsx";
import World from "../world/World.jsx";
import Player from "../player/Player.jsx";

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
