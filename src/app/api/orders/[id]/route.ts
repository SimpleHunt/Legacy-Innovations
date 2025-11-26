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

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const id = parseId(params.id);
    const body = await req.json();

    if (body.productId) body.productId = Number(body.productId);
    if (body.customerId) body.customerId = Number(body.customerId);
    if (body.franchiseId) body.franchiseId = Number(body.franchiseId);
    if (body.employeeId) body.employeeId = Number(body.employeeId);

    delete body.id;
    const updated = await prisma.order.update({ where: { id }, data: body });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

// If you want DELETE (hard) — uncomment below. Usually orders are kept for records.


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

