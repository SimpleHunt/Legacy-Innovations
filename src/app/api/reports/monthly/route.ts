import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const year = Number(searchParams.get("year")) || new Date().getFullYear();

    const results = await prisma.$queryRaw<
      { month: number; total: number }[]
    >`
      SELECT 
        EXTRACT(MONTH FROM "createdAt") AS month,
        COUNT(*) AS total
      FROM "Order"
      WHERE EXTRACT(YEAR FROM "createdAt") = ${year}
      GROUP BY month
      ORDER BY month ASC
    `;

    // Convert to frontend-friendly structure
    const months = Array.from({ length: 12 }, (_, i) => {
      const row = results.find((r) => r.month === i + 1);
      return {
        month: new Date(0, i).toLocaleString("default", { month: "short" }),
        value: row ? Number(row.total) : 0,
      };
    });

    return NextResponse.json({ year, data: months });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
