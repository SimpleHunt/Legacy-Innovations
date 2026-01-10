import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const take = Number(searchParams.get("take")) || 10;
    const search = searchParams.get("search") || "";
    const sortBy = searchParams.get("sortBy") || "id";
    const sortOrder = searchParams.get("sortOrder") || "desc";
    const status = searchParams.get("status"); 

    const createdBy = searchParams.get("createdBy");  // FRANCHISE
    const customerId = searchParams.get("customerId"); // CUSTOMER
    const role = searchParams.get("role");             // ROLE

    const where: any = {};

    // =============================
    // ROLE BASED FILTERING
    // =============================

    // 1️⃣ CUSTOMER → filter by customerId
    if (role === "CUSTOMER" && customerId) {
      where.customerId = Number(customerId);
    }

    // 2️⃣ FRANCHISE → filter by createdBy
    else if (role === "FRANCHISE" && createdBy) {
      where.createdBy = Number(createdBy);
    }

    // 3️⃣ FACTORY → show full list (unless you want filter)
    else if (role === "FACTORY") {
      // no where filters
    }

    // 4️⃣ ADMIN / SUPER_ADMIN → show all
    else if (role === "ADMIN" || role === "SUPER_ADMIN") {
      // no where filters
    }

    // 5️⃣ Default safety (other roles)
    else if (createdBy) {
      where.createdBy = Number(createdBy);
    }

    // FILTER LOGIC
    if (status && status !== "All") {
      where.status = status; // Pending / Processing / Completed
    }

    // =============================
    // SEARCH FILTERS
    // =============================

    if (search) {
      where.OR = [
        { orderNumber: { contains: search, mode: "insensitive" } },
        { customer: { name: { contains: search, mode: "insensitive" } } },
        { product: { name: { contains: search, mode: "insensitive" } } },
      ];
    }

    // =============================
    // FETCH DATA
    // =============================

    const [orders, count] = await prisma.$transaction([
      prisma.order.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        skip: (page - 1) * take,
        take,
        include: {
          //customer: true,
          //product: true,
        },
      }),
      prisma.order.count({ where }),
    ]);

    return NextResponse.json({ orders, count });

  } catch (err: any) {
    console.error("🔴 ORDER API ERROR:", err);
    return NextResponse.json(
      { error: "Server error", details: err.message },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      orderNumber,
      customerId,
      climate,
      terrain,
      description,
      createdBy,
      employeeId,
      franchiseId,
      items,
    } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: "No products provided" },
        { status: 400 }
      );
    }

    // ✅ INSERT ORDERS ONE BY ONE (SAME ORDER NUMBER)
    const createdOrders = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      const uniqueOrderNumber = `${orderNumber}-${i + 1}`;

      const order = await prisma.order.create({
        data: {
          orderNumber: uniqueOrderNumber,
          customerId,
          productId: item.productId,

          climate: item.climate ?? climate,
          terrain: item.terrain ?? terrain,
          description: item.description ?? description,

          quantity: item.stock,
          unitPrice: item.unitPrice,
          discount: item.discount,
          unitPriceCost: item.unitPriceCost,
          gstPercentage: item.gstPercent,
          gstAmount: item.gstAmount,
          totalAmount: item.totalAmount,

          defectedStatus: 0,                    
          discountDate: new Date(),

          createdBy,
          employeeId,
          franchiseId,
        },
      });

      createdOrders.push(order);
    }

    return NextResponse.json(
      {
        success: true,
        count: createdOrders.length,
        orderNumber,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("ORDER INSERT ERROR:", error);
    return NextResponse.json(
      { error: "Failed to create orders" },
      { status: 500 }
    );
  }
}
