// "use client";

// import Link from "next/link";
// import Image from "next/image"
// import { role } from "@/lib/data1";
// // import { getUser } from "@/lib/server/auth";

// // const { role, fullName } = getUser();

// const menuItems = [
//   {
//     title: "MENU",
//     items: [
//       {
//         icon: "/home.png",
//         label: "Dashboard",
//         href: "/dashboard",
//         visible: ["SUPER_ADMIN","ADMIN","FACTORY","INSALES","FRANCHISE","CUSTOMER"],
//       },
//       {
//         icon: "/product.png",
//         label: "Products",
//         href: "/list/product",
//         visible: ["SUPER_ADMIN","ADMIN","FRANCHISE","FACTORY","EMPLOYEE","CUSTOMER"],
//       },
//       {
//         icon: "/franchise.png",
//         label: "Franchise",
//         href: "/list/franchise",
//         visible: ["SUPER_ADMIN","ADMIN"],
//       },
//       {
//         icon: "/order.png",
//         label: "Order Details",
//         href: "/list/order",
//         visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
//       },
//       {
//         icon: "/customer.png",
//         label: "Customer",
//         href: "/list/customer",
//         visible: ["SUPER_ADMIN","ADMIN","EMPLOYEE","FRANCHISE","CUSTOMER"],
//       },
//       {
//         icon: "/customer.png",
//         label: "User Details",
//         href: "/list/user",
//         visible: ["SUPER_ADMIN","ADMIN"],
//       },
//       // {
//       //   icon: "/payment.png",
//       //   label: "Payment",
//       //   href: "/list/payment",
//       //   visible: ["superAdmin", "admin", "customer"],
//       // },
      
//     ],
//   },
//   // {
//   //   title: "REPORTS",
//   //   items: [
//   //     {
//   //       icon: "/salesReport.png",
//   //       label: "Product Report",
//   //       href: "/reports/product",
//   //       visible: ["superAdmin", "admin"],
//   //     },
//   //     {
//   //       icon: "/salesReport.png",
//   //       label: "Sale Report",
//   //       href: "/reports/sales",
//   //       visible: ["superAdmin", "admin"],
//   //     },
//   //     {
//   //       icon: "/customerReport.png",
//   //       label: "Customer Report",
//   //       href: "/reports/customer",
//   //       visible: ["superAdmin", "admin"],
//   //     },
//   //     {
//   //       icon: "/franchiseReport.png",
//   //       label: "Franchise Report",
//   //       href: "/reports/franchise",
//   //       visible: ["superAdmin", "admin"],
//   //     },
//   //     {
//   //       icon: "/franchiseReport.png",
//   //       label: "Order Report",
//   //       href: "/reports/order",
//   //       visible: ["superAdmin", "admin"],
//   //     },
//   //     {
//   //       icon: "/franchiseReport.png",
//   //       label: "Payment Report",
//   //       href: "/reports/payment",
//   //       visible: ["superAdmin", "admin"],
//   //     },
//   //   ],
//   // },
//   {
//     title: "OTHER",
//     items: [
//       {
//         icon: "/profile.png",
//         label: "Profile",
//         href: "/profile",
//         visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
//       },
//       // {
//       //   icon: "/setting.png",
//       //   label: "Settings",
//       //   href: "/settings",
//       //   visible: ["superAdmin", "admin", "inSales", "cusomer", "franchise"],
//       // },
//       {
//         icon: "/logout.png",
//         label: "Logout",
//         href: "/",
//         visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
//       },
//     ],
//   },
// ];

// const Menu =() => {
//   return (
//     <div className="mt-4 text-sm">
//       {menuItems.map((i) => (
//         <div className="flex flex-col gap-2" key={i.title}>
//           <span className="hidden lg:block text-gray-400 font-light my-4">
//             {i.title} 
//             </span>
//           {i.items.map((item) => {
//             if (item.visible.includes(role)) {
//               return (
//                 <Link
//                   href={item.href}
//                   key={item.label}
//                   className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
//                 >
//                   <Image src={item.icon} alt="" width={20} height={20} />
//                   <span className="hidden lg:block">{item.label}</span>
//                 </Link>
//               );
//             }
//           })}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default Menu;

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
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
      {
        icon: "/product.png",
        label: "Products",
        href: "/list/product",
        visible: ["SUPER_ADMIN","ADMIN","FRANCHISE","FACTORY","EMPLOYEE","CUSTOMER"],
      },
      {
        icon: "/franchise.png",
        label: "Franchise",
        href: "/list/franchise",
        visible: ["SUPER_ADMIN","ADMIN"],
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
        visible: ["SUPER_ADMIN","ADMIN","EMPLOYEE","FRANCHISE"],
      },
      {
        icon: "/customer.png",
        label: "User Details",
        href: "/list/user",
        visible: ["SUPER_ADMIN","ADMIN"],
      },
<<<<<<< HEAD
      
      
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        icon: "/salesReport.png",
        label: "Product Report",
        href: "/reports/product",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      // {
      //   icon: "/salesReport.png",
      //   label: "Sale Report",
      //   href: "/reports/sales",
      //   visible: ["SUPER_ADMIN", "ADMIN"],
      // },
      {
        icon: "/customerReport.png",
        label: "Customer Report",
        href: "/reports/customer",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
    //   {
    //     icon: "/franchiseReport.png",
    //     label: "Franchise Report",
    //     href: "/reports/franchise",
    //     visible: ["SUPER_ADMIN", "ADMIN"],
    //   },
    //   {
    //     icon: "/franchiseReport.png",
    //     label: "Order Report",
    //     href: "/reports/order",
    //     visible: ["SUPER_ADMIN", "ADMIN"],
    //   },
    //   {
    //     icon: "/franchiseReport.png",
    //     label: "Payment Report",
    //     href: "/reports/payment",
    //     visible: ["SUPER_ADMIN", "ADMIN"],
    //   },
    ],
  },
=======
      {
        icon: "/customer.png",
        label: "Factory",
        href: "/list/factory",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY"],
      },
    ],
  },
  {
    title: "REPORTS",
    items: [
      {
        icon: "/salesReport.png",
        label: "Product Report",
        href: "/reports/product",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      {
        icon: "/salesReport.png",
        label: "Sale Report",
        href: "/reports/sales",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      {
        icon: "/customerReport.png",
        label: "Customer Report",
        href: "/reports/customer",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      {
        icon: "/franchiseReport.png",
        label: "Franchise Report",
        href: "/reports/franchise",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      {
        icon: "/franchiseReport.png",
        label: "Order Report",
        href: "/reports/order",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
      {
        icon: "/franchiseReport.png",
        label: "Payment Report",
        href: "/reports/payment",
        visible: ["SUPER_ADMIN", "ADMIN"],
      },
    ],
  },
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
  {
    title: "OTHER",
    items: [
      {
        icon: "/profile.png",
        label: "Profile",
        href: "/profile",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
      {
        icon: "/logout.png",
        label: "Logout",
        visible: ["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"],
      },
    ],
  },
];

const Menu = () => {
  const router = useRouter();
  const [role, setRole] = useState<string>("");
  const [mounted, setMounted] = useState(false);

  // ✅ Detect client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const storedRole = sessionStorage.getItem("role");
    setRole(storedRole || "");
  }, [mounted]);

  const handleLogout = () => {
    sessionStorage.clear();
    router.push("/");
  };

  if (!mounted) return null; // prevent hydration mismatch

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