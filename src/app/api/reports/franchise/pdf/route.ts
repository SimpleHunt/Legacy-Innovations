import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";
import { PassThrough, Readable } from "stream"; // Import PassThrough AND Readable

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: "Start and end date required" },
        { status: 400 }
      );
    }

    // 1. Fetch data from the database
    const records = await prisma.franchisePayment.findMany({
      where: {
        createdAt: {
          gte: new Date(startDate!),
          lte: new Date(endDate!),
        },
      },
      include: { franchise: true },
      orderBy: { createdAt: "desc" },
    });

    
    const doc = new PDFDocument();
    const nodeStream = new PassThrough(); 

    
    doc.pipe(nodeStream);

    // 4. Populate the PDF (This writes data to the nodeStream asynchronously)
    doc.fontSize(18).text("Franchise Report", { align: "center" });
    doc.moveDown();

    records.forEach((r) => {
      doc
        .fontSize(12)
        .text(
          `ID: ${r.id} | Franchise: ${r.franchise?.name} | Amount: ₹${r.amount} | Date: ${r.createdAt
            .toISOString()
            .slice(0, 10)}`
        );
      doc.moveDown(0.5);
    });

    // 5. Finalize the PDF generation. This signals the nodeStream that writing is done.
    doc.end();

    
    const webStream = Readable.toWeb(nodeStream) as ReadableStream<any>;

    // 7. Return the response with the Web Stream as the body
    return new Response(webStream, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="FranchiseReport.pdf"',
        // Optional but recommended for streaming:
        "Transfer-Encoding": "chunked", 
      },
    });
  } catch (error) {
    console.error("PDF Generation or Database Error:", error);
    return NextResponse.json(
      { error: "Failed to generate report" },
      { status: 500 }
    );
  }
}