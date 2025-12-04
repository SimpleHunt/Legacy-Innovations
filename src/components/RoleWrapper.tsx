"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getSessionUser } from "@/lib/getSessionUser";

interface RoleWrapperProps {
  allowedRoles: string[];
  children: React.ReactNode;
}

export default function RoleWrapper({ allowedRoles, children }: RoleWrapperProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [userRole, setUserRole] = useState<string>("");

  useEffect(() => {
    const user = getSessionUser();

    
    if (!user?.id || !user?.role) {
      router.push("/login");
      return;
    }

    setUserRole(user.role);
    setLoading(false);
  }, [router]);

  if (loading) return null;

  if (!allowedRoles.includes(userRole)) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-600">Unauthorized</h2>
        <p className="text-gray-600 mt-2">You don’t have access to this page.</p>
      </div>
    );
  }

  // 👍 Authorized → allow the page to render
  return <>{children}</>;
}
