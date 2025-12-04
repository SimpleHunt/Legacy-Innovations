import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  if (!startDate || !endDate) {
    return NextResponse.json({ error: "Start and end dates required" }, { status: 400 });
  }

  const payments = await prisma.payment.findMany({
    where: {
      createdAt: { gte: new Date(startDate), lte: new Date(endDate) },
    },
    include: { order: { include: { customer: true, franchise: true } } },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Payments");

  sheet.columns = [
    { header: "ID", key: "id" },
    { header: "Customer", key: "customer" },
    { header: "Franchise", key: "franchise" },
    { header: "Amount", key: "amount" },
    { header: "Date", key: "date" },
    { header: "Status", key: "status" },
    { header: "Method", key: "method" },
  ];

  payments.forEach((p) =>
    sheet.addRow({
      id: p.id,
      customer: p.order?.customer?.name || "N/A",
      franchise: p.order?.franchise?.name || "N/A",
      amount: p.amount,
      date: p.createdAt.toISOString().slice(0, 10),
      status: p.status,
      method: p.method,
    })
  );

  const buffer = await workbook.xlsx.writeBuffer();
  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": `attachment; filename="payment-report.xlsx"`,
    },
  });
}
