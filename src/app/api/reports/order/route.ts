import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const take = Number(searchParams.get("take")) || 10;
    const skip = (page - 1) * take;

    const productId = searchParams.get("productId");
    const franchiseId = searchParams.get("franchiseId");
    const employeeId = searchParams.get("employeeId");
    const customerId = searchParams.get("customerId");
    const status = searchParams.get("status");

    const startDate = searchParams.get("startDate");
    const endDate = searchParams.get("endDate");

    const where: any = {};

    if (productId) where.productId = Number(productId);
    if (franchiseId) where.franchiseId = Number(franchiseId);
    if (employeeId) where.employeeId = Number(employeeId);
    if (customerId) where.customerId = Number(customerId);
    if (status) where.status = status;

    if (startDate || endDate) {
      where.createdAt = {};
      if (startDate) where.createdAt.gte = new Date(startDate);
      if (endDate) {
        const end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        where.createdAt.lte = end;
      }
    }

    

    const data = await prisma.order.findMany({
      where,
      skip,
      take,
      include: {
        //product: true,
        //customer: true,
        //franchise: true,
      },
      orderBy: { id: "desc" },
    });

    const count = await prisma.order.count({ where });

   
  } catch (error) {
    console.error("report orders API error", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
