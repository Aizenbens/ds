import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import keys from "../input/Input.js";
import Settings from "./Settings.js";

export default function HeadBob() {
  const { camera } = useThree();

  const timer = useRef(0);
  const baseY = useRef(null);

  useFrame((_, delta) => {
    if (baseY.current === null) {
      baseY.current = camera.position.y;
    }

    const moving =
      keys["KeyW"] ||
      keys["KeyA"] ||
      keys["KeyS"] ||
      keys["KeyD"];

    if (!moving) {
      timer.current = 0;

      camera.position.y +=
        (baseY.current - camera.position.y) * delta * 8;

      return;
    }

    const sprint = keys["ShiftLeft"];

    timer.current +=
      delta *
      (sprint
        ? Settings.headBobSprintSpeed
        : Settings.headBobSpeed);

    camera.position.y =
      baseY.current +
      Math.sin(timer.current) * Settings.headBobAmount;
  });

  return null;
}
