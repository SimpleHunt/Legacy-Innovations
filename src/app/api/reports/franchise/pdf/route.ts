import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import PDFDocument from "pdfkit";
import { PassThrough, Readable } from "stream"; // Import PassThrough AND Readable

export async function GET(req: Request) {
  
}