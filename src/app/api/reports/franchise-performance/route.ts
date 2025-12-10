import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const year = Number(searchParams.get("year")) || new Date().getFullYear();

    const monthly = await prisma.$queryRaw<
      { franchiseId: number; month: number; total: number }[]
    >`
      SELECT 
        "franchiseId",
        EXTRACT(MONTH FROM "createdAt") AS month,
        COUNT(*) AS total
      FROM "Order"
      WHERE EXTRACT(YEAR FROM "createdAt") = ${year}
      GROUP BY "franchiseId", month
      ORDER BY month ASC
    `;

    const franchises = await prisma.franchise.findMany({
      select: { id: true, name: true },
    });

    const formatted = franchises.map((fr) => ({
      franchiseId: fr.id,
      name: fr.name,
      months: Array.from({ length: 12 }, (_, i) => {
        const row = monthly.find(
          (m) => m.franchiseId === fr.id && m.month === i + 1
        );
        return row ? Number(row.total) : 0;
      }),
    }));

    return NextResponse.json({ year, data: formatted });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
