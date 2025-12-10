import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET() {
  try {
    const totalOrders = await prisma.order.count();
    const totalProducts = await prisma.product.count();
    const totalCustomers = await prisma.customer.count();
    const totalFranchise = await prisma.franchise.count();
    const totalInsideSales = await prisma.user.count({ where: { role: "EMPLOYEE" } });

    const pending = await prisma.order.count({ where: { status: "Pending" } });
    const started = await prisma.order.count({ where: { status: "Started" } });
    const interiorPhase = await prisma.order.count({ where: { status: "Interior Phase" } });
    const completed = await prisma.order.count({ where: { status: "Completed" } });
    const outForDelivery = await prisma.order.count({ where: { status: "Out For Delivery" } });

    // defect count: either explicit status or defect flag
    const defect = await prisma.order.count({
      where: {
        OR: [
          { status: "Defect - Replacement" },
          { defectedStatus: 1 },
        ],
      },
    });

    return NextResponse.json({
      summary: {
        totalOrders,
        totalProducts,
        totalCustomers,
        totalFranchise,
        totalInsideSales,
      },
      statusCounts: {
        pending,
        started,
        interiorPhase,
        completed,
        outForDelivery,
        defect,
      },
    });
  } catch (error) {
    console.error("dashboard API error", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
