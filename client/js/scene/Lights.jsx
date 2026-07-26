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
        shadow-mapSize={[2048, 2048]}
      />
    </>
  );
}
