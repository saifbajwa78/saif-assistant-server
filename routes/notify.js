import express from "express";
import { sendTelegram } from "../services/telegram.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message manquant" });
  }

  await sendTelegram(message);

  res.json({ success: true });
});

export default router;
