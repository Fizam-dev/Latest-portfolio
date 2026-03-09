
import { chromium } from "playwright";

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on("console", msg => console.log("PAGE LOG:", msg.text()));
  page.on("pageerror", exception => console.log("PAGE ERROR:", exception));

  console.log("Navigating to https://fizam-dev.github.io/Latest-portfolio/...");
  const response = await page.goto("https://fizam-dev.github.io/Latest-portfolio/", { waitUntil: "networkidle" });
  
  console.log("Status code:", response.status());
  await browser.close();
})();
