import { useRef } from "react";
import Settings from "./Settings.js";

export default function Stamina() {
  const stamina = useRef(Settings.maxStamina);

  function drain(delta = 1 / 60) {
    stamina.current = Math.max(
      0,
      stamina.current - Settings.staminaDrain * delta
    );

    window.playerStamina =
      (stamina.current / Settings.maxStamina) * 100;
  }

  function recover(delta = 1 / 60) {
    stamina.current = Math.min(
      Settings.maxStamina,
      stamina.current + Settings.staminaRecover * delta
    );

    window.playerStamina =
      (stamina.current / Settings.maxStamina) * 100;
  }

  if (window.playerStamina === undefined) {
    window.playerStamina = 100;
  }

  return {
    get stamina() {
      return stamina.current;
    },
    drain,
    recover,
  };
}
