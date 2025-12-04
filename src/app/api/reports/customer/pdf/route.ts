import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";
import getStream from "get-stream";

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
    include: { customer: true },
    orderBy: { createdAt: "desc" },
  });

  const doc = new PDFDocument();
  doc.fontSize(18).text("Customer Report", { align: "center" });
  doc.moveDown();
  orders.forEach((o) => {
    doc.fontSize(12).text(
      `ID: ${o.id} | Customer: ${o.customer?.name} | Amount: ₹${o.totalAmount} | Date: ${o.createdAt.toISOString().slice(0, 10)}`
    );
    doc.moveDown(0.5);
  });

  const pdfBuffer = await getStream.buffer(doc);
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="CustomerReport.pdf"',
    },
  });
}
