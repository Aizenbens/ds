import React, { useRef } from "react";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";

import Camera from "./Camera.jsx";
import Controls from "./Controls.jsx";
import Movement from "./Movement.jsx";
import Jump from "./Jump.jsx";

export default function Player() {
  const body = useRef();

  // نظام الحركة
  Movement(body);

  // نظام القفز
  Jump(body);

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
      {/* Collider اللاعب */}
      <CapsuleCollider args={[0.5, 0.4]} />

      {/* كاميرا اللاعب */}
      <Camera />

      {/* تحريك الماوس */}
      <Controls />

      {/* جسم مؤقت للتجربة */}
      <mesh castShadow>
        <capsuleGeometry args={[0.4, 1, 8, 16]} />
        <meshStandardMaterial color="dodgerblue" />
      </mesh>
    </RigidBody>
  );
}
