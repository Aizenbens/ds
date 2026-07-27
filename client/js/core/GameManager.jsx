import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [health, setHealth] = useState(100);
  const [stamina, setStamina] = useState(100);
  const [coins, setCoins] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <GameContext.Provider
      value={{
        health,
        setHealth,

        stamina,
        setStamina,

        coins,
        setCoins,

        level,
        setLevel,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  return useContext(GameContext);
}
