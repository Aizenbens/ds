import React from "react";
import { Sky as DreiSky } from "@react-three/drei";

export default function Sky() {
  return (
    <DreiSky
      distance={450000}
      sunPosition={[10, 20, 10]}
      inclination={0.5}
      azimuth={0.25}
    />
  );
}
