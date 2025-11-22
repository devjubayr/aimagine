import { createUser, deleteUser, updateUser } from "@/actions/user.actions";
import { verifyWebhook } from "@clerk/nextjs/webhooks";
import { NextResponse } from "next/server";

export async function POST(req) {
  const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SIGNING_SECRET;

  if (!WEBHOOK_SECRET) {
    return new Response(
      "Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local",
      { status: 500 }
    );
  }

  let evt;

  try {
    evt = await verifyWebhook(req, {
      signingSecret: WEBHOOK_SECRET,
    });

    const { id } = evt.data;
    const eventType = evt.type;

    console.log(`Webhook with ID: ${id} and type: ${eventType}`);

    // --- CREATE ---
    if (eventType === "user.created") {
      const {
        id: clerkId,
        email_addresses,
        image_url,
        first_name,
        last_name,
        username,
      } = evt.data;

      const user = {
        clerkId,
        email: email_addresses[0]?.email_address,
        username: username,
        firstName: first_name,
        lastName: last_name,
        photo: image_url,
      };

      const newUser = await createUser(user);

      return NextResponse.json({ message: "OK", user: newUser });
    }

    // --- UPDATE ---
    if (eventType === "user.updated") {
      const { id, image_url, first_name, last_name, username } = evt.data;

      const user = {
        firstName: first_name,
        lastName: last_name,
        username: username,
        photo: image_url,
      };

      const updatedUser = await updateUser(id, user);

      return NextResponse.json({ message: "OK", user: updatedUser });
    }

    // --- DELETE ---
    if (eventType === "user.deleted") {
      const { id } = evt.data;
      const deletedUser = await deleteUser(id);

      return NextResponse.json({ message: "OK", user: deletedUser });
    }

    return new Response("Event received but not handled", { status: 200 });
  } catch (err) {
    console.error("Error verifying webhook or processing event:", err);
    return new Response("Webhook processing failed", { status: 400 });
  }
}
