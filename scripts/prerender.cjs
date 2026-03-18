/**
 * Prerender Script
 *
 * Launches a local server from dist/, visits each route with Puppeteer,
 * and saves the fully-rendered HTML (including meta tags, schema, content).
 *
 * Run automatically via `npm run build` (postbuild script).
 */

const http = require("http");
const fs = require("fs");
const path = require("path");

const IS_CI = process.env.VERCEL || process.env.CI;

const DIST = path.join(__dirname, "..", "dist");
const PORT = 45678;

const ROUTES = [
  "/",
  "/services",
  "/services/aeo-geo",
  "/pricing",
  "/about",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
  "/portfolio",
  "/free-website-review",
  "/checklist-thank-you",
  "/web-design-wollongong",
  "/web-design-illawarra",
  "/web-design-sydney",
  "/web-design-tradies",
  "/web-design-healthcare",
  "/vs/wix",
  "/vs/squarespace",
  "/vs/cheap-web-designers",
  "/portfolio/grovespark-electrical-wollongong",
  "/portfolio/precision-plumbing-illawarra",
  "/portfolio/coastal-physio-wollongong",
  "/portfolio/allcastle-homes-sydney",
  "/portfolio/nbg-landscapes-shellharbour",
  "/portfolio/bright-clean-services",
  "/blog/website-cost-wollongong-2025",
  "/blog/local-seo-wollongong-guide",
  "/blog/shopify-vs-wordpress-australia",
  "/blog/google-business-profile-optimisation",
  "/blog/web-design-tradies-guide",
  "/blog/hidden-costs-cheap-web-design",
  "/blog/aeo-geo-future-of-marketing",
  "/blog/category/web-design",
  "/blog/category/seo",
  "/blog/category/digital-marketing",
];

// Simple static file server that falls back to index.html for SPA routes
function createServer() {
  const mimeTypes = {
    ".html": "text/html",
    ".js": "application/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
    ".ico": "image/x-icon",
    ".woff": "font/woff",
    ".woff2": "font/woff2",
  };

  return http.createServer((req, res) => {
    let filePath = path.join(DIST, req.url === "/" ? "index.html" : req.url);

    // If file doesn't exist, serve index.html (SPA fallback)
    if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
      filePath = path.join(DIST, "index.html");
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || "application/octet-stream";

    try {
      const content = fs.readFileSync(filePath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content);
    } catch {
      res.writeHead(404);
      res.end("Not found");
    }
  });
}

async function prerender() {
  const server = createServer();
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`\n🔧 Prerender server running on port ${PORT}`);

  let browser;
  if (IS_CI) {
    // On Vercel/CI: use puppeteer-core with @sparticuz/chromium
    const chromium = require("@sparticuz/chromium");
    const puppeteerCore = require("puppeteer-core");
    browser = await puppeteerCore.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  } else {
    // Locally: use full puppeteer with bundled Chromium
    const puppeteer = require("puppeteer");
    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
  }

  let success = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const page = await browser.newPage();

      // Block third-party requests (analytics, GTM, fonts, etc.)
      await page.setRequestInterception(true);
      page.on("request", (req) => {
        const url = req.url();
        if (url.startsWith(`http://localhost:${PORT}`)) {
          req.continue();
        } else {
          req.abort();
        }
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: "networkidle0",
        timeout: 30000,
      });

      // Wait a bit extra for useEffect meta tags and lazy components
      await page.waitForFunction(
        () => document.getElementById("root")?.children.length > 0,
        { timeout: 10000 }
      );

      // Wait for Framer Motion animations to complete
      await new Promise((resolve) => setTimeout(resolve, 2000));

      let html = await page.content();
      await page.close();

      // Strip Framer Motion inline styles that hide content (opacity: 0, transforms)
      // These cause Google to see blank pages since it reads the static HTML
      html = html.replace(/\s*style="[^"]*opacity:\s*0[^"]*"/g, "");

      // Determine output path
      const outDir =
        route === "/"
          ? DIST
          : path.join(DIST, ...route.split("/").filter(Boolean));

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), html);

      success++;
      console.log(`  ✅ ${route}`);
    } catch (err) {
      failed++;
      console.error(`  ❌ ${route}: ${err.message}`);
    }
  }

  await browser.close();
  server.close();

  console.log(
    `\n📊 Prerendered ${success}/${ROUTES.length} pages (${failed} failed)\n`
  );

  if (failed > 0) process.exit(1);
}

prerender().catch((err) => {
  console.error("Prerender failed:", err.message);
  process.exit(1);
});
