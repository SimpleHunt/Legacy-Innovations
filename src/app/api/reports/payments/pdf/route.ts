import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";

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
    
  });

  const doc = new PDFDocument({ size: "A4", margin: 50 });
  const buffers: Uint8Array[] = [];
  doc.on("data", (chunk) => buffers.push(chunk));
  doc.on("end", () => {});

  doc.fontSize(18).text("Payment Report", { align: "center" }).moveDown();
  doc.fontSize(12);

  
  doc.end();
  const pdfBuffer = Buffer.concat(buffers);

  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="payment-report.pdf"`,
    },
  });
}
