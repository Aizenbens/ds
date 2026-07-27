import { useFrame } from "@react-three/fiber";
import keys from "../input/Input.js";
import Settings from "./Settings.js";

let canJump = true;

export default function Jump(body) {
  useFrame(() => {
    if (!body.current) return;

    const velocity = body.current.linvel();
    const position = body.current.translation();

    // يعتبر اللاعب على الأرض عندما يكون قريبًا منها
    const grounded = position.y <= 1.55;

    if (grounded) {
      canJump = true;
    }

    if (keys["Space"] && grounded && canJump) {
      body.current.setLinvel(
        {
          x: velocity.x,
          y: Settings.jumpForce,
          z: velocity.z,
        },
        true
      );

      canJump = false;
    }
  });
}
