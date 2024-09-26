import { useEffect } from "react";
import { loadGamesFromServer } from "./utils.js";

export async function initGames(setGames) {
  useEffect(() => {
    (async () => {
      const gamesData = await loadGamesFromServer();
      setGames(gamesData);
    })();
  }, []);
}
