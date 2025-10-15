// server.js
import express from "express";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { scrapeMenu } from "./scrape.js";
import { createClient } from "redis";
import cron from "node-cron";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// --- Redis setup ---
const redis = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
});

redis.on("error", (err) => console.error("Redis error:", err));
await redis.connect();

// --- Helper: cache key generator ---
function cacheKey(locationNum, dtdate) {
  return `menu:${locationNum}:${dtdate}`;
}

// --- API endpoint ---
app.get("/menu", async (req, res) => {
  const { locationNum, dtdate } = req.query;

  if (!locationNum || !dtdate)
    return res.status(400).json({ error: "Missing locationNum or dtdate" });

  const key = cacheKey(locationNum, dtdate);

  try {
    // Try Redis cache first
    const cached = await redis.get(key);
    if (cached) {
      console.log("✅ Serving from Redis cache");
      return res.json(JSON.parse(cached));
    }

    // Otherwise, scrape
    console.log("🕷️ Scraping fresh data...");
    const data = await scrapeMenu(locationNum, dtdate);

    // Cache in Redis (expires in 1 day = 86400 seconds)
    await redis.setEx(key, 86400, JSON.stringify(data));

    res.json(data);
  } catch (err) {
    console.error("Error fetching menu:", err);
    res.status(500).json({ error: "Failed to fetch menu" });
  }
});

// --- CRON job: refresh daily menus at 2 AM ---
cron.schedule("0 2 * * *", async () => {
  console.log("⏰ Cron job started: refreshing daily menus...");

  const locations = [16, 19, 51]; // all locations you care about
  const today = new Date();
  const daysToFetch = 7;

  for (const loc of locations) {
    for (let i = 0; i < daysToFetch; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dtdate = date.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
      });

      try {
        const data = await scrapeMenu(loc, dtdate);
        const key = `menu:${loc}:${dtdate}`;
        await redis.setEx(key, 86400 * 2, JSON.stringify(data));
        console.log(`✅ Cached ${key}`);
      } catch (err) {
        console.error(`⚠️ Failed for ${loc} ${dtdate}:`, err);
      }
    }
  }

  console.log("✅ Daily refresh complete");
});

// --- Start server ---
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`),
);
