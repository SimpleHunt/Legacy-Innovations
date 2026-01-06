"use client";

import Announcements from "@/components/Announcements";
import FormModal from "@/components/FromModel";
import Performance from "@/components/Performance";
import { getSessionUser } from "@/lib/getSessionUser";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "http://72.61.238.253:3001";

// 🔹 Session user type
type SessionUser = {
  id: string;
  role: string;
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
};

// 🔹 Count helper
async function getCount(tableName: string) {
  const res = await fetch(`${baseUrl}/api/${tableName}`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data.count;
}

const ProfilePage = () => {
  const [user, setUser] = useState<SessionUser | null>(null);

  // 🔹 Load session ONCE
  useEffect(() => {
    const sessionUser = getSessionUser();
    if (!sessionUser) return;

    setUser(sessionUser);
  }, []);

  // 🔹 Optional: load counts (kept for future use)
  useEffect(() => {
    if (!user) return;

    async function fetchCounts() {
      try {
        await Promise.all([
          getCount("products"),
          getCount("franchise"),
          getCount("customers"),
          getCount("orders"),
        ]);
      } catch (err) {
        console.error("Error fetching counts:", err);
      }
    }

    fetchCounts();
  }, [user]);

  if (!user) return null;

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* USER INFO */}
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">
                  Name: {user.fullName || "-"}
                </h1>
              </div>

              <p className="text-sm text-gray-500">
                Login Role: {user.role}
              </p>

              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/mail.png" alt="" width={14} height={14} />
                  <span>{user.email || "-"}</span>
                </div>

                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image src="/phone.png" alt="" width={14} height={14} />
                  <span>{user.phone || "-"}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>

          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href="/list/product"
            >
              Product&apos;s Details
            </Link>

            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href="/list/order"
            >
              Order&apos;s Details
            </Link>

            <Link
              className="p-3 rounded-md bg-pink-50"
              href="/list/customer"
            >
              Customer&apos;s Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
