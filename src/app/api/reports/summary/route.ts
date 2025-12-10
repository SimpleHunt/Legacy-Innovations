import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

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
        const e = new Date(endDate);
        e.setHours(23, 59, 59, 999);
        where.createdAt.lte = e;
      }
    }

    // TOTAL ORDERS
    const totalOrders = await prisma.order.count({ where });

    // DISTINCT COUNTS USING findMany
    const productList = await prisma.order.findMany({
      where,
      select: { productId: true },
      distinct: ["productId"],
    });
    const totalProducts = productList.length;

    const customerList = await prisma.order.findMany({
      where,
      select: { customerId: true },
      distinct: ["customerId"],
    });
    const totalCustomers = customerList.length;

    const franchiseList = await prisma.order.findMany({
      where,
      select: { franchiseId: true },
      distinct: ["franchiseId"],
    });
    const totalFranchise = franchiseList.length;

    const employeeList = await prisma.order.findMany({
      where,
      select: { employeeId: true },
      distinct: ["employeeId"],
    });
    const totalInsideSales = employeeList.length;
    
    //  const employeeList = await prisma.order.findMany({
    //   where: {
    //     ...where,
    //     employee: {   // 👈 relation filter
    //       role: "Employee",
    //     },
    //   },
    //   select: { employeeId: true },
    //   distinct: ["employeeId"],
    // });

    // const totalInsideSales = employeeList.length;

    // console.log('Report Summary Page');
    // console.log(totalFranchise);

    // STATUS COUNTS
    const statusCounts = {
      pending: await prisma.order.count({ where: { ...where, status: "PENDING" } }),
      started: await prisma.order.count({ where: { ...where, status: "Started" } }),
      interiorPhase: await prisma.order.count({ where: { ...where, status: "Interior Phase" } }),
      completed: await prisma.order.count({ where: { ...where, status: "Completed" } }),
      outForDelivery: await prisma.order.count({ where: { ...where, status: "Out For Delivery" } }),
      defect: await prisma.order.count({
        where: {
          ...where, status: "Defect - Replacement"
          // OR: [
          //   { status: "Defect - Replacement" },
          //   { defectedStatus: 1 }
          // ]
        }
      }),
    };

    return NextResponse.json({
      summary: {
        totalOrders,
        totalProducts,
        totalCustomers,
        totalFranchise,
        totalInsideSales,
      },
      statusCounts,
    });

  } catch (error: any) {
    console.error("SUMMARY FILTER API ERROR:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
