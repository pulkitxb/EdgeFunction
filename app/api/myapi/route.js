import { NextResponse } from "next/server";

export const runtime = "edge";

export async function GET(req) {
  return NextResponse.json({
    name: `Hello from ${req.url}, I'm now an edge function!`
  });
}
