import axios from "axios";
import { LOCALHOST } from "./constants.js";

export async function loadGamesFromServer() {
  try {
    const serverGames = await axios.get("https://arcade-server-rstd.onrender.com" + "/games");   
    return serverGames.data;
  } catch (error) {
    console.log(error.message);
  }
}
