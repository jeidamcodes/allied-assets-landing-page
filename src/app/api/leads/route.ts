import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const NOTIFY_EMAIL = "alliedassetsre@gmail.com";

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

    // Send email notification (non-blocking — lead is already saved)
    try {
      await resend.emails.send({
        from: "Allied Assets Leads <onboarding@resend.dev>",
        to: NOTIFY_EMAIL,
        subject: `New Lead: ${first_name} ${last_name} — ${property_address}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1B3A5C; border-bottom: 2px solid #1B4FA0; padding-bottom: 12px;">
              New Lead Submitted
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #475569; width: 160px;">Property Address</td>
                <td style="padding: 10px 12px;">${property_address}</td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Name</td>
                <td style="padding: 10px 12px;">${first_name} ${last_name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Phone</td>
                <td style="padding: 10px 12px;"><a href="tel:${phone}" style="color: #1B4FA0;">${phone}</a></td>
              </tr>
              <tr style="background: #f8fafc;">
                <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Email</td>
                <td style="padding: 10px 12px;"><a href="mailto:${email}" style="color: #1B4FA0;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Situation</td>
                <td style="padding: 10px 12px;">${situation || "Not specified"}</td>
              </tr>
            </table>
            <p style="margin-top: 24px; color: #64748b; font-size: 13px;">
              This lead was submitted via the Allied Assets website. Follow up as soon as possible.
            </p>
          </div>
        `,
      });
    } catch (emailError) {
      // Log but don't fail the request — the lead is already saved
      console.error("Failed to send email notification:", emailError);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
