import { scrapeMenu } from "@/lib/scrape";
import { createClient } from "redis";

export const dynamic = "force-dynamic"; // ensures this runs server-side

//umd time zone
const formatDate = (d) =>
  new Date(
    d.toLocaleString("en-US", { timeZone: "America/New_York" }),
  ).toLocaleDateString("en-US");

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const locationNum = searchParams.get("locationNum");
  const dtdate = searchParams.get("date") || formatDate(new Date());

  if (!locationNum || !dtdate) {
    return new Response(
      JSON.stringify({ error: "Missing locationNum or dtdate" }),
      { status: 400 },
    );
  }

  const redis = createClient({
    username: "default",
    password: process.env.REDIS_PSWD,
    socket: {
      host: process.env.REDIS_HOST,
      port: Number(process.env.REDIS_PORT),
    },
  });

  await redis.connect();
  const key = `menu:${locationNum}:${dtdate}`;

  try {
    const cached = await redis.get(key);
    if (cached) {
      await redis.quit();
      return new Response(cached, {
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await scrapeMenu(locationNum, dtdate);
    await redis.setEx(key, 86400 * 2, JSON.stringify(data));
    await redis.quit();

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    await redis.quit();
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
