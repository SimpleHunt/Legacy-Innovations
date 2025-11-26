import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { loginUserId, password } = await req.json();

    console.log(loginUserId)

    if (!loginUserId || !password) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { loginUserId },
    });

    if (!user) return NextResponse.json({ error: "Invalid User ID" }, { status: 400 });

    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch) return NextResponse.json({ error: "Incorrect password" }, { status: 400 });

    // 🔥 Set cookies using NextResponse
    const res = NextResponse.json({ success: true, role: user.role });

    res.cookies.set("userId", String(user.id), { path: "/" });
    res.cookies.set("role", String(user.role), { path: "/" });
    res.cookies.set("fullName", String(user.fullName), { path: "/" });

    return res;
  } catch (err) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}