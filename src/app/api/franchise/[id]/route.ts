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
    const franchiseId = parseId(id);

    const franchise = await prisma.franchise.findUnique({
      where: { id: franchiseId },
      include: {
        customers: true,
        orders: true,
      },
    });

    if (!franchise) {
      return NextResponse.json(
        { message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(franchise);
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
    const franchiseId = parseId(id);

    const body = await req.json();
    delete body.id;

    const updated = await prisma.franchise.update({
      where: { id: franchiseId },
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

/* ======================= DELETE (Soft Delete) ======================= */
export async function DELETE(
  _req: NextRequest,
  context: Context
) {
  try {
    const { id } = await context.params;
    const franchiseId = parseId(id);

    const existing = await prisma.franchise.findUnique({
      where: { id: franchiseId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: `Franchise with ID ${franchiseId} not found` },
        { status: 404 }
      );
    }

    const updated = await prisma.franchise.update({
      where: { id: franchiseId },
      data: { isActive: false },
    });

    return NextResponse.json({
      message: "Franchise deactivated",
      franchise: updated,
    });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || String(err) },
      { status: 500 }
    );
  }
}
