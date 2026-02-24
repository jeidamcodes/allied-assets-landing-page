import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { property_address, first_name, last_name, phone, email, situation } =
      body;

    // Basic validation
    if (!property_address || !first_name || !last_name || !phone || !email) {
      return NextResponse.json(
        { error: "All fields except situation are required." },
        { status: 400 }
      );
    }

    const supabase = await createClient();

    const { error } = await supabase.from("leads").insert({
      property_address,
      first_name,
      last_name,
      phone,
      email,
      situation: situation || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { error: "Failed to submit your information. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
