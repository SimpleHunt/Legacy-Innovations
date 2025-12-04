// /api/franchise/last-code/route.ts

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const last = await prisma.franchise.findFirst({
      orderBy: { code: "desc" },
    });

    return NextResponse.json({
      lastCode: last?.code || "FR-000",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch last franchise code" },
      { status: 500 }
    );
  }
}
