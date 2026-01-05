import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const orders = await prisma.order.findMany({
    where: {
      createdAt: {
        gte: new Date(startDate!),
        lte: new Date(endDate!),
      },
    },
    include: { 
//customer: true 
},
    orderBy: { createdAt: "desc" },
  });

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Customer Report");

  sheet.addRow(["ID", "Customer", "Amount", "Date"]);
  //orders.forEach((o) =>
   // sheet.addRow([o.id, o.customer?.name, o.totalAmount, o.createdAt.toISOString().slice(0, //10)])
 // );

  const buffer = await workbook.xlsx.writeBuffer();
  return new NextResponse(buffer, {
    headers: {
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "Content-Disposition": 'attachment; filename="CustomerReport.xlsx"',
    },
  });
}
