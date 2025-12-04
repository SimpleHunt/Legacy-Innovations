import { cookies } from "next/headers";

export async function getUserInfo() {
  const c = cookies();

  return {
    userId: c.get("userId")?.value ?? null,
    role: c.get("role")?.value ?? null,
  };
}

export async function getRole() {
  const c = cookies();
  return c.get("role")?.value ?? null;
}

export async function getUserId() {
  const c = cookies();
  return c.get("userId")?.value ?? null;
}
