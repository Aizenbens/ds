import React from "react";

export default function StaminaBar({ value }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "320px",
        height: "22px",
        background: "#222",
        border: "2px solid white",
        borderRadius: "10px",
        overflow: "hidden",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "#32CD32",
          transition: "width 0.08s linear",
        }}
      />
    </div>
  );
}
