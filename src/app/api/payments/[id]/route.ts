import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: Promise<{ id: string }>;
};

// GET SINGLE PAYMENT
export async function GET(
  _req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;

    const payment = await prisma.payment.findUnique({
      where: { id: Number(id) },
      include: { order: true },
    });

    if (!payment) {
      return NextResponse.json(
        { success: false, message: "Payment not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: payment });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch payment" },
      { status: 500 }
    );
  }
}

// UPDATE PAYMENT
export async function PUT(
  req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const { amount, method, status } = await req.json();

    const updated = await prisma.payment.update({
      where: { id: Number(id) },
      data: { amount, method, status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update payment" },
      { status: 500 }
    );
  }
}

// DELETE PAYMENT
export async function DELETE(
  _req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;

    await prisma.payment.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      success: true,
      message: "Payment deleted",
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete payment" },
      { status: 500 }
    );
  }
}
