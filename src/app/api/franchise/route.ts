import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    // PAGINATION
    const page = Number(searchParams.get("page")) || 1;
    const take = Number(searchParams.get("take")) || 10;

    // SEARCH
    const search = searchParams.get("search") || "";

    // FILTERS
    const isActive = searchParams.get("isActive"); // "true" | "false" | null

    // SORTING
    const sortBy = searchParams.get("sortBy") || "id";
    const sortOrder = searchParams.get("sortOrder") || "desc";

    const where: any = {};

    // SEARCH LOGIC
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { size: { contains: search, mode: "insensitive" } }
      ];
    }

    // FILTER LOGIC
    if (isActive === "true") where.isActive = true;
    if (isActive === "false") where.isActive = false;

    const [franchise, count] = await prisma.$transaction([
      prisma.franchise.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        take,
        skip: take * (page - 1),
      }),

      prisma.franchise.count({ where }),
    ]);

    return NextResponse.json({ franchise, count });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      name,
      code,
      ownerName,
      ownerEmail,
      ownerPhone,
      address,
      loginUserId,
      password,
      isActive
    } = body;

    // 🔥 Use transaction to ensure atomic inserts
    const result = await prisma.$transaction(async (tx) => {
      // 1️⃣ Create Franchise
      const franchise = await tx.franchise.create({
        data: {
          name,
          code,
          ownerName,
          ownerEmail,
          ownerPhone,
          address,
          isActive: isActive ?? true,
        }
      });

      // 2️⃣ Create User linked to Franchise
      const user = await tx.user.create({
        data: {
          fullName: name,
          phone: ownerPhone,
          email: ownerEmail,
          loginUserId,
          password,     
          //franchiseId: franchise.id,
          role: "FRANCHISE",  
          isActive: true,
        }
      });

      return { franchise, user };
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err) {
    console.log("Error creating franchise:", err);
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
