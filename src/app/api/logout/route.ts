import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const store = await cookies();

  store.delete("userId");
  store.delete("role");

  return NextResponse.json({ success: true });
}