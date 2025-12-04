"use server";

import prisma from "@/lib/db";
import bcrypt from "bcryptjs";

export async function loginAction(formData: FormData) {
  const loginUserId = formData.get("loginUserId")?.toString();
  const password = formData.get("password")?.toString();

  console.log(password)

  if (!loginUserId || !password) {
    return { error: "All fields are required" };
  }

  const user = await prisma.user.findUnique({
    where: { loginUserId },
  });

  if (!user) return { error: "Invalid User ID" };

  const isMatch = await bcrypt.compare(password, user.password || "");
  if (!isMatch) return { error: "Incorrect password" };

  return {
    success: true,
    user: {
      id: user.id,
      fullName: user.fullName,
      role: user.role,
    },
  };
}