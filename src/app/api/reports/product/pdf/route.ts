import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";
import { PassThrough } from "stream";
import { Readable } from "stream"; // Import Readable for the conversion utility

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const startDate = url.searchParams.get("startDate");
    const endDate = url.searchParams.get("endDate");

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: "Start and end date required" },
        { status: 400 }
      );
    }

    // 1. Fetch data from the database
    const products = await prisma.product.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate),
          lte: new Date(endDate),
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // 2. Setup PDFDocument and Node.js Stream
    const doc = new PDFDocument({ margin: 30, size: "A4" });
    const nodeStream = new PassThrough(); // Your Node.js stream

    // 3. Pipe the PDF output to the Node.js stream
    doc.pipe(nodeStream);

    // 4. Populate the PDF
    doc.fontSize(18).text("Product Report", { align: "center" });
    doc.moveDown();

    products.forEach((p) => {
      doc
        .fontSize(12)
        .text(
          `ID: ${p.id} | Name: ${p.name} | Price: ${p.price} | Stock: ${
            p.stock
          } | Date: ${p.createdAt.toISOString().slice(0, 10)}`
        );
      doc.moveDown(0.5);
    });

    // 5. Finalize the PDF generation
    doc.end();

    // 6. 🚨 CRITICAL FIX: Convert the Node.js PassThrough stream to a Web Stream
    const webStream = Readable.toWeb(nodeStream) as ReadableStream<any>;

    // 7. Return the response with the Web Stream as the body
    return new Response(webStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="product-report.pdf"`,
      },
    });
  } catch (err) {
    console.error("PDF Generation Error:", err);
    // Return a structured error response
    return new Response(JSON.stringify({ error: "Failed to generate PDF" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}