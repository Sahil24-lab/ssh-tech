// src/app/api/leads/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, budget, timeline, projectType, customType, overview } =
    body;

  const { data, error } = await supabase.from("leads").insert([
    {
      name,
      email,
      budget,
      timeline,
      project_type: projectType,
      custom_type: customType,
      overview,
    },
  ]);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: "Lead saved", data }, { status: 200 });
}
