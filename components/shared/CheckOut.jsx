"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { checkoutCredits } from "@/actions/tranasction.action";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "../ui/button";

const Checkout = ({ plan, amount, credits, buyerId }) => {
  const router = useRouter();
  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }, []);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast("Order placed!", {
        description: "You will receive an email confirmation",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast("Order canceled!", {
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, []);

  const onCheckout = async () => {
    try {
      const transaction = {
        plan,
        amount,
        credits,
        buyerId,
      };

      const sessionUrl = await checkoutCredits(transaction);
      router.push(sessionUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Button onClick={onCheckout} variant="gradient" size="dgLG" type="submit">
        Buy Credit
      </Button>
    </section>
  );
};

export default Checkout;
