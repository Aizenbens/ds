import { useFrame, useThree } from "@react-three/fiber";
import Settings from "./Settings.js";
import keys from "../input/Input.js";

export default function CameraController() {
  const { camera } = useThree();

  useFrame((_, delta) => {
    const targetFov = keys["ShiftLeft"]
      ? Settings.sprintFov
      : Settings.cameraFov;

    camera.fov += (targetFov - camera.fov) * delta * 8;
    camera.updateProjectionMatrix();
  });

  return null;
}
