import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const page = Number(searchParams.get("page")) || 1;
    const take = 10;
    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    if (!startDate || !endDate) {
      return NextResponse.json({ error: "Start and end dates required" }, { status: 400 });
    }

    const where: any = {
      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    };

  

    

    return NextResponse.json({  });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
