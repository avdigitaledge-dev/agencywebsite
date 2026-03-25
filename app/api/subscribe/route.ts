import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, firstName } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const API_TOKEN = process.env.MAILERLITE_API_TOKEN;
    const GROUP_ID = process.env.MAILERLITE_GROUP_ID;

    if (!API_TOKEN) {
      return NextResponse.json({ error: "MailerLite not configured" }, { status: 500 });
    }

    const body: Record<string, unknown> = {
      email,
      fields: {
        name: firstName || "",
      },
    };

    if (GROUP_ID) {
      body.groups = [GROUP_ID];
    }

    const res = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    // 200 = new subscriber, 201 = created, 422 = already exists — all success
    if (res.ok || res.status === 422) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: data.message || "Subscribe failed" }, { status: 400 });
  } catch {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
