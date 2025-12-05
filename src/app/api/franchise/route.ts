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
      ownerName,
      ownerEmail,
      ownerPhone,
      address,
      loginUserId,
      password,
      isActive
    } = body;

    // // FILE HANDLING FUNCTION
    // const saveFile = async (file: File | null, folder: string) => {
    //   if (!file) return null;

    //   const uploadDir = path.join(process.cwd(), "public/uploads/franchise", folder);
    //   if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    //   const filePath = path.join(uploadDir, file.name);

    //   const arrayBuffer = await file.arrayBuffer();
    //   const buffer = Buffer.from(arrayBuffer);

    //   fs.writeFileSync(filePath, buffer);

    //   return `/uploads/franchise/${folder}/${file.name}`;
    // };

    // // Save each file
    // const companyProfile = await saveFile(body.get("companyProfile") as File | null, "profile");
    // const companyKyc = await saveFile(body.get("companyKyc") as File | null, "kyc");
    // const bankDetails = await saveFile(body.get("bankDetails") as File | null, "bank");
    // const itrDocs = await saveFile(body.get("itrDocs") as File | null, "itr");

    const companyProfile ="companyProfile";
    const companyKyc ="companyProfile";
    const bankDetails ="companyProfile";
    const itrDocs ="companyProfile";

    const last = await prisma.franchise.findFirst({
      orderBy: { code: "desc" }
    });

    const lastCode = last?.code || "LI-FC-000";
    const lastNumber = parseInt(lastCode.replace("LI-FC-", ""), 10) || 0;
    const nextNumber = lastNumber + 1;
    const newCode = `LI-FC-${String(nextNumber).padStart(3, "0")}`;
    

    // 🔥 Use transaction to ensure atomic inserts
    const result = await prisma.$transaction(async (tx) => {
      // 1️⃣ Create Franchise
      // const franchise = await tx.franchise.create({
      //   data: {
      //     name,
      //     code: newCode,
      //     ownerName,
      //     ownerEmail,
      //     ownerPhone,
      //     address,
      //     isActive: isActive ?? true,
      //   }
      // });

      // CREATE FRANCHISE
    const franchise = await prisma.franchise.create({
      data: {
        name,
          code: newCode,
          ownerName,
          ownerEmail,
          ownerPhone,
          address,
          isActive: isActive ?? true,
          companyProfile,
          companyKyc,
          bankDetails,
          itrDocs,
        
      },
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
  } catch (err: any) {
  console.log("Error creating franchise:", err);

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
