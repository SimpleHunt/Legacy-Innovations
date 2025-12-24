import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { search, startDate, endDate, page = "1" } = Object.fromEntries(
      req.nextUrl.searchParams
    );

    const PAGE_SIZE = 10;
    const skip = (Number(page) - 1) * PAGE_SIZE;

    const where: any = {
      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    };

    if (search) {
      where.OR = [
        { customerName: { contains: search, mode: "insensitive" } },
      ];
    }

    const [reports, count] = await Promise.all([
      prisma.order.findMany({
        where,
        select: {
          id: true,
          //amount: true,
          createdAt: true,
         // customer: { select: { fullName: true } },
        },
        skip,
        take: PAGE_SIZE,
        orderBy: { createdAt: "desc" },
      }),
      prisma.order.count({ where }),
    ]);

    const formatted = reports.map((o) => ({
      id: o.id,
      //customerName: o.customer?.fullName || "-",
      //amount: o.amount,
      createdAt: o.createdAt,
    }));

    return NextResponse.json({ reports: formatted, count });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
