import { useEffect } from "react";
import { loadGamesFromServer } from "./utils.js";

export async function initGames(setGames){
    useEffect(() => {
        loadGamesFromServer(setGames);
    }, []);
}