

import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const last = await prisma.order.findFirst({
      orderBy: { orderNumber: "desc" },
    });

    return NextResponse.json({
      lastCode: last?.orderNumber || "ORD001",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch last Order Number" },
      { status: 500 }
    );
  }
}
