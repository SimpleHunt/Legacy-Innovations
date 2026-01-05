import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!startDate || !endDate) {
      return NextResponse.json({ error: "Start and end dates required" }, { status: 400 });
    }

    const orders = await prisma.order.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      include: {
        //customer: true,
        //franchise: true,
        //product: true,
        //employee: true,
      },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Orders");

    sheet.columns = [
      { header: "ID", key: "id" },
      { header: "Customer", key: "customer" },
      { header: "Franchise", key: "franchise" },
      { header: "Product", key: "product" },
      { header: "Employee", key: "employee" },
      { header: "Amount", key: "amount" },
      { header: "Date", key: "date" },
    ];

    //orders.forEach((o) => {
      //sheet.addRow({
      //  id: o.id,
       // customer: o.customer?.name || "N/A",
       // franchise: o.franchise?.name || "N/A",
       // product: o.product?.name || "N/A",
       // employee: o.employee?.fullName || "N/A",
        //amount: o.totalAmount,
       // date: o.createdAt.toISOString().slice(0, 10),
      //});
    //});

    const buffer = await workbook.xlsx.writeBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="order-report.xlsx"`,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
