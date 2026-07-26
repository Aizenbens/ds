import React from "react";

export default function Lights() {
  return (
    <>
      {/* إضاءة عامة */}
      <ambientLight intensity={0.6} />

      {/* ضوء الشمس */}
      <directionalLight
        position={[10, 20, 10]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
    </>
  );
}
