import React from "react";

export default function HUD() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        background: "red",
        color: "white",
        padding: "20px",
        fontSize: "30px",
        zIndex: 999999,
      }}
    >
      HUD WORKING
    </div>
  );
}
