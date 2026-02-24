import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SUPABASE_SERVICE_KEY) {
  console.error("[v0] Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const TEST_LEAD = {
  property_address: "456 Test Boulevard, Miami, FL 33101",
  first_name: "Test",
  last_name: "Lead",
  phone: "(305) 555-1234",
  email: "testlead@example.com",
  situation: "Need to Sell Fast",
};

async function runTest() {
  console.log("[v0] === LEAD CAPTURE TEST ===\n");

  // Step 1: Submit the lead via the API
  console.log("[v0] Step 1: Submitting test lead to /api/leads...");
  console.log("[v0] Payload:", JSON.stringify(TEST_LEAD, null, 2));

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  
  try {
    const res = await fetch(`${baseUrl}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(TEST_LEAD),
    });

    const data = await res.json();
    console.log(`[v0] API Response: ${res.status}`, JSON.stringify(data));

    if (!res.ok) {
      console.error("[v0] FAILED: API returned an error.");
      process.exit(1);
    }

    console.log("[v0] SUCCESS: Lead submitted via API.\n");
  } catch (err) {
    console.error("[v0] FAILED: Could not reach the API.", err);
    process.exit(1);
  }

  // Step 2: Verify the lead exists in the database
  console.log("[v0] Step 2: Verifying lead in Supabase database...");

  const { data: leads, error } = await supabase
    .from("leads")
    .select("*")
    .eq("email", TEST_LEAD.email)
    .order("created_at", { ascending: false })
    .limit(1);

  if (error) {
    console.error("[v0] FAILED: Could not query database.", error);
    process.exit(1);
  }

  if (!leads || leads.length === 0) {
    console.error("[v0] FAILED: Lead not found in database.");
    process.exit(1);
  }

  const lead = leads[0];
  console.log("[v0] SUCCESS: Lead found in database!");
  console.log("[v0] Database record:", JSON.stringify(lead, null, 2));

  // Verify all fields match
  const checks = [
    { field: "property_address", expected: TEST_LEAD.property_address, actual: lead.property_address },
    { field: "first_name", expected: TEST_LEAD.first_name, actual: lead.first_name },
    { field: "last_name", expected: TEST_LEAD.last_name, actual: lead.last_name },
    { field: "phone", expected: TEST_LEAD.phone, actual: lead.phone },
    { field: "email", expected: TEST_LEAD.email, actual: lead.email },
    { field: "situation", expected: TEST_LEAD.situation, actual: lead.situation },
  ];

  console.log("\n[v0] Step 3: Verifying field accuracy...");
  let allPassed = true;
  for (const check of checks) {
    const match = check.expected === check.actual;
    console.log(`[v0]   ${match ? "PASS" : "FAIL"}: ${check.field} — expected "${check.expected}", got "${check.actual}"`);
    if (!match) allPassed = false;
  }

  // Step 3: Check email notification status
  console.log("\n[v0] Step 4: Email notification...");
  console.log("[v0] The email notification to alliedassetsre@gmail.com was triggered during the API call.");
  console.log("[v0] Check the inbox (and spam folder) for the notification email.");
  console.log("[v0] Note: Resend free tier sends from onboarding@resend.dev, which may land in spam.\n");

  // Cleanup: remove the test lead
  console.log("[v0] Step 5: Cleaning up test lead from database...");
  const { error: deleteError } = await supabase
    .from("leads")
    .delete()
    .eq("id", lead.id);

  if (deleteError) {
    console.error("[v0] WARNING: Could not delete test lead.", deleteError);
  } else {
    console.log("[v0] SUCCESS: Test lead cleaned up.\n");
  }

  // Summary
  console.log("[v0] === TEST SUMMARY ===");
  console.log(`[v0] API Submission:    PASS`);
  console.log(`[v0] Database Insert:   PASS`);
  console.log(`[v0] Field Accuracy:    ${allPassed ? "PASS" : "FAIL"}`);
  console.log(`[v0] Email Triggered:   CHECK INBOX`);
  console.log(`[v0] Cleanup:           ${deleteError ? "WARN" : "PASS"}`);
  console.log("[v0] ====================");
}

runTest();
