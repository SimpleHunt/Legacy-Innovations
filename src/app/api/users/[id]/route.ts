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

// GET USER
export async function GET(
  _req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const userId = parseId(id);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 400 }
    );
  }
}

// UPDATE USER
export async function PUT(
  req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const userId = parseId(id);

    const body = await req.json();

    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;

    if (body.createdBy) body.createdBy = Number(body.createdBy);

    const updated = await prisma.user.update({
      where: { id: userId },
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

// SOFT DELETE USER
export async function DELETE(
  _req: NextRequest,
  { params }: Context
) {
  try {
    const { id } = await params;
    const userId = parseId(id);

    const updated = await prisma.user.update({
      where: { id: userId },
      data: { isActive: false },
    });

    return NextResponse.json({
      message: "User deactivated",
      user: updated,
    });
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 400 }
    );
  }
}
