import React from "react";

import { GameProvider } from "./js/core/GameManager.jsx";

import Scene from "./js/scene/Scene.jsx";
import HUD from "./js/ui/HUD.jsx";

export default function App() {
  return (
    <GameProvider>
      <Scene />
      <HUD />
    </GameProvider>
  );
}
