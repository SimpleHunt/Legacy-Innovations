import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const items = await prisma.factory.findMany({ include: { order: true } });
    return NextResponse.json(items);
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.orderId) body.orderId = Number(body.orderId);
    const created = await prisma.factory.create({ data: body });
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
