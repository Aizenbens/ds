import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";
import * as THREE from "three";

import Camera from "./Camera.jsx";
import Controls from "./Controls.jsx";
import keys from "../input/Input.js";

export default function Player() {
  const body = useRef();

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

  return (
    <RigidBody
      ref={body}
      colliders={false}
      type="dynamic"
      position={[0, 3, 0]}
      enabledRotations={[false, false, false]}
    >
      <CapsuleCollider args={[0.5, 0.4]} />

      <Camera />
      <Controls />

      <mesh castShadow>
        <capsuleGeometry args={[0.4, 1, 8, 16]} />
        <meshStandardMaterial color="dodgerblue" />
      </mesh>
    </RigidBody>
  );
}
