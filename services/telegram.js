import axios from "axios";
import { TELEGRAM_TOKEN, TELEGRAM_USER_ID } from "../config.js";

export async function sendTelegram(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  await axios.post(url, {
    chat_id: TELEGRAM_USER_ID,
    text: message
  });
}
