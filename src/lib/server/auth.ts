"use server"

import { cookies } from "next/headers";

export async function getUser() {
  const store = await cookies();
  
  return {
    userId: store.get("userId")?.value || null,
    role: store.get("role")?.value || null,
  };
}