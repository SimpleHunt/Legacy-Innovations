import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";

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
        customer: true,
        franchise: true,
        product: true,
        employee: true,
      },
    });

    const doc = new PDFDocument({ size: "A4", margin: 50 });
    const buffers: Uint8Array[] = [];

    doc.on("data", (chunk) => buffers.push(chunk));
    doc.on("end", () => {});

    doc.fontSize(18).text("Order Report", { align: "center" }).moveDown();
    doc.fontSize(12);

    orders.forEach((o, i) => {
      doc.text(
        `${i + 1}. Customer: ${o.customer?.name || "N/A"}, Franchise: ${
          o.franchise?.name || "N/A"
        }, Product: ${o.product?.name || "N/A"}, Employee: ${
          o.employee?.fullName || "N/A"
        }, Amount: ${o.totalAmount}, Date: ${o.createdAt.toISOString().slice(0, 10)}`
      );
    });

    doc.end();
    const pdfBuffer = Buffer.concat(buffers);

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="order-report.pdf"`,
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
