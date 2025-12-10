import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const franchiseId = searchParams.get("franchiseId");
    const employeeId = searchParams.get("employeeId");

    const where: any = {};

    if (franchiseId) where.franchiseId = Number(franchiseId);
    if (employeeId) where.employeeId = Number(employeeId);

    const data = await prisma.order.groupBy({
      by: ["productId"],
      where,
      _count: { productId: true },
    });

    const products = await prisma.product.findMany();

    const mix = data.map((row) => ({
      productId: row.productId,
      productName: products.find((p) => p.id === row.productId)?.name ?? "Unknown",
      total: row._count.productId,
    }));

    return NextResponse.json({ mix });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
