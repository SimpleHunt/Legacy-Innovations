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
    const franchise = await prisma.franchise.findUnique({
      where: { id },
      include: { customers: true, orders: true },
    });
    if (!franchise) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(franchise);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const id = parseId(params.id);
    const body = await req.json();
    delete body.id;
    const updated = await prisma.franchise.update({ where: { id }, data: body });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

// soft delete
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    //console.log("RAW ID:", id);

    const franchiseID = Number(id);
    if (isNaN(franchiseID)) {
      return NextResponse.json(
        { error: "Invalid ID. Expected a number." },
        { status: 400 }
      );
    }

    const existing = await prisma.franchise.findUnique({
      where: { id: franchiseID },
    });

    if (!existing) {
      return NextResponse.json(
        { error: `Product with ID ${franchiseID} not found` },
        { status: 404 }
      );
    }

    const updated = await prisma.franchise.update({
      where: { id: franchiseID },
      data: { isActive: false },
    });

    return NextResponse.json({
      message: "Product deactivated",
      product: updated,
    });
  } catch (err: any) {
    console.error("DELETE ERROR:", err);
    return NextResponse.json(
      { error: err.message || String(err) },
      { status: 500 }
    );
  }
}