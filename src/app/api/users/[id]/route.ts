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
    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) return NextResponse.json({ message: "Not found" }, { status: 404 });
    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    const id = parseId(params.id);
    const body = await req.json();

    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;

    if (body.createdBy) body.createdBy = Number(body.createdBy);

    const updated = await prisma.user.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(updated);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}

// Soft delete
export async function DELETE(_req: NextRequest, { params }: Params) {
  try {
    const id = parseId(params.id);
    const updated = await prisma.user.update({
      where: { id },
      data: { isActive: false },
    });
    return NextResponse.json({ message: "User deactivated", user: updated });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
