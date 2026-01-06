import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import fs from "fs";
import path from "path";



import { writeFile } from "fs/promises";


export async function GET(req: Request) {
  try {

    console.log("Franchise API hit");
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




export async function POST(req: Request) {
  try {
    const form = await req.formData();

    const last = await prisma.franchise.findFirst({
      orderBy: { code: "desc" }
    });

    const lastCode = last?.code || "LI-FC-000";
    const lastNumber = parseInt(lastCode.replace("LI-FC-", ""), 10) || 0;
    const nextNumber = lastNumber + 1;
    const newCode = `LI-FC-${String(nextNumber).padStart(3, "0")}`;

    const name = form.get("name") as string;
    const code = newCode;
    const ownerName = form.get("ownerName") as string;
    const ownerEmail = form.get("ownerEmail") as string;
    const ownerPhone = form.get("ownerPhone") as string;
    const address = form.get("address") as string;
    const loginUserId = form.get("loginUserId") as string;
    const password = form.get("password") as string;

    // File saving helper
    async function saveFile(file: File | null, folder: string) {
      if (!file) return null;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadDir = path.join(process.cwd(), "public/uploads/franchise", folder);

      const filename = `${Date.now()}-${file.name.replace(/\s/g, "")}`;

      const filePath = path.join(uploadDir, filename);

      await writeFile(filePath, buffer);

      return `/uploads/franchise/${folder}/${filename}`;
    }

    // Save files to correct folders
    const companyProfile = await saveFile(form.get("companyProfile") as unknown as File, "profile");
    const companyKyc = await saveFile(form.get("companyKyc") as unknown as File, "kyc");
    const bankDetails = await saveFile(form.get("bankDetails") as unknown as File, "bank");
    const itrDocs = await saveFile(form.get("itrDocs") as unknown as File, "itr");

    const result = await prisma.$transaction(async (tx) => {

      const franchise = await prisma.franchise.create({
      data: {
        name,
          code: newCode,
          ownerName,
          ownerEmail,
          ownerPhone,
          address,
          isActive: true,
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
