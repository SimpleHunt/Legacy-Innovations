import prisma from "@/lib/db";
import { NextResponse } from "next/server";

// GET ALL PAYMENTS
export async function GET() {
  try {
    const payments = await prisma.payment.findMany({
      include: { 
//order: true
 },
      orderBy: { id: "desc" },
    });

    return NextResponse.json({ success: true, data: payments });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch payments", error },
      { status: 500 }
    );
  }
}

// CREATE PAYMENT
export async function POST(req: Request) {
  try {
    const { orderId, amount, method, status } = await req.json();

    if (!orderId || !amount || !method) {
      return NextResponse.json(
        { success: false, message: "orderId, amount, method are required" },
        { status: 400 }
      );
    }

    const payment = await prisma.payment.create({
      data: { orderId, amount, method, status },
    });

    return NextResponse.json({ success: true, data: payment });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to create payment", error },
      { status: 500 }
    );
  }
}
