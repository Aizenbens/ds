import React from "react";
import { Canvas } from "@react-three/fiber";

import Lights from "./Lights.jsx";
import Sky from "./Sky.jsx";

import Physics from "../physics/Physics.jsx";
import World from "../world/World.jsx";
import Player from "../player/Player.jsx";

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
        <axesHelper args={[5]} />
        <gridHelper args={[20, 20]} />

        <Sky />
        <Lights />
        <mesh position={[0, 2, 0]}>
  <boxGeometry args={[1, 1, 1]} />
  <meshStandardMaterial color="red" />
</mesh>

               <Physics>
          <World />
          <Player />
        </Physics>
      </Canvas>
    </div>
  );
}
