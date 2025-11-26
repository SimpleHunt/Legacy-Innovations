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

    const [products, count] = await prisma.$transaction([
      prisma.product.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        take,
        skip: take * (page - 1),
      }),

      prisma.product.count({ where }),
    ]);

    return NextResponse.json({ products, count });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.createdById) body.createdById = Number(body.createdById);
    delete body.id;
    const created = await prisma.product.create({ data: body });
    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
