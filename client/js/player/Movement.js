import { useFrame } from "@react-three/fiber";
import keys from "../input/Input.js";

export default function Movement(body) {
  useFrame(() => {
    if (!body.current) return;

    const velocity = body.current.linvel();

    let x = 0;
    let z = 0;

    const speed = keys["ShiftLeft"] ? 8 : 5;

    if (keys["KeyW"]) z -= speed;
    if (keys["KeyS"]) z += speed;
    if (keys["KeyA"]) x -= speed;
    if (keys["KeyD"]) x += speed;

    body.current.setLinvel(
      {
        x,
        y: velocity.y,
        z,
      },
      true
    );
  });
}
