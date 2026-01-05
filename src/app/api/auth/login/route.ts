import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { loginUserId, password } = await req.json();

    if (!loginUserId || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { loginUserId },
    });

    if (!user) {
      return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });
    }

    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch) {
      return NextResponse.json({ error: "Incorrect password" }, { status: 400 });
    }

    
  

    
    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        fullName: user.fullName,
        role: user.role,
        email:user.email,
        phone:user.phone,
      },
    });

  } catch (err) {
    console.error("LOGIN API ERROR:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}