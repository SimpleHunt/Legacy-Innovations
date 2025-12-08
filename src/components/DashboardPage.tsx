"use client";

import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/getSessionUser";
import UserCard from "@/components/UserCard";
import AttendanceChart from "@/components/AttendanceChart";
import FanchiseChart from "@/components/FanchiseChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

export default function DashboardClient() {
  const [user, setUser] = useState<any>(null);

  const [counts, setCounts] = useState({
    products: 0,
    franchise: 0,
    customers: 0,
    orders: 0,
    enquiry: 0,
  });

  const [orderStatusCount, setOrderStatusCount] = useState({
    pending: 0,
    started: 0,
    interior: 0,
    completed: 0,
    outDelivery: 0,
    defectReplace: 0,
  });

  useEffect(() => {
    const fetchCounts = async () => {
      const user = getSessionUser();
      setUser(user);
      if (!user) return;

      const isAdmin =
        user.role === "SUPER_ADMIN" || user.role === "ADMIN";

      
      async function getCount(table: string, params: any = {}) {
        let url = `${baseUrl}/api/${table}`;
        const query = new URLSearchParams();

        // ADMIN - no filter
        if (!isAdmin) {
          if (user.role === "FRANCHISE" || user.role === "EMPLOYEE") {
            query.append("createdBy", user.id);
          }

          if (user.role === "CUSTOMER") {
            const res = await fetch(
              `${baseUrl}/api/customers/emailID?email=${user.email}`,
              { cache: "no-store" }
            );
            const customer = await res.json();

            query.append("customerId", customer.id);
            query.append("role", "CUSTOMER");
          }
        }

        // Add additional params like status
        Object.keys(params).forEach((key) => {
          if (params[key] !== undefined && params[key] !== null) {
            query.append(key, params[key]);
          }
        });

        url = `${url}?${query.toString()}`;

        const res = await fetch(url, { cache: "no-store" });
        const data = await res.json();
        return data.count;
      }

     
      const [products, franchise, customers, orders, enquiry] =
        await Promise.all([
          getCount("products", { isActive: "true" }),
          getCount("franchise"),
          getCount("customers"),
          getCount("orders"),
          getCount("enquiry"),
        ]);

      setCounts({
        products,
        franchise,
        customers,
        orders,
        enquiry,
      });

      
      const statusValues = [
        "PENDING",
        "Started",
        "Interior Phase",
        "Completed",
        "Out For Delivery",
        "Defect - Replacement",
      ];

      const statusCounts = await Promise.all(
        statusValues.map((status) =>
          getCount("orders", { status })
        )
      );

      setOrderStatusCount({
        pending: statusCounts[0],
        started: statusCounts[1],
        interior: statusCounts[2],
        completed: statusCounts[3],
        outDelivery: statusCounts[4],
        defectReplace: statusCounts[5],
      });
    };

    fetchCounts();
  }, []);

  if (!user) return null;

  const isAdmin =
    user.role === "SUPER_ADMIN" || user.role === "ADMIN";

  return (
    <div className="flex flex-col min-h-screen">
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
              user.role !== "CUSTOMER" && (
                <UserCard type="Franchise" data={{ count: counts.franchise }} />
              )}

            {user.role !== "FRANCHISE" &&
              user.role !== "FACTORY" &&
              user.role !== "CUSTOMER" && (
                <UserCard type="Enquiry" data={{ count: counts.enquiry }} />
              )}

            {/* ------------ ORDER STATUS GRID ------------ */}
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 w-full mt-4">
              {[
                { label: "Pending", value: orderStatusCount.pending },
                { label: "Started", value: orderStatusCount.started },
                { label: "Interior Phase", value: orderStatusCount.interior },
                { label: "Completed", value: orderStatusCount.completed },
                { label: "Out of Delivery", value: orderStatusCount.outDelivery },
                { label: "Defect - Replacement", value: orderStatusCount.defectReplace },
              ].map((card) => (
                <div
                  key={card.label}
                  className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col justify-between border border-slate-100"
                >
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {card.label}
                  </span>

                  <div className="mt-3 text-2xl font-semibold text-slate-800">
                    {card.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {isAdmin && (
            <>
              {/* <CountChart /> */}
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
