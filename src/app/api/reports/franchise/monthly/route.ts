import prisma from "@/lib/db";
import { startOfMonth, endOfMonth } from "date-fns";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const year = searchParams.get("year") || `${new Date().getFullYear()}`;
  const franchiseId = searchParams.get("franchiseId") || "all";
  const y = parseInt(year);

  const result = [];

  for (let m = 0; m < 12; m++) {
    const start = startOfMonth(new Date(y, m));
    const end = endOfMonth(start);

    const where =
      franchiseId === "all"
        ? { createdAt: { gte: start, lte: end } }
        : { franchiseId: Number(franchiseId), createdAt: { gte: start, lte: end } };

    const count = await prisma.order.count({ where });
    result.push(count);
  }

  return Response.json({ year, data: result });
}
