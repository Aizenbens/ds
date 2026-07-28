import { useFrame } from "@react-three/fiber";

import keys from "../input/Input.js";
import Settings from "./Settings.js";
import GroundCheck from "./GroundCheck.jsx";

let jumpPressed = false;

export default function Jump(body) {
  useFrame(() => {
    if (!body.current) return;

    const current = body.current.linvel();

    const onGround = GroundCheck(body);

    if (keys["Space"]) {
      if (!jumpPressed && onGround) {
        body.current.setLinvel(
          {
            x: current.x,
            y: Settings.jumpForce,
            z: current.z,
          },
          true
        );

        jumpPressed = true;
      }
    } else {
      jumpPressed = false;
    }
  });
}
