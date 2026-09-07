import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(320),
  details: z.string().max(2000).optional(),
});

type DemoRequest = z.infer<typeof schema>;

async function notifySlack(data: DemoRequest) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: `New demo request — ${data.name} <${data.email}>${data.details ? `\n> ${data.details}` : ""}`,
      }),
    });
  } catch (err) {
    console.error("[demo-request] Slack notification failed", err);
  }
}

async function saveToSheet(data: DemoRequest) {
  const sheetWebhookUrl = process.env.SHEET_WEBHOOK_URL;
  if (!sheetWebhookUrl) return;

  try {
    await fetch(sheetWebhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        details: data.details ?? "",
        submittedAt: new Date().toISOString(),
      }),
    });
  } catch (err) {
    console.error("[demo-request] Sheet logging failed", err);
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "Invalid submission." }, { status: 400 });
  }

  console.log("[demo-request]", parsed.data);

  // Both are no-ops if their env var isn't configured — safe to leave either unset.
  await Promise.all([notifySlack(parsed.data), saveToSheet(parsed.data)]);

  return NextResponse.json({ ok: true });
}
