"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/dashboard",
        visible: [
          "SUPER_ADMIN",
          "ADMIN",
          "FACTORY",
          "EMPLOYEE",
          "FRANCHISE",
          "CUSTOMER",
        ],
      },
      {
        icon: "/product.png",
        label: "Products",
        href: "/list/product",
        visible: [
          "SUPER_ADMIN",
          "ADMIN",
          "FRANCHISE",
          "FACTORY",
          "EMPLOYEE",
          "CUSTOMER",
        ],
      },
      {
        icon: "/franchise.png",
        label: "Franchise",
        href: "/list/franchise",
        visible: ["SUPER_ADMIN", "ADMIN", "EMPLOYEE"],
      },
      {
        icon: "/franchise.png",
        label: "Franchise Enquiry",
        href: "/list/enquiry",
        visible: ["SUPER_ADMIN", "ADMIN", "EMPLOYEE"],
      },
      {
        icon: "/customer.png",
        label: "Customer",
        href: "/list/customer",
        visible: ["SUPER_ADMIN", "ADMIN", "EMPLOYEE", "FRANCHISE"],
      },
      {
        icon: "/order.png",
        label: "Order Details",
        href: "/list/order",
        visible: [
          "SUPER_ADMIN",
          "ADMIN",
          "FACTORY",
          "EMPLOYEE",
          "FRANCHISE",
          "CUSTOMER",
        ],
      },
      {
        icon: "/customer.png",
        label: "User Details",
        href: "/list/user",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        icon: "/salesReport.png",
        label: "Order Report",
        href: "/reports",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      // {
      //   icon: "/salesReport.png",
      //   label: "Report",
      //   href: "/reports/sales",
      //   visible: ["SUPER_ADMIN", "ADMIN"],
      // },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: [
          "SUPER_ADMIN",
          "ADMIN",
          "FACTORY",
          "EMPLOYEE",
          "FRANCHISE",
          "CUSTOMER",
        ],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        visible: [
          "SUPER_ADMIN",
          "ADMIN",
          "FACTORY",
          "EMPLOYEE",
          "FRANCHISE",
          "CUSTOMER",
        ],
      },
    ],
  },
];

const Menu = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Read from localStorage
  useEffect(() => {
    if (!mounted) return;
    const storedRole = localStorage.getItem("role");
    setRole(storedRole || "");
  }, [mounted]);

  // ✅ Clear localStorage on logout
  const handleLogout = () => {
    localStorage.clear();
    router.replace("/login");
  };

  if (!mounted) return null;

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2" key={section.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {section.title}
          </span>

          {section.items.map((item) => {
            if (!item.visible.includes(role)) return null;

            if (item.label === "Logout") {
              return (
                <button
                  key={item.label}
                  onClick={handleLogout}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight w-full"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </button>
              );
            }

            return (
              <Link
                href={item.href!}
                key={item.label}
                className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
              >
                <Image src={item.icon} alt="" width={20} height={20} />
                <span className="hidden lg:block">{item.label}</span>
              </Link>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
