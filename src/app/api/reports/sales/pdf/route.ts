import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";
import { Readable } from "stream";

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

  const doc = new PDFDocument({ margin: 40 });
  const stream = doc.pipe(new Readable().wrap(doc));

  doc.fontSize(18).text("Sales Report", { align: "center" });
  doc.moveDown();

  orders.forEach((o) => {
    doc.fontSize(12).text(
      `#${o.id} | ${o.customer?.fullName || "-"} | ₹${o.amount} | ${o.createdAt
        .toISOString()
        .slice(0, 10)}`
    );
    doc.moveDown(0.4);
  });

  doc.end();

  return new NextResponse(stream as any, {
    headers: {
      "Content-Disposition": "attachment; filename=sales_report.pdf",
      "Content-Type": "application/pdf",
    },
  });
}
