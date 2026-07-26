import React from "react";

const platforms = [
  { position: [0, 0.5, 0], size: [4, 1, 4] },
  { position: [6, 1.5, -2], size: [3, 1, 3] },
  { position: [12, 3, -5], size: [3, 1, 3] },
  { position: [18, 5, -8], size: [3, 1, 3] },
  { position: [25, 7, -12], size: [4, 1, 4] },
];

export default function Platforms() {
  return (
    <>
      {platforms.map((platform, index) => (
        <mesh
          key={index}
          position={platform.position}
          castShadow
          receiveShadow
        >
          <boxGeometry args={platform.size} />
          <meshStandardMaterial color="#808080" />
        </mesh>
      ))}
    </>
  );
}
