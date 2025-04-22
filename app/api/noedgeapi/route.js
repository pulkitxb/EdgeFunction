import { NextResponse } from "next/server";

export async function GET(req) {
  return NextResponse.json({
    name: `Hello from ${req.url}, I'm am not a edge function!`
  });
}
