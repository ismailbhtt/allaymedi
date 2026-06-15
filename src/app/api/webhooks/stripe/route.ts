import { NextResponse } from "next/server";
import type Stripe from "stripe";

import { getStripeOrThrow } from "@/lib/stripe";
import { sendOrderNotification } from "@/lib/email/send";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let stripe;
  try {
    stripe = getStripeOrThrow();
  } catch {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const signature = request.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!signature || !secret) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  const body = await request.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, secret);
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid signature" },
      { status: 400 }
    );
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const lineItems = await stripe.checkout.sessions.listLineItems(session.id, {
      expand: ["data.price.product"],
    });
    await sendOrderNotification({
      sessionId: session.id,
      customerEmail: session.customer_details?.email ?? null,
      amountTotalCents: session.amount_total ?? 0,
      shippingName:
        session.collected_information?.shipping_details?.name ??
        session.customer_details?.name ??
        null,
      items: lineItems.data.map((item) => ({
        name: item.description ?? "(unnamed)",
        quantity: item.quantity ?? 1,
        amountCents: item.amount_total ?? 0,
      })),
    });
  }

  return NextResponse.json({ received: true });
}
