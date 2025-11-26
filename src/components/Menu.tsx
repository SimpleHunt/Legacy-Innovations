"use client";

import Link from "next/link";
import Image from "next/image"
import { role } from "@/lib/data1";
// import { getUser } from "@/lib/server/auth";

// const { role, fullName } = getUser();

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/dashboard",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
      {
        icon: "/product.png",
        label: "Products",
        href: "/list/product",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","CUSTOMER"],
      },
      {
        icon: "/franchise.png",
        label: "Franchise",
        href: "/list/franchise",
        visible: ["SUPER_ADMIN","ADMIN","FRANCHISE","CUSTOMER"],
      },
      {
        icon: "/order.png",
        label: "Order Details",
        href: "/list/order",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
      {
        icon: "/customer.png",
        label: "Customer",
        href: "/list/customer",
        visible: ["SUPER_ADMIN","ADMIN","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
      {
        icon: "/customer.png",
        label: "User Details",
        href: "/list/user",
        visible: ["SUPER_ADMIN","ADMIN"],
      },
      // {
      //   icon: "/payment.png",
      //   label: "Payment",
      //   href: "/list/payment",
      //   visible: ["superAdmin", "admin", "customer"],
      // },
      
    ],
  },
  // {
  //   title: "REPORTS",
  //   items: [
  //     {
  //       icon: "/salesReport.png",
  //       label: "Product Report",
  //       href: "/reports/product",
  //       visible: ["superAdmin", "admin"],
  //     },
  //     {
  //       icon: "/salesReport.png",
  //       label: "Sale Report",
  //       href: "/reports/sales",
  //       visible: ["superAdmin", "admin"],
  //     },
  //     {
  //       icon: "/customerReport.png",
  //       label: "Customer Report",
  //       href: "/reports/customer",
  //       visible: ["superAdmin", "admin"],
  //     },
  //     {
  //       icon: "/franchiseReport.png",
  //       label: "Franchise Report",
  //       href: "/reports/franchise",
  //       visible: ["superAdmin", "admin"],
  //     },
  //     {
  //       icon: "/franchiseReport.png",
  //       label: "Order Report",
  //       href: "/reports/order",
  //       visible: ["superAdmin", "admin"],
  //     },
  //     {
  //       icon: "/franchiseReport.png",
  //       label: "Payment Report",
  //       href: "/reports/payment",
  //       visible: ["superAdmin", "admin"],
  //     },
  //   ],
  // },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
      // {
      //   icon: "/setting.png",
      //   label: "Settings",
      //   href: "/settings",
      //   visible: ["superAdmin", "admin", "inSales", "cusomer", "franchise"],
      // },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "/",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
    ],
  },
];

const Menu =() => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {i.title} 
            </span>
          {i.items.map((item) => {
            if (item.visible.includes(role)) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <Image src={item.icon} alt="" width={20} height={20} />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  )
}

export default Menu;