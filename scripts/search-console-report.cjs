/**
 * Google Search Console Report
 *
 * Usage:
 *   node scripts/search-console-report.cjs                  # Last 28 days
 *   node scripts/search-console-report.cjs --days 7         # Last 7 days
 *   node scripts/search-console-report.cjs --days 90        # Last 90 days
 *
 * Requires: credentials.json in project root (Google Cloud service account)
 * The service account email must be added to Search Console as a user.
 */

const { google } = require("googleapis");
const path = require("path");
const fs = require("fs");

const SITE_URL = "sc-domain:digitaledgestudio.com";
const CREDENTIALS_PATH = path.join(__dirname, "..", "credentials.json");

// Parse --days argument
const daysArg = process.argv.indexOf("--days");
const DAYS = daysArg !== -1 && process.argv[daysArg + 1]
  ? parseInt(process.argv[daysArg + 1], 10)
  : 28;

function formatDate(date) {
  return date.toISOString().split("T")[0];
}

function getDateRange(days) {
  const end = new Date();
  end.setDate(end.getDate() - 1); // Yesterday (today's data isn't complete)
  const start = new Date();
  start.setDate(start.getDate() - days);
  return { startDate: formatDate(start), endDate: formatDate(end) };
}

async function main() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error("Error: credentials.json not found in project root.");
    console.error("Follow the setup guide to create a Google Cloud service account.");
    process.exit(1);
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ["https://www.googleapis.com/auth/webmasters.readonly"],
  });

  const searchconsole = google.searchconsole({ version: "v1", auth });
  const { startDate, endDate } = getDateRange(DAYS);

  console.log(`\n📊 Search Console Report — ${SITE_URL}`);
  console.log(`   Period: ${startDate} to ${endDate} (${DAYS} days)\n`);
  console.log("=".repeat(70));

  // 1. Overall performance
  try {
    const overall = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: { startDate, endDate, dimensions: [], rowLimit: 1 },
    });

    const row = overall.data.rows?.[0];
    if (row) {
      console.log("\n📈 OVERALL PERFORMANCE");
      console.log("-".repeat(40));
      console.log(`   Clicks:       ${row.clicks.toLocaleString()}`);
      console.log(`   Impressions:  ${row.impressions.toLocaleString()}`);
      console.log(`   CTR:          ${(row.ctr * 100).toFixed(2)}%`);
      console.log(`   Avg Position: ${row.position.toFixed(1)}`);
    }
  } catch (err) {
    console.error("Error fetching overall data:", err.message);
  }

  // 2. Top queries
  try {
    const queries = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["query"],
        rowLimit: 25,
        orderBy: [{ field: "clicks", sortOrder: "descending" }],
      },
    });

    if (queries.data.rows?.length) {
      console.log("\n\n🔍 TOP 25 QUERIES (by clicks)");
      console.log("-".repeat(70));
      console.log(
        "Query".padEnd(40) +
        "Clicks".padStart(8) +
        "Impr".padStart(8) +
        "CTR".padStart(8) +
        "Pos".padStart(6)
      );
      console.log("-".repeat(70));

      for (const row of queries.data.rows) {
        const query = row.keys[0].substring(0, 38).padEnd(40);
        const clicks = String(row.clicks).padStart(8);
        const impressions = String(row.impressions).padStart(8);
        const ctr = (row.ctr * 100).toFixed(1).padStart(7) + "%";
        const pos = row.position.toFixed(1).padStart(6);
        console.log(`${query}${clicks}${impressions}${ctr}${pos}`);
      }
    }
  } catch (err) {
    console.error("Error fetching queries:", err.message);
  }

  // 3. Top pages
  try {
    const pages = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["page"],
        rowLimit: 20,
        orderBy: [{ field: "clicks", sortOrder: "descending" }],
      },
    });

    if (pages.data.rows?.length) {
      console.log("\n\n📄 TOP 20 PAGES (by clicks)");
      console.log("-".repeat(80));
      console.log(
        "Page".padEnd(50) +
        "Clicks".padStart(8) +
        "Impr".padStart(8) +
        "CTR".padStart(8) +
        "Pos".padStart(6)
      );
      console.log("-".repeat(80));

      for (const row of pages.data.rows) {
        const url = row.keys[0].replace(SITE_URL, "").substring(0, 48).padEnd(50);
        const clicks = String(row.clicks).padStart(8);
        const impressions = String(row.impressions).padStart(8);
        const ctr = (row.ctr * 100).toFixed(1).padStart(7) + "%";
        const pos = row.position.toFixed(1).padStart(6);
        console.log(`${url}${clicks}${impressions}${ctr}${pos}`);
      }
    }
  } catch (err) {
    console.error("Error fetching pages:", err.message);
  }

  // 4. Top countries
  try {
    const countries = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["country"],
        rowLimit: 10,
        orderBy: [{ field: "clicks", sortOrder: "descending" }],
      },
    });

    if (countries.data.rows?.length) {
      console.log("\n\n🌍 TOP 10 COUNTRIES");
      console.log("-".repeat(50));
      console.log(
        "Country".padEnd(20) +
        "Clicks".padStart(8) +
        "Impr".padStart(8) +
        "CTR".padStart(8) +
        "Pos".padStart(6)
      );
      console.log("-".repeat(50));

      for (const row of countries.data.rows) {
        const country = row.keys[0].padEnd(20);
        const clicks = String(row.clicks).padStart(8);
        const impressions = String(row.impressions).padStart(8);
        const ctr = (row.ctr * 100).toFixed(1).padStart(7) + "%";
        const pos = row.position.toFixed(1).padStart(6);
        console.log(`${country}${clicks}${impressions}${ctr}${pos}`);
      }
    }
  } catch (err) {
    console.error("Error fetching countries:", err.message);
  }

  // 5. Device breakdown
  try {
    const devices = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["device"],
        rowLimit: 5,
        orderBy: [{ field: "clicks", sortOrder: "descending" }],
      },
    });

    if (devices.data.rows?.length) {
      console.log("\n\n📱 DEVICE BREAKDOWN");
      console.log("-".repeat(50));
      console.log(
        "Device".padEnd(20) +
        "Clicks".padStart(8) +
        "Impr".padStart(8) +
        "CTR".padStart(8) +
        "Pos".padStart(6)
      );
      console.log("-".repeat(50));

      for (const row of devices.data.rows) {
        const device = row.keys[0].padEnd(20);
        const clicks = String(row.clicks).padStart(8);
        const impressions = String(row.impressions).padStart(8);
        const ctr = (row.ctr * 100).toFixed(1).padStart(7) + "%";
        const pos = row.position.toFixed(1).padStart(6);
        console.log(`${device}${clicks}${impressions}${ctr}${pos}`);
      }
    }
  } catch (err) {
    console.error("Error fetching devices:", err.message);
  }

  // 6. Quick-win opportunities (high impressions, low CTR, positions 5-20)
  try {
    const opportunities = await searchconsole.searchanalytics.query({
      siteUrl: SITE_URL,
      requestBody: {
        startDate,
        endDate,
        dimensions: ["query"],
        rowLimit: 1000,
        orderBy: [{ field: "impressions", sortOrder: "descending" }],
      },
    });

    const quickWins = (opportunities.data.rows || [])
      .filter((r) => r.position >= 5 && r.position <= 20 && r.impressions >= 10)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 15);

    if (quickWins.length) {
      console.log("\n\n🎯 QUICK-WIN OPPORTUNITIES (Pos 5-20, high impressions, low CTR)");
      console.log("-".repeat(70));
      console.log(
        "Query".padEnd(40) +
        "Clicks".padStart(8) +
        "Impr".padStart(8) +
        "CTR".padStart(8) +
        "Pos".padStart(6)
      );
      console.log("-".repeat(70));

      for (const row of quickWins) {
        const query = row.keys[0].substring(0, 38).padEnd(40);
        const clicks = String(row.clicks).padStart(8);
        const impressions = String(row.impressions).padStart(8);
        const ctr = (row.ctr * 100).toFixed(1).padStart(7) + "%";
        const pos = row.position.toFixed(1).padStart(6);
        console.log(`${query}${clicks}${impressions}${ctr}${pos}`);
      }
      console.log("\n💡 These queries have visibility but low clicks. Optimising titles");
      console.log("   and meta descriptions for these could quickly increase traffic.");
    }
  } catch (err) {
    console.error("Error fetching opportunities:", err.message);
  }

  console.log("\n" + "=".repeat(70));
  console.log("Report complete.\n");
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
