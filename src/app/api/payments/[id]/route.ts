import prisma from "@/lib/db";
import { NextResponse } from "next/server";

// GET SINGLE PAYMENT
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const payment = await prisma.payment.findUnique({
      where: { id: Number(params.id) },
      include: { order: true },
    });

    if (!payment)
      return NextResponse.json(
        { success: false, message: "Payment not found" },
        { status: 404 }
      );

    return NextResponse.json({ success: true, data: payment });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to fetch payment", error },
      { status: 500 }
    );
  }
}

// UPDATE PAYMENT
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { amount, method, status } = await req.json();

    const updated = await prisma.payment.update({
      where: { id: Number(params.id) },
      data: { amount, method, status },
    });

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to update payment", error },
      { status: 500 }
    );
  }
}

// DELETE PAYMENT
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await prisma.payment.delete({
      where: { id: Number(params.id) },
    });

    return NextResponse.json({ success: true, message: "Payment deleted" });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Failed to delete payment", error },
      { status: 500 }
    );
  }
}
