import React from "react";
import { Physics as RapierPhysics } from "@react-three/rapier";

export default function Physics({ children }) {
  return (
    <RapierPhysics gravity={[0, -9.81, 0]}>
      {children}
    </RapierPhysics>
  );
}
