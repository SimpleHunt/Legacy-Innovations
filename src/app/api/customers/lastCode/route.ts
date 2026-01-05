// /api/franchise/last-code/route.ts

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const last = await prisma.customer.findFirst({
      orderBy: { customerCode: "desc" },
    });

    return NextResponse.json({
      lastCode: last?.customerCode || "LI-FC-000",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch last customer code" },
      { status: 500 }
    );
  }
}
