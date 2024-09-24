import React, { useState } from "react";
import HorizontalScroller from "./HorizontalScroller";
import { initGames } from "../utils/hooks.js";

function App() {
  const [games, setGames] = useState([]);

  initGames(setGames);
  
  return (
    <div>
      <div className="app-container">
        <h1>ARCADE</h1>
      </div>
      <HorizontalScroller games={games}/>
    </div>
  );
}

export default App;
