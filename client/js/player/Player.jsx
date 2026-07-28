import React, { useRef } from "react";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";

import Camera from "./Camera.jsx";
import CameraController from "./CameraController.jsx";
import Controls from "./Controls.jsx";
import HeadBob from "./HeadBob.jsx";

import PlayerController from "./PlayerController.jsx";

export default function Player() {
  const body = useRef();

  PlayerController(body);

  return (
    <>
      <Camera />
      <CameraController />
      <HeadBob />
      <Controls />

      <RigidBody
        ref={body}
        colliders={false}
        type="dynamic"
        position={[0, 3, 0]}
        enabledRotations={[false, false, false]}
        canSleep={false}
        mass={1}
        friction={1}
      >
        <CapsuleCollider args={[0.5, 0.4]} />

        {/* منظور أول، لذلك لا نرسم جسم اللاعب */}
      </RigidBody>
    </>
  );
}
