
import prisma from "@/lib/db";
import { NextResponse,NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const customer = await prisma.customer.findFirst({
    where: { email },
  });

  return NextResponse.json(customer);
}
