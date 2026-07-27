import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import keys from "../input/Input.js";
import Settings from "./Settings.js";

export default function Movement(body, stamina) {
  const { camera } = useThree();

  const direction = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();

  useFrame(() => {
    if (!body.current) return;

    const velocity = body.current.linvel();

    direction.set(0, 0, 0);

    forward.set(0, 0, -1);
    forward.applyQuaternion(camera.quaternion);
    forward.y = 0;
    forward.normalize();

    right.set(1, 0, 0);
    right.applyQuaternion(camera.quaternion);
    right.y = 0;
    right.normalize();

    if (keys["KeyW"]) direction.add(forward);
    if (keys["KeyS"]) direction.sub(forward);
    if (keys["KeyD"]) direction.add(right);
    if (keys["KeyA"]) direction.sub(right);

    if (direction.lengthSq() > 0) {
      direction.normalize();

     let speed = Settings.walkSpeed;

if (keys["ShiftLeft"] && stamina.stamina.current > 0) {
  speed = Settings.sprintSpeed;
  stamina.drain();
} else {
  stamina.recover();
}
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
