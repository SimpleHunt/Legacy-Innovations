// GET /api/report/insideSales/monthly?year=2025&employeeId=all

import prisma from "@/lib/db";
import { startOfMonth, endOfMonth } from "date-fns";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const year = searchParams.get("year") || `${new Date().getFullYear()}`;
    const employeeId = searchParams.get("employeeId") || "all";

    const y = parseInt(year);
    const result: number[] = [];

    for (let m = 0; m < 12; m++) {
      const start = startOfMonth(new Date(y, m));
      const end = endOfMonth(start);

      const where =
        employeeId === "all"
          ? { createdAt: { gte: start, lte: end } }
          : {
              employeeId: Number(employeeId),
              createdAt: { gte: start, lte: end },
            };

      const count = await prisma.order.count({ where });
      result.push(count);
    }

    return Response.json({ year, data: result });
  } catch (error: any) {
    return Response.json(
      { error: "Failed to load inside sales monthly data", detail: error.message },
      { status: 500 }
    );
  }
}
