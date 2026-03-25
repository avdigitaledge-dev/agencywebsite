import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!API_KEY || !AUDIENCE_ID) {
      return NextResponse.json({ error: "Mailchimp not configured" }, { status: 500 });
    }

    const DC = API_KEY.split("-")[1]; // "us20"

    const res = await fetch(
      `https://${DC}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName || "",
          },
        }),
      }
    );

    const data = await res.json();

    // 400 = already subscribed — treat as success
    if (res.ok || data.title === "Member Exists") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: data.detail || "Subscribe failed" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
