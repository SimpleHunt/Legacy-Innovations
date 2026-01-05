import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

function parseId(value: string) {
  const id = Number(value);
  if (Number.isNaN(id)) throw new Error("Invalid id");
  return id;
}

// ---------------------- GET: Single Factory ----------------------
export async function GET(
  _req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ REQUIRED
    const factoryId = parseId(id);

    const factory = await prisma.factory.findUnique({
      where: { id: factoryId },
      include: {
        //order: true,
      },
    });

    if (!factory) {
      return NextResponse.json({ message: "Not found" }, { status: 404 });
    }

    return NextResponse.json(factory);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Something went wrong" },
      { status: 400 }
    );
  }
}

// ---------------------- PUT: Update Factory ----------------------
export async function PUT(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params; // ✅ REQUIRED
    const factoryId = parseId(id);
    const body = await req.json();

    const updateData: any = { ...body };

    if (body.orderId) {
      updateData.order = {
        connect: { id: Number(body.orderId) },
      };
    }

    delete updateData.id;
    delete updateData.orderId;

    const updated = await prisma.factory.update({
      where: { id: factoryId },
      data: updateData,
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Update failed" },
      { status: 400 }
    );
  }
}
