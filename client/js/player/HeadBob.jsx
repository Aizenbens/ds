import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";

import keys from "../input/Input.js";
import Settings from "./Settings.js";

let timer = 0;

export default function HeadBob() {
  const { camera } = useThree();

  useFrame((_, delta) => {
    // إذا لم يكن هناك حركة أعد الكاميرا تدريجياً
    if (
      !keys["KeyW"] &&
      !keys["KeyA"] &&
      !keys["KeyS"] &&
      !keys["KeyD"]
    ) {
      timer = 0;

      camera.position.y +=
        (camera.position.y - camera.position.y) * delta;

      return;
    }

    // سرعة الاهتزاز
    const speed = keys["ShiftLeft"]
      ? Settings.headBobSprintSpeed
      : Settings.headBobSpeed;

    timer += delta * speed;

    // الاهتزاز العمودي
    camera.position.y +=
      Math.sin(timer) *
      Settings.headBobAmount *
      delta *
      60;
  });

  return null;
}
