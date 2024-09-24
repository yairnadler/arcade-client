import axios from "axios";
import { LOCALHOST } from "./constants.js";

export async function loadGamesFromServer(setGames) {
  try {
    const serverGames = await axios.get(LOCALHOST + "/games");
    setGames(serverGames.data);
  } catch (error) {
    console.log(error.message);
  }
}
