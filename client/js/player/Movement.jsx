import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

import keys from "../input/Input.js";
import Settings from "./Settings.js";

export default function Movement(body, stamina) {
  const { camera } = useThree();

  const direction = new THREE.Vector3();
  const forward = new THREE.Vector3();
  const right = new THREE.Vector3();

  const velocity = new THREE.Vector3();

  useFrame((_, delta) => {
    if (!body.current) return;

    const current = body.current.linvel();

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

    let targetSpeed = Settings.walkSpeed;

    if (keys["ShiftLeft"] && stamina.stamina > 0) {
      targetSpeed = Settings.sprintSpeed;
      stamina.drain();
    } else {
      stamina.recover();
    }

    if (direction.lengthSq() > 0) {
      direction.normalize();

      velocity.lerp(
        direction.multiplyScalar(targetSpeed),
        Settings.acceleration * delta
      );
    } else {
      velocity.lerp(
        new THREE.Vector3(),
        Settings.deceleration * delta
      );
    }

    body.current.setLinvel(
      {
        x: velocity.x,
        y: current.y,
        z: velocity.z,
      },
      true
    );
  });
}
