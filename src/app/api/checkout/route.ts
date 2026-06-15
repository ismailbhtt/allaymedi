import { NextResponse } from "next/server";
import { z } from "zod";

import { getStripeOrThrow } from "@/lib/stripe";
import { SITE } from "@/lib/site";

const bodySchema = z.object({
  items: z
    .array(
      z.object({
        productId: z.string(),
        name: z.string(),
        priceCents: z.number().int().nonnegative(),
        stripePriceId: z.string().optional(),
        quantity: z.number().int().min(1).max(20),
      })
    )
    .min(1),
});

export async function POST(request: Request) {
  let parsed;
  try {
    const json = await request.json();
    parsed = bodySchema.parse(json);
  } catch {
    return NextResponse.json({ error: "Invalid cart" }, { status: 400 });
  }

  let stripe;
  try {
    stripe = getStripeOrThrow();
  } catch {
    return NextResponse.json(
      { error: "Checkout is not available right now. Please call us to place your order." },
      { status: 503 }
    );
  }

  const origin = request.headers.get("origin") ?? SITE.url;

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: parsed.items.map((item) => ({
      quantity: item.quantity,
      price_data: item.stripePriceId
        ? undefined
        : {
            currency: "usd",
            unit_amount: item.priceCents,
            product_data: { name: item.name, metadata: { productId: item.productId } },
          },
      price: item.stripePriceId,
    })),
    allow_promotion_codes: true,
    automatic_tax: { enabled: true },
    shipping_address_collection: { allowed_countries: ["US"] },
    success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/cart`,
    metadata: {
      source: "web",
      productIds: parsed.items.map((i) => i.productId).join(","),
    },
  });

  return NextResponse.json({ url: session.url });
}
