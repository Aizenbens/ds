import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

import keys from "../input/Input.js";
import Settings from "./Settings.js";

export default function HeadBob() {
  const { camera } = useThree();

  const timer = useRef(0);

  useFrame((_, delta) => {
    const moving =
      keys["KeyW"] ||
      keys["KeyA"] ||
      keys["KeyS"] ||
      keys["KeyD"];

    if (!moving) {
      timer.current = 0;
      return;
    }

    const sprint = keys["ShiftLeft"];

    const speed = sprint
      ? Settings.headBobSprintSpeed
      : Settings.headBobSpeed;

    timer.current += delta * speed;

    camera.position.y +=
      Math.sin(timer.current) * Settings.headBobAmount * delta * 60;
  });

  return null;
}
