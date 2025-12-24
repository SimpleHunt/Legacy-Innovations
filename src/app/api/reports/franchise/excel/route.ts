import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import ExcelJS from "exceljs";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  
}
