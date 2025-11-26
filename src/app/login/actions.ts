"use server";

import prisma from "@/lib/db";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const loginUserId = formData.get("loginUserId")?.toString();
  const password = formData.get("password")?.toString();
  console.log(formData)

  if (!loginUserId || !password) {
    return { error: "All fields are required" };
  }

  const user = await prisma.user.findUnique({
    where: { loginUserId },
    
  });
 

  if (!user) return { error: "Invalid User ID" };

  const isMatch = await bcrypt.compare(password, user.password || "");
  if (!isMatch) return { error: "Incorrect password" };

  // FIX: cast cookies() to any to remove TS error
  const cookieStore = cookies() as any;

  cookieStore.set("userId", String(user.id), { path: "/" });
  cookieStore.set("role", String(user.role), { path: "/" });
  cookieStore.set("fullName", String(user.fullName), { path: "/" });

  return { success: true, role: user.role };
}