import React from "react";

export default function HUD() {
  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        width: "300px",
        height: "30px",
        background: "#222",
        border: "2px solid white",
        zIndex: 999999,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "lime",
        }}
      />
    </div>
  );
}
