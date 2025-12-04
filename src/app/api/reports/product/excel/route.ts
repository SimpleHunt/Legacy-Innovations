import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    if (!startDate || !endDate) {
      return NextResponse.json({ error: "Start and end date required" }, { status: 400 });
    }

    const products = await prisma.product.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Products");

    sheet.columns = [
      { header: "ID", key: "id", width: 10 },
      { header: "Name", key: "name", width: 30 },
      { header: "Price", key: "price", width: 15 },
      { header: "Stock", key: "stock", width: 10 },
      { header: "Created At", key: "createdAt", width: 20 },
    ];

    products.forEach((p) => {
      sheet.addRow({
        id: p.id,
        name: p.name,
        price: p.price,
        stock: p.stock,
        createdAt: p.createdAt.toISOString().slice(0, 10),
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return new Response(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="product-report.xlsx"`,
      },
    });
  } catch (err) {
    return new Response(String(err), { status: 500 });
  }
}
