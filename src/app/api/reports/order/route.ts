import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const take = 10; // fixed or can make dynamic
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!startDate || !endDate) {
      return NextResponse.json({ error: "Start and end dates required" }, { status: 400 });
    }

    const where: any = {
      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    };

    const [orders, count] = await prisma.$transaction([
      prisma.order.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: take * (page - 1),
        take,
        include: {
          customer: true,
          franchise: true,
          product: true,
          employee: true,
        },
      }),
      prisma.order.count({ where }),
    ]);

    // map orders to frontend format
    const reports = orders.map((o) => ({
      id: o.id,
      customerName: o.customer?.name || "N/A",
      franchiseName: o.franchise?.name || "N/A",
      productName: o.product?.name || "N/A",
      totalAmount: o.totalAmount,
      createdAt: o.createdAt,
    }));

    return NextResponse.json({ reports, count });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
