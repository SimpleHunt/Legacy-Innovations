
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const year = Number(searchParams.get("year")) || new Date().getFullYear();

    const monthly = await prisma.$queryRaw<
      { employeeId: number; month: number; total: number }[]
    >`
      SELECT 
        "employeeId",
        EXTRACT(MONTH FROM "createdAt") AS month,
        COUNT(*) AS total
      FROM "Order"
      WHERE EXTRACT(YEAR FROM "createdAt") = ${year}
      GROUP BY "employeeId", month
      ORDER BY month ASC
    `;

    const employees = await prisma.user.findMany({
      where: { role: "EMPLOYEE" },
      select: { id: true, fullName: true },
    });

    const formatted = employees.map((emp) => ({
      employeeId: emp.id,
      name: emp.fullName,
      months: Array.from({ length: 12 }, (_, i) => {
        const row = monthly.find(
          (m) => m.employeeId === emp.id && m.month === i + 1
        );
        return row ? Number(row.total) : 0;
      }),
    }));

    return NextResponse.json({ year, data: formatted });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
