import { useFrame, useThree } from "@react-three/fiber";
import keys from "../input/Input.js";
import * as THREE from "three";

export default function Movement(body) {
  const { camera } = useThree();

  useFrame(() => {
    if (!body.current) return;

    const velocity = body.current.linvel();

    const direction = new THREE.Vector3();

    if (keys["KeyW"]) direction.z -= 1;
    if (keys["KeyS"]) direction.z += 1;
    if (keys["KeyA"]) direction.x -= 1;
    if (keys["KeyD"]) direction.x += 1;

    if (direction.length() > 0) {
      direction.normalize();

      const speed = keys["ShiftLeft"] ? 8 : 5;

      direction.applyEuler(camera.rotation);

      body.current.setLinvel(
        {
          x: direction.x * speed,
          y: velocity.y,
          z: direction.z * speed,
        },
        true
      );
    } else {
      body.current.setLinvel(
        {
          x: 0,
          y: velocity.y,
          z: 0,
        },
        true
      );
    }
  });
}
