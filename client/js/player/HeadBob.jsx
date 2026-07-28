import React, { useRef } from "react";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";

import Camera from "./Camera.jsx";
import CameraController from "./CameraController.jsx";
import Controls from "./Controls.jsx";
import HeadBob from "./HeadBob.jsx";

import PlayerController from "./PlayerController.jsx";

export default function Player() {
  const body = useRef();

  // تشغيل أنظمة اللاعب
  PlayerController(body);

  return (
    <>
      {/* إعداد الكاميرا */}
      <Camera />

      {/* تغيير الـ FOV */}
      <CameraController />

      {/* اهتزاز الكاميرا أثناء الحركة */}
      <HeadBob />

      {/* تحكم الماوس */}
      <Controls />

      {/* جسم اللاعب */}
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
        {/* مصادم اللاعب */}
        <CapsuleCollider args={[0.5, 0.4]} />

        {/* جسم مؤقت للاعب */}
        <mesh castShadow>
          <capsuleGeometry args={[0.4, 1, 8, 16]} />
          <meshStandardMaterial color="dodgerblue" />
        </mesh>
      </RigidBody>
    </>
  );
}
