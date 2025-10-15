import { scrapeMenu } from "@/lib/scrape";
import { createClient } from "redis";

export const dynamic = "force-dynamic";

export async function GET() {
  const redis = createClient({
    username: "default",
    password: process.env.REDIS_PSWD,
    socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  });

  await redis.connect();

  const locations = [16, 19, 51];
  const today = new Date();
  const daysToFetch = 7;

  try {
    for (const loc of locations) {
      for (let i = 0; i < daysToFetch; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        const dtdate = date.toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        });

        const data = await scrapeMenu(loc, dtdate);
        const key = `menu:${loc}:${dtdate}`;
        await redis.setEx(key, 86400 * 2, JSON.stringify(data));
        console.log(`Cached ${key}`);
      }
    }

    await redis.quit();
    return new Response(JSON.stringify({ status: "ok" }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    await redis.quit();
    return new Response(JSON.stringify({ error: "Prefetch failed" }), {
      status: 500,
    });
  }
}
