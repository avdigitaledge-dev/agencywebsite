/**
 * GA4 Analytics Report
 *
 * Usage:
 *   node scripts/ga4-report.cjs                  # Last 28 days
 *   node scripts/ga4-report.cjs --days 7         # Last 7 days
 *   node scripts/ga4-report.cjs --days 90        # Last 90 days
 *
 * Requires: credentials.json in project root (Google Cloud service account)
 * The service account email must be added as a Viewer in GA4 Property Access Management.
 * The Google Analytics Data API must be enabled in Google Cloud Console.
 */

const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const path = require("path");
const fs = require("fs");

const PROPERTY_ID = "526469538";
const CREDENTIALS_PATH = path.join(__dirname, "..", "credentials.json");

// Parse --days argument
const daysArg = process.argv.indexOf("--days");
const DAYS = daysArg !== -1 && process.argv[daysArg + 1]
  ? parseInt(process.argv[daysArg + 1], 10)
  : 28;

async function main() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error("Error: credentials.json not found in project root.");
    process.exit(1);
  }

  const client = new BetaAnalyticsDataClient({
    keyFilename: CREDENTIALS_PATH,
  });

  const dateRange = { startDate: `${DAYS}daysAgo`, endDate: "yesterday" };

  console.log(`\n📊 GA4 Analytics Report — Property ${PROPERTY_ID}`);
  console.log(`   Period: Last ${DAYS} days\n`);
  console.log("=".repeat(70));

  // 1. Overall summary
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      metrics: [
        { name: "activeUsers" },
        { name: "sessions" },
        { name: "screenPageViews" },
        { name: "bounceRate" },
        { name: "averageSessionDuration" },
        { name: "newUsers" },
        { name: "eventCount" },
      ],
    });

    const row = response.rows?.[0];
    if (row) {
      const m = row.metricValues;
      console.log("\n📈 OVERALL PERFORMANCE");
      console.log("-".repeat(40));
      console.log(`   Active Users:      ${parseInt(m[0].value).toLocaleString()}`);
      console.log(`   Sessions:          ${parseInt(m[1].value).toLocaleString()}`);
      console.log(`   Page Views:        ${parseInt(m[2].value).toLocaleString()}`);
      console.log(`   Bounce Rate:       ${(parseFloat(m[3].value) * 100).toFixed(1)}%`);
      console.log(`   Avg Session:       ${formatDuration(parseFloat(m[4].value))}`);
      console.log(`   New Users:         ${parseInt(m[5].value).toLocaleString()}`);
      console.log(`   Total Events:      ${parseInt(m[6].value).toLocaleString()}`);
    }
  } catch (err) {
    console.error("Error fetching overview:", err.message);
  }

  // 2. Top pages
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      dimensions: [{ name: "pagePath" }],
      metrics: [
        { name: "screenPageViews" },
        { name: "activeUsers" },
        { name: "bounceRate" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
      limit: 20,
    });

    if (response.rows?.length) {
      console.log("\n\n📄 TOP 20 PAGES (by page views)");
      console.log("-".repeat(80));
      console.log(
        "Page".padEnd(40) +
        "Views".padStart(8) +
        "Users".padStart(8) +
        "Bounce".padStart(8) +
        "Avg Time".padStart(10)
      );
      console.log("-".repeat(80));

      for (const row of response.rows) {
        const page = row.dimensionValues[0].value.substring(0, 38).padEnd(40);
        const views = parseInt(row.metricValues[0].value).toLocaleString().padStart(8);
        const users = parseInt(row.metricValues[1].value).toLocaleString().padStart(8);
        const bounce = (parseFloat(row.metricValues[2].value) * 100).toFixed(1).padStart(7) + "%";
        const duration = formatDuration(parseFloat(row.metricValues[3].value)).padStart(10);
        console.log(`${page}${views}${users}${bounce}${duration}`);
      }
    }
  } catch (err) {
    console.error("Error fetching pages:", err.message);
  }

  // 3. Traffic sources
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      dimensions: [{ name: "sessionSource" }, { name: "sessionMedium" }],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "bounceRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 15,
    });

    if (response.rows?.length) {
      console.log("\n\n🔗 TOP TRAFFIC SOURCES");
      console.log("-".repeat(70));
      console.log(
        "Source / Medium".padEnd(35) +
        "Sessions".padStart(10) +
        "Users".padStart(8) +
        "Bounce".padStart(8)
      );
      console.log("-".repeat(70));

      for (const row of response.rows) {
        const source = row.dimensionValues[0].value;
        const medium = row.dimensionValues[1].value;
        const label = `${source} / ${medium}`.substring(0, 33).padEnd(35);
        const sessions = parseInt(row.metricValues[0].value).toLocaleString().padStart(10);
        const users = parseInt(row.metricValues[1].value).toLocaleString().padStart(8);
        const bounce = (parseFloat(row.metricValues[2].value) * 100).toFixed(1).padStart(7) + "%";
        console.log(`${label}${sessions}${users}${bounce}`);
      }
    }
  } catch (err) {
    console.error("Error fetching sources:", err.message);
  }

  // 4. Device breakdown
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      dimensions: [{ name: "deviceCategory" }],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "bounceRate" },
        { name: "averageSessionDuration" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    });

    if (response.rows?.length) {
      console.log("\n\n📱 DEVICE BREAKDOWN");
      console.log("-".repeat(60));
      console.log(
        "Device".padEnd(20) +
        "Sessions".padStart(10) +
        "Users".padStart(8) +
        "Bounce".padStart(8) +
        "Avg Time".padStart(10)
      );
      console.log("-".repeat(60));

      for (const row of response.rows) {
        const device = row.dimensionValues[0].value.padEnd(20);
        const sessions = parseInt(row.metricValues[0].value).toLocaleString().padStart(10);
        const users = parseInt(row.metricValues[1].value).toLocaleString().padStart(8);
        const bounce = (parseFloat(row.metricValues[2].value) * 100).toFixed(1).padStart(7) + "%";
        const duration = formatDuration(parseFloat(row.metricValues[3].value)).padStart(10);
        console.log(`${device}${sessions}${users}${bounce}${duration}`);
      }
    }
  } catch (err) {
    console.error("Error fetching devices:", err.message);
  }

  // 5. Countries
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      dimensions: [{ name: "country" }],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "bounceRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 10,
    });

    if (response.rows?.length) {
      console.log("\n\n🌍 TOP 10 COUNTRIES");
      console.log("-".repeat(55));
      console.log(
        "Country".padEnd(25) +
        "Sessions".padStart(10) +
        "Users".padStart(8) +
        "Bounce".padStart(8)
      );
      console.log("-".repeat(55));

      for (const row of response.rows) {
        const country = row.dimensionValues[0].value.substring(0, 23).padEnd(25);
        const sessions = parseInt(row.metricValues[0].value).toLocaleString().padStart(10);
        const users = parseInt(row.metricValues[1].value).toLocaleString().padStart(8);
        const bounce = (parseFloat(row.metricValues[2].value) * 100).toFixed(1).padStart(7) + "%";
        console.log(`${country}${sessions}${users}${bounce}`);
      }
    }
  } catch (err) {
    console.error("Error fetching countries:", err.message);
  }

  // 6. Key events (conversions)
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      dimensions: [{ name: "eventName" }],
      metrics: [
        { name: "eventCount" },
        { name: "eventCountPerUser" },
      ],
      orderBys: [{ metric: { metricName: "eventCount" }, desc: true }],
      limit: 20,
    });

    if (response.rows?.length) {
      console.log("\n\n⚡ TOP EVENTS");
      console.log("-".repeat(55));
      console.log(
        "Event".padEnd(30) +
        "Count".padStart(10) +
        "Per User".padStart(10)
      );
      console.log("-".repeat(55));

      for (const row of response.rows) {
        const event = row.dimensionValues[0].value.substring(0, 28).padEnd(30);
        const count = parseInt(row.metricValues[0].value).toLocaleString().padStart(10);
        const perUser = parseFloat(row.metricValues[1].value).toFixed(2).padStart(10);
        console.log(`${event}${count}${perUser}`);
      }
    }
  } catch (err) {
    console.error("Error fetching events:", err.message);
  }

  // 7. Landing pages
  try {
    const [response] = await client.runReport({
      property: `properties/${PROPERTY_ID}`,
      dateRanges: [dateRange],
      dimensions: [{ name: "landingPage" }],
      metrics: [
        { name: "sessions" },
        { name: "activeUsers" },
        { name: "bounceRate" },
      ],
      orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
      limit: 15,
    });

    if (response.rows?.length) {
      console.log("\n\n🚪 TOP LANDING PAGES");
      console.log("-".repeat(70));
      console.log(
        "Landing Page".padEnd(40) +
        "Sessions".padStart(10) +
        "Users".padStart(8) +
        "Bounce".padStart(8)
      );
      console.log("-".repeat(70));

      for (const row of response.rows) {
        const page = row.dimensionValues[0].value.substring(0, 38).padEnd(40);
        const sessions = parseInt(row.metricValues[0].value).toLocaleString().padStart(10);
        const users = parseInt(row.metricValues[1].value).toLocaleString().padStart(8);
        const bounce = (parseFloat(row.metricValues[2].value) * 100).toFixed(1).padStart(7) + "%";
        console.log(`${page}${sessions}${users}${bounce}`);
      }
    }
  } catch (err) {
    console.error("Error fetching landing pages:", err.message);
  }

  console.log("\n" + "=".repeat(70));
  console.log("Report complete.\n");
}

function formatDuration(seconds) {
  if (!seconds || isNaN(seconds)) return "0:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

main().catch((err) => {
  console.error("Fatal error:", err.message);
  process.exit(1);
});
