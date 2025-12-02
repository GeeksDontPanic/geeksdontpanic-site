// app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabaseServer";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (body?.email || "").toString().trim().toLowerCase();

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const { error } = await supabaseServer
      .from("emails")
      .insert({
        email,
        // optional, nice to have later if you have multiple sources:
        // source: "coming_soon",
      });

    if (error) {
      // 23505 = unique_violation (duplicate email)
      if ((error as any).code === "23505") {
        return NextResponse.json(
          { error: "This email is already subscribed." },
          { status: 409 }
        );
      }

      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Something went wrong." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe handler error:", err);
    return NextResponse.json(
      { error: "Bad request." },
      { status: 400 }
    );
  }
}