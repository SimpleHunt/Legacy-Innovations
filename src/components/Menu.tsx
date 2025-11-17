import Link from "next/link";
import Image from "next/image"
import { role } from "@/lib/data";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: "/home.png",
        label: "Dashboard",
        href: "/dashboard",
        visible: ["superAdmin", "admin", "inSales", "cusomer", "franchise"],
      },
      {
        icon: "/product.png",
        label: "Products",
        href: "/list/product",
        visible: ["admin", "inSales", "franchise"],
      },
      {
        icon: "/franchise.png",
        label: "Franchise",
        href: "/list/franchise",
        visible: ["superAdmin", "admin", "franchise"],
      },
      {
        icon: "/order.png",
        label: "Order Details",
        href: "/list/order",
        visible: ["superAdmin", "admin", "inSales", "customer"],
      },
      {
        icon: "/customer.png",
        label: "Customer",
        href: "/list/customer",
        visible: ["superAdmin", "admin", "customer"],
      },
      
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        icon: "/salesReport.png",
        label: "Sale Report",
        href: "/list/salereport",
        visible: ["superAdmin", "admin"],
      },
      {
        icon: "/customerReport.png",
        label: "Customer Report",
        href: "/list/customereport",
        visible: ["superAdmin", "admin"],
      },
      {
        icon: "/franchiseReport.png",
        label: "Franchise Report",
        href: "/list/franchisereport",
        visible: ["superAdmin", "admin"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["superAdmin", "admin", "inSales", "cusomer", "franchise"],
      },
      {
        icon: "/setting.png",
        label: "Settings",
        href: "/settings",
        visible: ["superAdmin", "admin", "inSales", "cusomer", "franchise"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        href: "../sign-in",
        visible: ["superAdmin", "admin", "inSales", "cusomer", "franchise"],
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