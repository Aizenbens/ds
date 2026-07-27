import React from "react";

export default function StaminaBar({ value }) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "300px",
        height: "20px",
        background: "#222",
        border: "2px solid white",
        borderRadius: "8px",
        overflow: "hidden",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          width: `${value}%`,
          height: "100%",
          background: "#32CD32",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
