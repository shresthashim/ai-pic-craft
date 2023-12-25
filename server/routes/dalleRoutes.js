import express from "express";
import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (e) {
    console.log(e);
  }
});

export default router;