"use server";

import { connectDB } from "@/lib/connectDB";
import { TransactionModel } from "@/models/transaction.model";
import { handleError } from "@/utils/handleError";
import Stripe from "stripe";
import { updateCredits } from "./user.actions";

export const checkoutCredits = async (transaction) => {
  try {
    // Stripe instance
    // amount (tnx.amount * 100)
    // stripe session
    // redirect user
    await connectDB();
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const amount = Number(transaction.amount) * 100;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: "usd",
            unit_amount: amount,
            product_data: {
              name: transaction.plan,
            },
          },
          quantity: 1,
        },
      ],
      metadata: {
        plan: transaction.plan,
        credits: transaction.credits,
        buyerId: transaction.buyerId,
      },
      mode: "payment",
      success_url: `${process.env.NEXT_SERVER_URL}/profile`,
      cancel_url: `${process.env.NEXT_SERVER_URL}/`,
    });

    return session.url;
  } catch (error) {
    console.log(error);

    handleError(error);
  }
};

export const createTransaction = async (transaction) => {
  try {
    await connectDB();
    //  create a new transaction
    // update credits
    const newTransaction = await TransactionModel.create({
      ...transaction,
      buyer: transaction.buyerId,
    });

    await updateCredits(transaction.buyerId, transaction.credits);

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
};
