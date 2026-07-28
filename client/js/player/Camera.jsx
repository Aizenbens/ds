import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

import Settings from "./Settings.js";

export default function Camera() {
  const { camera } = useThree();

  useEffect(() => {
    camera.fov = Settings.cameraFov;
    camera.near = 0.1;
    camera.far = 1000;
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}
