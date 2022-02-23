import express from "express";
import validUrl from "valid-url";
import { nanoid } from "nanoid";
import { postUrl, findUrl } from "./redis-client.js";

const router = express.Router();

router.post("/shorturl", async (req, res) => {
  try {
    const { url } = req.body;

    if (validUrl.isUri(url)) {
      const findShortUrl = await findUrl(url);

      if (findShortUrl) {
        res.json({
          original_url: url,
          short_url: findShortUrl,
        });
      } else {
        const shortUrl = nanoid();

        await postUrl(url, shortUrl);

        res.json({
          original_url: url,
          short_url: shortUrl,
        });
      }
    } else {
      res.json({ error: "invalid url" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Server error..");
  }
});

router.get("/shorturl/:shorturl", async (req, res) => {
  try {
    const shorturl = req.params.shorturl;

    const url = await findUrl(shorturl);
    res.redirect(url);
  } catch (error) {
    console.log(error);
    res.status(500).json("Server error..");
  }
});

export { router };
