import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";
dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});


router.route("/").get((req, res) => {
  res.status(200).json({ message: "Hello from DALL-E!" });
});

export default router;  