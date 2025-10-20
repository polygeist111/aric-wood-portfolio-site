export const runtime = "edge";

function isValidEmail(e: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
}

export async function POST(req: Request) {
  const form = await req.formData();
  const honey = String(form.get("_honeypot") || "");
  if (honey) return new Response("OK", { status: 200 });

  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const type = String(form.get("type") || "general");
  const event = String(form.get("event") || "");
  const date = String(form.get("date") || "");
  const audience = String(form.get("audience") || "");
  const message = String(form.get("message") || "");

  if (!name || !isValidEmail(email) || !message) {
    return new Response("Invalid submission", { status: 400 });
  }

  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Type: ${type}`,
    event ? `Event: ${event}` : null,
    date ? `Date: ${date}` : null,
    audience ? `Audience: ${audience}` : null,
    "",
    message
  ].filter(Boolean).join("\n");

  const mcRes = await fetch("https://api.mailchannels.net/tx/v1/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: "aric.wood@gmail.com" }] }],
      from: { email: "website@aricwood.com", name: "aricwood.com" },
      subject: `New contact form: ${type}`,
      content: [{ type: "text/plain", value: body }],
    }),
  });

  if (!mcRes.ok) {
    return new Response("Failed to send", { status: 502 });
  }
  return new Response("OK", { status: 200 });
}
