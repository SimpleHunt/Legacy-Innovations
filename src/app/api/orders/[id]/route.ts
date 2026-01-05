import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

function parseId(id: string) {
  const n = Number(id);
  if (Number.isNaN(n)) throw new Error("Invalid id");
  return n;
}

/* ======================= GET ======================= */
export async function GET(
  _req: NextRequest,
  context: Context
) {
  try {
    const { id } = await context.params;
    const orderId = parseId(id);

    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        //product: true,
        //customer: true,
        //franchise: true,
        //factory: true,
      },
    });

    if (!order) {
      return NextResponse.json(
        { message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 400 }
    );
  }
}

/* ======================= PUT ======================= */
export async function PUT(
  req: NextRequest,
  context: Context
) {
  try {
    const { id } = await context.params;
    const orderId = parseId(id);

    const body = await req.json();
    const updateData: any = {};

    if (body.expectedDeliveryDate) {
      updateData.expectedDeliveryDate = new Date(body.expectedDeliveryDate);
    }

    if (body.defectedStatus !== undefined) {
      updateData.defectedStatus = Number(body.defectedStatus);
    }

    if (body.defExpectedDate) {
      updateData.defExpectedDate = new Date(body.defExpectedDate);
    }

    if (body.status) updateData.status = body.status;
    if (body.employeeId) updateData.employeeId = Number(body.employeeId);
    if (body.franchiseId) updateData.franchiseId = Number(body.franchiseId);

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: updateData,
    });

    return NextResponse.json(updatedOrder, { status: 200 });
  } catch (err: any) {
    return NextResponse.json(
      {
        error: "Order update failed",
        details: err?.message || err,
      },
      { status: 400 }
    );
  }
}

/* ======================= DELETE ======================= */
export async function DELETE(
  _req: NextRequest,
  context: Context
) {
  try {
    const { id } = await context.params;
    const orderId = parseId(id);

    const deleted = await prisma.order.delete({
      where: { id: orderId },
    });

    return NextResponse.json(
      { message: "Order deleted successfully", deleted },
      { status: 200 }
    );
  } catch (error: any) {
    if (error.code === "P2025") {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { error: "Failed to delete order" },
      { status: 500 }
    );
  }
}
