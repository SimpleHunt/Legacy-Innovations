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
<<<<<<< HEAD
        include: {
          customer: true,
          product: true,
        },
=======
        skip: take * (page - 1),
        include: {
           customer: true,
           product: true,
         }
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

<<<<<<< HEAD
    const required = ["orderNumber", "customerId", "productId", "totalAmount"];
    const missing = required.filter((key) => !body[key]);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Convert to numbers
    body.customerId = Number(body.customerId);
    body.productId = Number(body.productId);
    if (body.createdBy) body.createdBy = Number(body.createdBy);

    // Date conversion
    if (body.expectedDeliveryDate) {
      body.expectedDeliveryDate = new Date(body.expectedDeliveryDate);
    }

    delete body.id; // important for create()

=======
    // convert integer relation ids
    if (body.productId) body.productId = Number(body.productId);
    if (body.customerId) body.customerId = Number(body.customerId);
    if (body.franchiseId) body.franchiseId = Number(body.franchiseId);
    if (body.employeeId) body.employeeId = Number(body.employeeId);
    console.log(body)
    delete body.id;
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
    const created = await prisma.order.create({ data: body });

    return NextResponse.json(created, { status: 201 });

  } catch (err: any) {
    console.error("❌ Error creating order:", err);
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
