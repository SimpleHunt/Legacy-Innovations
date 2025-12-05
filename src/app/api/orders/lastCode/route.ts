import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Get current month abbreviation
    const month = new Date().toLocaleString("en-US", { month: "short" }); // Jan, Feb, Mar

    // Example prefix: LI/Dec
    const prefix = `LI/${month}`;

    // Fetch last order number that matches current month prefix
    const last = await prisma.order.findFirst({
      where: {
        orderNumber: {
          startsWith: prefix
        },
      },
      orderBy: { orderNumber: "desc" },
    });

    let nextNumber = 1;

    if (last?.orderNumber) {
      // last.orderNumber looks like: LI/Dec/005
      const parts = last.orderNumber.split("/"); 
      const lastNum = parseInt(parts[2], 10) || 0;
      nextNumber = lastNum + 1;
    }

    // Format final number: 001, 002, ...
    const formatted = `${prefix}/${String(nextNumber).padStart(3, "0")}`;

    return NextResponse.json({ lastCode: formatted });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch last order number" },
      { status: 500 }
    );
  }
}
