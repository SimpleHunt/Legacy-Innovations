import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

type Context = {
  params: Promise<{ id: string }>;
};

function parseId(id: string) {
  const n = Number(id);
  if (Number.isNaN(n)) throw new Error("Invalid id");
  return n;
}

// GET PRODUCT
export async function GET(
  _req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const productId = parseId(id);

    const prod = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!prod) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(prod);
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 400 }
    );
  }
}

// UPDATE PRODUCT
export async function PUT(
  req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const productId = parseId(id);

    const body = await req.json();
    if (body.createdById) body.createdById = Number(body.createdById);
    delete body.id;

    const updated = await prisma.product.update({
      where: { id: productId },
      data: body,
    });

    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 400 }
    );
  }
}

// SOFT DELETE PRODUCT
export async function DELETE(
  _req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const productId = parseId(id);

    const existing = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: `Product with ID ${productId} not found` },
        { status: 404 }
      );
    }

    const updated = await prisma.product.update({
      where: { id: productId },
      data: { isActive: false },
    });

    return NextResponse.json({
      message: "Product deactivated",
      product: updated,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || String(err) },
      { status: 500 }
    );
  }
}
