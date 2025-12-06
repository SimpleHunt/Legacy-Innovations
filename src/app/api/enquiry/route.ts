import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import fs from "fs";
import path from "path";

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
    const sortBy = searchParams.get("sortBy") || "enquiryID";
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

    const [enquiry, count] = await prisma.$transaction([
      prisma.enquiry.findMany({
        where,
        orderBy: { [sortBy]: sortOrder },
        take,
        skip: take * (page - 1),
      }),

      prisma.enquiry.count({ where }),
    ]);

    return NextResponse.json({ enquiry, count });

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
      ownerName,
      ownerEmail,
      ownerPhone,
      address,
    } = body;


    // 🔥 Use transaction to ensure atomic inserts
    const result = await prisma.$transaction(async (tx) => {    

      // CREATE enquiry
    const enquiry = await prisma.enquiry.create({
      data: {
       
          name,
          ownerName,
          ownerEmail,
          ownerPhone,
          address,
          status: 1,
          
        
      },
    });

     
      return { enquiry };
    });

    return NextResponse.json(result, { status: 201 });
  } catch (err: any) {
  console.log("Error creating enquiry:", err);

  // Prisma unique constraint error
  if (err.code === "P2002") {
    const target = err.meta?.target?.[0];

    let message = "Duplicate value";

    if (target === "ownerEmail" || target === "email") {
      message = "Email already exists!";
    } else if (target === "ownerPhone" || target === "phone") {
      message = "Phone number already exists!";
    } else if (target === "name" || target === "loginUserId") {
      message = "Username is already taken!";
    }

    return NextResponse.json({ error: message }, { status: 400 });
  }

  // Other errors
  return NextResponse.json({ error: "Something went wrong!" }, { status: 500 });
}
}
