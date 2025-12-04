import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: NextRequest) {
  const { startDate, endDate } = Object.fromEntries(req.nextUrl.searchParams);

  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
    include: { customer: true },
    orderBy: { createdAt: "desc" },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Sales Report");

  sheet.addRow(["ID", "Customer", "Amount", "Date"]);

  orders.forEach((o) => {
    sheet.addRow([
      o.id,
      o.customer?.fullName || "-",
      o.amount,
      o.createdAt.toISOString().slice(0, 10),
    ]);
  });

  const buffer = await workbook.xlsx.writeBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Disposition": "attachment; filename=sales_report.xlsx",
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
  });
}
