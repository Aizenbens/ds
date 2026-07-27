import React, { useRef } from "react";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";

import Camera from "./Camera.jsx";
import Controls from "./Controls.jsx";
import PlayerController from "./PlayerController.jsx";

export default function Player() {
  const body = useRef();

  PlayerController(body);

  return (
    <RigidBody
      ref={body}
      colliders={false}
      type="dynamic"
      position={[0, 3, 0]}
      enabledRotations={[false, false, false]}
      mass={1}
      friction={1}
      restitution={0}
      canSleep={false}
    >
      <CapsuleCollider args={[0.5, 0.4]} />

      <Camera />
      <Controls />

      {/* سنحذف هذا الجسم لاحقًا عندما نضيف نموذج اللاعب */}
      <mesh castShadow>
        <capsuleGeometry args={[0.4, 1, 8, 16]} />
        <meshStandardMaterial color="dodgerblue" />
      </mesh>
    </RigidBody>
  );
}
