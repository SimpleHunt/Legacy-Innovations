"use client";

import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/getSessionUser";
import UserCard from "@/components/UserCard";
import AttendanceChart from "@/components/AttendanceChart";
import FanchiseChart from "@/components/FanchiseChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function DashboardClient() {
    const [user, setUser] = useState<any>(null);
  const [counts, setCounts] = useState({
    products: 0,
    franchise: 0,
    customers: 0,
    orders: 0,
    enquiry: 0
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const user = getSessionUser(); // <- YOUR session reader

      setUser(user);

        if (!user) return;

    const isAdmin = user.role === "SUPER_ADMIN" || user.role === "ADMIN";

      async function getCount(table: string) {
            let url = `${baseUrl}/api/${table}`;

            // ADMIN + SUPER ADMIN 
            if (isAdmin) {
                url = `${baseUrl}/api/${table}`;
            }
            // filter by createdBy
            else if (user.role === "FRANCHISE" || user.role === "EMPLOYEE") {
                url = `${baseUrl}/api/${table}?createdBy=${user.id}`;
            }
            
           
            else if (user.role === "CUSTOMER") {

              const customerRes = await fetch(
                `${baseUrl}/api/customers/emailID?email=${user.email}`,
                { cache: "no-store" }
              );
              const customer = await customerRes.json();
              url = `${baseUrl}/api/${table}?customerId=${customer.id}&role=CUSTOMER`;
            }
            console.log(url)
            const res = await fetch(url, { cache: "no-store" });
            const data = await res.json();
            return data.count;
            }

      const [products, franchise, customers, orders, enquiry] = await Promise.all([
        getCount("products?&isActive=true"),
        getCount("franchise"),
        getCount("customers"),
        getCount("orders"),
        getCount("enquiry"),
      ]);

      setCounts({ products, franchise, customers, orders, enquiry });
    };

    fetchCounts();
  }, []);
  if (!user) return null;

  const isAdmin = user.role === "SUPER_ADMIN" || user.role === "ADMIN";

  return (
    
    <div className="flex flex-col min-h-screen">

  {/* CONTENT (scrolls if needed) */}
  <div className="p-4 flex gap-4 flex-col md:flex-row flex-1 overflow-auto">

    {/* LEFT SIDE */}
    <div className="w-full lg:w-2/3 flex flex-col gap-8">

      <div className="flex gap-4 justify-between flex-wrap">
        <UserCard type="Product" data={{ count: counts.products }} />
        <UserCard type="Order" data={{ count: counts.orders }} />

        {user.role !== "CUSTOMER" && user.role !== "FACTORY" && (
          <UserCard type="Customer" data={{ count: counts.customers }} />
        )}

        {user.role !== "FRANCHISE" &&
          user.role !== "FACTORY" &&
          user.role !== "CUSTOMER" &&
          (
            <UserCard type="Franchise" data={{ count: counts.franchise }} />
              
            
          )}
          
          {user.role !== "FRANCHISE" &&
          user.role !== "FACTORY" &&
          user.role !== "CUSTOMER" &&
          (
            <UserCard type="enquiry" data={{ count: counts.enquiry }} />
              
            
          )}
           
         
          
      </div>

      {isAdmin && (
        <>
          {/* <div className="flex gap-4 flex-col lg:flex-row">
            <div className="w-full lg:w-1/3 h-[450px]">
              <CountChart />
            </div>
          </div> */}
        </>
      )}
    </div>

    {/* RIGHT SIDE */}
    <div className="w-full lg:w-1/3 flex flex-col gap-8">
      <EventCalendar />
    </div>
  </div>

 

</div>

  );
}
