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

    const [users, count] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        take,
        skip: take * (page - 1),
      }),

      prisma.user.count({ where }),
    ]);

    return NextResponse.json({ users, count });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Accept numeric createdBy if provided; prisma will reject unknown props
    if (body.createdBy) body.createdBy = Number(body.createdBy);

    // Do not accept id/createdAt/updatedAt in body
    delete body.id;
    delete body.createdAt;
    delete body.updatedAt;

    const user = await prisma.user.create({ data: body });
    return NextResponse.json(user, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 400 });
  }
}
