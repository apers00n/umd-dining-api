import fetch from "node-fetch";
import * as cheerio from "cheerio";
import fs from "fs";

const url = "https://nutrition.umd.edu/?locationNum=16&dtdate=10/11/2025";

async function scrape() {
  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const panes = $(".nav-item .nav-link");
    const data = {};

    panes.each((_, pane) => {
      const paneTitle = $(pane).text().trim() || "Unknown";
      const href = $(pane).attr("href"); // e.g. "#pane-1"
      if (!href) return;

      const paneId = href.replace("#", ""); // "pane-1"
      const cards = $(`#${paneId} .card`);
      data[paneTitle] = {};

      cards.each((_, card) => {
        const title = $(card).find(".card-title").text().trim() || "Unknown";
        const menuItems = $(card).find(".menu-item-row");

        data[paneTitle][title] = [];

        menuItems.each((_, row) => {
          const linkEl = $(row).find("a.menu-item-name");
          if (!linkEl.length) return;

          const name = linkEl.text().trim();
          const link = linkEl.attr("href");

          const tags = [];
          $(row)
            .find(".nutri-icon")
            .each((_, img) => {
              const tag =
                $(img).attr("title")?.trim() || $(img).attr("alt")?.trim();
              if (tag) tags.push(tag);
            });

          data[paneTitle][title].push({
            [name]: { link, tags },
          });
        });
      });
    });

    fs.writeFileSync("menu.json", JSON.stringify(data, null, 2));
    console.log("✅ menu.json saved!");
  } catch (err) {
    console.error("Error scraping:", err);
  }
}

scrape();
