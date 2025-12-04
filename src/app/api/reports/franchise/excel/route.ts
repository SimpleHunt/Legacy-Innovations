import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const records = await prisma.franchisePayment.findMany({
    where: {
      createdAt: {
        gte: new Date(startDate!),
        lte: new Date(endDate!),
      },
    },
    include: { franchise: true },
    orderBy: { createdAt: "desc" },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Franchise Report");

  sheet.addRow(["ID", "Franchise", "Amount", "Date"]);
  records.forEach((r) =>
    sheet.addRow([r.id, r.franchise?.name, r.amount, r.createdAt.toISOString().slice(0, 10)])
  );

  const buffer = await workbook.xlsx.writeBuffer();
  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="FranchiseReport.xlsx"',
    },
  });
}
