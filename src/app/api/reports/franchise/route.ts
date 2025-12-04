import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const page = Number(searchParams.get("page")) || 1;
  const limit = 10;
  const skip = (page - 1) * limit;

  const reports = await prisma.franchisePayment.findMany({
    where: {
      createdAt: {
        gte: new Date(startDate!),
        lte: new Date(endDate!),
      },
    },
    include: { franchise: true },
    skip,
    take: limit,
    orderBy: { createdAt: "desc" },
  });

  const count = await prisma.franchisePayment.count({
    where: {
      createdAt: {
        gte: new Date(startDate!),
        lte: new Date(endDate!),
      },
    },
  });

  const formatted = reports.map((r) => ({
    id: r.id,
    name: r.franchise?.name,
    amount: r.amount,
    date: r.createdAt,
  }));

  return NextResponse.json({ reports: formatted, count });
}
