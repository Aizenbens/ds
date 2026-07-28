import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

import Settings from "./Settings.js";

export default function Camera({ body }) {
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = Settings.cameraFov;
    camera.near = 0.1;
    camera.far = 1000;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    if (!body?.current) return;

    const pos = body.current.translation();

    camera.position.set(
      pos.x,
      pos.y + 0.8, // ارتفاع العين
      pos.z
    );
  });

  return null;
}
