import React, { useState, useEffect } from "react";
import StaminaBar from "./StaminaBar.jsx";

export default function HUD() {
  const [stamina, setStamina] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.playerStamina !== undefined) {
        setStamina(window.playerStamina);
      }
    }, 16);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <StaminaBar value={stamina} />
    </>
  );
}
