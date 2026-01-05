"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSessionUser } from "@/lib/getSessionUser";

interface RoleWrapperProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export default function RoleWrapper({
  allowedRoles,
  children,
}: RoleWrapperProps) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // ✅ Delay auth check until client is fully ready
    const user = getSessionUser();

    if (!user || !user.id || !user.role) {
      // ✅ replace (not push) prevents back-navigation loops
      router.replace("/login");
      return;
    }

    setUserRole(user.role);
    setChecked(true);
  }, [router]);

  // ⏳ Wait until auth check completes
  if (!checked) return null;

  // 🚫 Role exists but not allowed
  if (!allowedRoles.includes(userRole!)) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">Unauthorized</h2>
        <p className="text-gray-600 mt-2">
          You don’t have access to this page.
        </p>
      </div>
    );
  }

  // ✅ Authorized
  return <>{children}</>;
}
