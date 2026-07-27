import { useRef } from "react";

export default function Stamina() {
  const stamina = useRef(100);

  const drain = () => {
    stamina.current = Math.max(0, stamina.current - 0.5);
  };

  const recover = () => {
    stamina.current = Math.min(100, stamina.current + 0.25);
  };

  return {
    stamina,
    drain,
    recover,
  };
}
