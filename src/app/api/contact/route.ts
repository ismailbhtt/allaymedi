import { NextResponse } from "next/server";
import { z } from "zod";

import { sendContactNotification } from "@/lib/email/send";

const schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  phone: z.string().max(40).optional(),
  message: z.string().min(1).max(4000),
});

export async function POST(request: Request) {
  const data = await request.formData();
  const parsed = schema.safeParse(Object.fromEntries(data));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }
  try {
    await sendContactNotification(parsed.data);
  } catch (err) {
    console.error("[contact] email failed", err);
  }
  return NextResponse.redirect(new URL("/contact?sent=1", request.url), 303);
}
