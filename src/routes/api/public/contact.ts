import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().min(3).max(254).email("A valid email is required"),
  message: z.string().trim().min(1, "Message is required").max(2000),
  website: z.string().max(0).optional(),
});

type RateEntry = { count: number; firstSeen: number };

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const attempts = new Map<string, RateEntry>();

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now - entry.firstSeen > WINDOW_MS) {
    attempts.set(key, { count: 1, firstSeen: now });
    return false;
  }

  entry.count += 1;
  if (attempts.size > 500) {
    for (const [stored, storedEntry] of attempts) {
      if (now - storedEntry.firstSeen > WINDOW_MS) attempts.delete(stored);
    }
  }
  return entry.count > MAX_PER_WINDOW;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
    },
  });
}

async function POST({ request }: { request: Request }): Promise<Response> {
  const ip =
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return json(
      { error: "Too many messages from here. Please try again in a few minutes." },
      429,
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return json({ error: parsed.error.issues[0]?.message ?? "Invalid submission." }, 400);
  }

  const { name, email, message } = parsed.data;

  try {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("contact_messages").insert({ name, email, message });

    if (error) {
      console.error("[contact] insert failed", error.message);
      return json({ error: "Message couldn't be saved. Please email me directly." }, 500);
    }
  } catch (error) {
    console.error("[contact] backend unavailable", error);
    return json({ error: "Message couldn't be saved. Please email me directly." }, 500);
  }

  return json({ ok: true });
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: { POST },
  },
});
