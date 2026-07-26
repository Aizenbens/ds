import React from "react";
import { RigidBody } from "@react-three/rapier";

import Ground from "./Ground";
import Platforms from "./Platforms";

export default function World() {
  return (
    <>
      {/* الأرض */}
      <RigidBody type="fixed" colliders="trimesh">
        <Ground />
      </RigidBody>

      {/* المنصات */}
      <RigidBody type="fixed">
        <Platforms />
      </RigidBody>
    </>
  );
}
