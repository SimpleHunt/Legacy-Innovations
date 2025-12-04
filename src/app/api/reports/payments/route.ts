import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const take = 10;
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

    const [payments, count] = await prisma.$transaction([
      prisma.payment.findMany({
        where,
        orderBy: { createdAt: "desc" },
        skip: take * (page - 1),
        take,
        include: {
          order: {
            include: {
              customer: true,
              franchise: true,
              product: true,
              employee: true,
            },
          },
        },
      }),
      prisma.payment.count({ where }),
    ]);

    const reports = payments.map((p) => ({
      id: p.id,
      customerName: p.order?.customer?.name || "N/A",
      franchiseName: p.order?.franchise?.name || "N/A",
      amount: p.amount,
      date: p.createdAt,
      status: p.status,
      method: p.method,
    }));

    return NextResponse.json({ reports, count });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
