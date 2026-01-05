"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

type SessionUser = {
  id: string;
  role: string;
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
};

const Navbar = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [mounted, setMounted] = useState(false);
  const [user, setUser] = useState<SessionUser | null>(null);

  const userRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Read from localStorage (NOT sessionStorage)
  useEffect(() => {
    if (!mounted) return;

    const name = localStorage.getItem("fullName");
    const r = localStorage.getItem("role");

    console.log('Nav Page');
    console.log(name);
    console.log(r);

    // ❌ DO NOT redirect here — RoleWrapper already handles auth
    if (!name || !r) return;

    setFullName(name);
    setRole(r);
  }, [mounted]);

  // ✅ Logout must clear localStorage
  const handleLogout = () => {
    localStorage.clear();
    router.replace("/login");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex items-center justify-between p-4 relative">
      {/* Search */}
      <div className="hidden md:flex items-center gap-2 tex-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search.."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div ref={userRef} className="relative">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setUserOpen(!userOpen)}
          >
            <div className="flex flex-col text-right">
              <span className="text-xs leading-3 font-medium">{fullName}</span>
              <span className="text-[10px] text-gray-500 text-right">{role}</span>
            </div>

            <Image
              src="/avatar.png"
              alt=""
              width={36}
              height={36}
              className="rounded-full border cursor-pointer"
            />
          </div>

          {userOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-xl rounded-md w-40 py-2 z-50">
              <Link
                href="/profile"
                className="block px-4 py-2 hover:bg-gray-100 text-sm"
              >
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
