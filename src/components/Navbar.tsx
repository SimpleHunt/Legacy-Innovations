"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [userOpen, setUserOpen] = useState(false);
  const [notifyOpen, setNotifyOpen] = useState(false);

  const userRef = useRef<HTMLDivElement>(null);
  const notifyRef = useRef<HTMLDivElement>(null);

  const router = useRouter();

  // -------- LOGOUT FUNCTION --------
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });

      router.replace("/login"); // redirect to login
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserOpen(false);
      }
      if (notifyRef.current && !notifyRef.current.contains(e.target as Node)) {
        setNotifyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between p-4 relative">
      {/* Search Bar */}
      <div className="hidden md:flex items-center gap-2 tex-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
        <Image src="/search.png" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search.."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-6 justify-end w-full">
        {/* Message Icon */}
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>

        {/* Notification */}
        <div ref={notifyRef} className="relative">
          <div
            className="relative bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer"
            onClick={() => setNotifyOpen(!notifyOpen)}
          >
            <Image src="/announcement.png" alt="" width={20} height={20} />

            <div className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center 
                            bg-purple-500 text-white rounded-full text-[10px]">
              1
            </div>
          </div>

          {notifyOpen && (
            <div className="absolute right-0 top-10 bg-white shadow-lg rounded-md w-56 py-2 z-50">
              <div className="px-4 py-2 text-sm text-gray-600 border-b font-medium">
                Notifications
              </div>

              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                New order received
              </div>

              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                Franchise request pending
              </div>

              <div className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
                System update available
              </div>
            </div>
          )}
        </div>

        {/* USER DROPDOWN */}
        <div ref={userRef} className="relative">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setUserOpen(!userOpen)}
          >
            <div className="flex flex-col text-right">
              <span className="text-xs leading-3 font-medium">Super Admin</span>
              <span className="text-[10px] text-gray-500 text-right">Admin</span>
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

              {/* LOGOUT BUTTON */}
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