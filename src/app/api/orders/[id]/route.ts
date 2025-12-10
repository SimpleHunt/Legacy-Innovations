import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

type Params = { params: { id: string } };

function parseId(s: string) {
  const n = Number(s);
  if (Number.isNaN(n)) throw new Error("Invalid id");
  return n;
}

export async function GET(_req: NextRequest, { params }: Params) {
  try {
    const id = parseId(params.id);
    const order = await prisma.order.findUnique({
      where: { id },
      include: { product: true, customer: true, franchise: true, factory: true },
    });
    if (!order) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(order);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    // 👇 REQUIRED by Next.js — unwrap the params Promise
    const { id } = await context.params;

    const orderId = Number(id);
    if (isNaN(orderId)) {
      return NextResponse.json(
        { error: "Invalid order ID" },
        { status: 400 }
      );
    }

    const body = await req.json();
    console.log("🟦 Incoming Update Body:", body);

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

    if (body.status) {
      updateData.status = body.status;
    }

    if (body.employeeId) updateData.employeeId = Number(body.employeeId);
    if (body.franchiseId) updateData.franchiseId = Number(body.franchiseId);

    console.log("📦 Final Data to Update:", updateData);

    const updatedOrder = await prisma.order.update({
      where: { id: orderId },
      data: updateData,
    });

    return NextResponse.json(updatedOrder, { status: 200 });

  } catch (err: any) {
    console.error("❌ ORDER UPDATE ERROR:", err);

    return NextResponse.json(
      {
        error: "Order update failed",
        details: err?.message || err,
      },
      { status: 400 }
    );
  }
}



export async function DELETE(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;

    const orderId = Number(id);

    if (isNaN(orderId)) {
      return NextResponse.json(
        { error: "Invalid order ID" },
        { status: 400 }
      );
    }

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

