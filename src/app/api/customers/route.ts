import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

// ---------------------- POST: Create Customer & User ----------------------
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      phone,
      address,
      loginUserId,
      password,
      createdBy,
      employeeId,
      franchiseId,
    } = body;

    if (!name || !loginUserId || !password) {
      return NextResponse.json(
        { error: "Name, username and password are required!" },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "Email already registered!" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          fullName: name,
          email,
          phone,
          loginUserId,
          password: hashedPassword,
          role: "CUSTOMER",
          isActive: true,
        },
      });

      const customer = await tx.customer.create({
        data: {
          name,
          email,
          phone,
          address,
          createdBy: createdBy ? Number(createdBy) : null,
          employee: employeeId ? { connect: { id: Number(employeeId) } } : undefined,
          franchise: franchiseId ? { connect: { id: Number(franchiseId) } } : undefined,
        },
      });

      return { user, customer };
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

// ---------------------- GET: List Customers ----------------------
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const page = Number(searchParams.get("page")) || 1;
    const take = Number(searchParams.get("take")) || 10;
    const search = searchParams.get("search") || "";
    const sortBy = searchParams.get("sortBy") || "id";
    const sortOrder = searchParams.get("sortOrder") || "desc";
    const role = searchParams.get("role");   

    const where: any = {};

    // 👇 IMPORTANT — receive logged-in user ID
    const createdBy = searchParams.get("createdBy");

    if (role === "ADMIN" || role === "SUPER_ADMIN") {
      
    }else{
    // ✔ filter by login user
        if (createdBy) {
          where.createdBy = Number(createdBy);
        }
    }
    

    // Search filter
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { phone: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    

    // Fetch all customers with pagination & count
    const [customers, count] = await prisma.$transaction([
      prisma.customer.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        take,
        skip: take * (page - 1),
      }),
      prisma.customer.count({ where }),
    ]);

    return NextResponse.json({ customers, count });
  } catch (err: any) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
