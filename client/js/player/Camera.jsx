import React from "react";
import { PerspectiveCamera } from "@react-three/drei";

export default function Camera() {
  return (
    <PerspectiveCamera
      makeDefault
      position={[0, 0.6, 0]}
      fov={75}
    />
  );
}
