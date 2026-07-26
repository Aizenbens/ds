import React from "react";
import Ground from "./Ground";

export default function World() {
  return (
    <>
      <Ground />

      {/* مكعب تجريبي */}
      <mesh position={[0, 1, 0]} castShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  );
}
