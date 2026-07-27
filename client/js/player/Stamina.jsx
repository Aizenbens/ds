import { useGame } from "../core/GameManager.jsx";

export default function Stamina() {
  const { stamina, setStamina } = useGame();

  const drain = () => {
    setStamina((value) => Math.max(0, value - 0.5));
  };

  const recover = () => {
    setStamina((value) => Math.min(100, value + 0.25));
  };

  return {
    stamina,
    drain,
    recover,
  };
}
