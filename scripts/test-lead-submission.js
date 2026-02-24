import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const NOTIFY_EMAIL = "alliedassetsre@gmail.com";

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

if (!RESEND_API_KEY) {
  console.error("Missing RESEND_API_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);
const resend = new Resend(RESEND_API_KEY);

const TEST_LEAD = {
  property_address: "456 Test Boulevard, Miami, FL 33101",
  first_name: "Test",
  last_name: "Lead",
  phone: "(305) 555-1234",
  email: "testlead@example.com",
  situation: "Need to Sell Fast",
};

async function runTest() {
  console.log("=== LEAD CAPTURE FULL PIPELINE TEST ===\n");

  // Step 1: Insert lead into Supabase
  console.log("Step 1: Inserting test lead into Supabase...");
  console.log("Payload:", JSON.stringify(TEST_LEAD, null, 2));

  const { data: insertedLead, error: insertError } = await supabase
    .from("leads")
    .insert(TEST_LEAD)
    .select()
    .single();

  if (insertError) {
    console.error("FAILED: Could not insert lead.", insertError.message);
    process.exit(1);
  }

  console.log("SUCCESS: Lead saved to database!");
  console.log("Record:", JSON.stringify(insertedLead, null, 2));

  // Step 2: Verify fields
  console.log("\nStep 2: Verifying field accuracy...");
  const checks = [
    { field: "property_address", expected: TEST_LEAD.property_address, actual: insertedLead.property_address },
    { field: "first_name", expected: TEST_LEAD.first_name, actual: insertedLead.first_name },
    { field: "last_name", expected: TEST_LEAD.last_name, actual: insertedLead.last_name },
    { field: "phone", expected: TEST_LEAD.phone, actual: insertedLead.phone },
    { field: "email", expected: TEST_LEAD.email, actual: insertedLead.email },
    { field: "situation", expected: TEST_LEAD.situation, actual: insertedLead.situation },
  ];

  let allFieldsMatch = true;
  for (const check of checks) {
    const match = check.expected === check.actual;
    console.log(`  ${match ? "PASS" : "FAIL"}: ${check.field} — expected "${check.expected}", got "${check.actual}"`);
    if (!match) allFieldsMatch = false;
  }

  // Step 3: Send email notification via Resend
  console.log("\nStep 3: Sending email notification to", NOTIFY_EMAIL, "...");

  try {
    const emailResult = await resend.emails.send({
      from: "Allied Assets Leads <onboarding@resend.dev>",
      to: NOTIFY_EMAIL,
      subject: `New Lead: ${TEST_LEAD.first_name} ${TEST_LEAD.last_name} — ${TEST_LEAD.property_address}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1B3A5C; border-bottom: 2px solid #1B4FA0; padding-bottom: 12px;">
            New Lead Submitted (TEST)
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #475569; width: 160px;">Property Address</td>
              <td style="padding: 10px 12px;">${TEST_LEAD.property_address}</td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Name</td>
              <td style="padding: 10px 12px;">${TEST_LEAD.first_name} ${TEST_LEAD.last_name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Phone</td>
              <td style="padding: 10px 12px;"><a href="tel:${TEST_LEAD.phone}" style="color: #1B4FA0;">${TEST_LEAD.phone}</a></td>
            </tr>
            <tr style="background: #f8fafc;">
              <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Email</td>
              <td style="padding: 10px 12px;"><a href="mailto:${TEST_LEAD.email}" style="color: #1B4FA0;">${TEST_LEAD.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 12px; font-weight: bold; color: #475569;">Situation</td>
              <td style="padding: 10px 12px;">${TEST_LEAD.situation}</td>
            </tr>
          </table>
          <p style="margin-top: 24px; color: #64748b; font-size: 13px;">
            This is a TEST lead submitted via the pipeline test script.
          </p>
        </div>
      `,
    });

    console.log("SUCCESS: Email sent!", JSON.stringify(emailResult, null, 2));
  } catch (emailError) {
    console.error("FAILED: Email could not be sent.", emailError.message);
  }

  // Step 4: Cleanup — remove the test lead
  console.log("\nStep 4: Cleaning up test lead from database...");
  const { error: deleteError } = await supabase
    .from("leads")
    .delete()
    .eq("id", insertedLead.id);

  if (deleteError) {
    console.error("WARNING: Could not delete test lead.", deleteError.message);
  } else {
    console.log("SUCCESS: Test lead removed from database.\n");
  }

  // Summary
  console.log("=== TEST SUMMARY ===");
  console.log(`Database Insert:   PASS`);
  console.log(`Field Accuracy:    ${allFieldsMatch ? "PASS" : "FAIL"}`);
  console.log(`Email Notification: CHECK INBOX at ${NOTIFY_EMAIL}`);
  console.log(`Cleanup:           ${deleteError ? "WARN" : "PASS"}`);
  console.log("====================");
  console.log("\nCheck alliedassetsre@gmail.com inbox (and spam folder) for the notification email.");
  console.log("Note: Resend free tier sends from onboarding@resend.dev which may land in spam.");
}

runTest();
