import { NextApiRequest, NextApiResponse } from "next";
import { StoreProduct } from "../../../type";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { items, email } = req.body;

  const modifiedItems = items.map((item: StoreProduct) => ({
    quantity: item.quantity,
    price_data: {
      currency: "pkr",
      unit_amount: item.price * 10 * 100,
      product_data: {
        name: item.title,
        description: item.description,
        images: [getFullImageUrl(item.image)],
      },
    },
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["PK", "US", "OM", "CA", "GB"],
      },
      line_items: modifiedItems,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success`,
      cancel_url: `${process.env.NEXTAUTH_URL}/checkout`,
      metadata: {
        email,
        images: JSON.stringify(
          items.map((item: any) => getFullImageUrl(item.image))
        ),
      },
    });

    res.status(200).json({
      id: session.id,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    res.status(500).json({ error: "Error creating Stripe checkout session" });
  }
}

function getFullImageUrl(imagePath: string): string {
  return `${process.env.NEXTAUTH_URL}${imagePath}`;
}
