import React from "react";
import { useGame } from "../core/GameManager.jsx";
import StaminaBar from "./StaminaBar.jsx";

export default function HUD() {
  const { stamina } = useGame();

  return (
    <>
      <StaminaBar value={stamina} />
    </>
  );
}
