import React from "react";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";

export default function Player() {
  return (
    <RigidBody
      colliders={false}
      type="dynamic"
      position={[0, 3, 0]}
      enabledRotations={[false, false, false]}
      mass={1}
    >
      <CapsuleCollider args={[0.5, 0.4]} />

      {/* جسم اللاعب (للتجربة فقط، سنحذفه لاحقًا) */}
      <mesh castShadow>
        <capsuleGeometry args={[0.4, 1, 8, 16]} />
        <meshStandardMaterial color="dodgerblue" />
      </mesh>
    </RigidBody>
  );
}
