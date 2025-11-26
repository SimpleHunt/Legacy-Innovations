import AttendanceChart from '@/components/AttendanceChart'
import FanchiseChart from '@/components/FanchiseChart'
import CountChart from '@/components/CountChart'
import UserCard from '@/components/UserCard'
import React from 'react'
import EventCalendar from '@/components/EventCalendar'
import Announcements from '@/components/Announcements'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

// count Details
async function getCount(tableName: string) {
  const res = await fetch(`${baseUrl}/api/${tableName}`, { cache: "no-store" });
  const data = await res.json();
  return data.count;
}

export default async function AdminPage() {

   // Fetch all counts 
  const [productCount, franchiseCount, customerCount, orderCount] =
    await Promise.all([
      getCount("products"),
      getCount("franchise"),
      getCount("customers"),
      getCount("orders"),
    ]);

  return (
  <div className="flex flex-col min-h-screen">

    {/* MAIN DASHBOARD CONTENT */}
    <div className="p-4 flex gap-4 flex-col md:flex-row flex-grow">
      
      {/* LEFT SIDE */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        
        {/* User Cards */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="Product" data={{ count: productCount }} />
          <UserCard type="Order" data={{ count: orderCount }} />
          <UserCard type="Customer" data={{ count: customerCount }} />
          <UserCard type="Franchise" data={{ count: franchiseCount }} />
        </div>

        {/* Middle Chart */}
        <div className="flex gap-4 flex-col lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          <div className="w-full lg:w-1/3 h-[450px]">
            <AttendanceChart />
          </div>
        </div>

        {/* Bottom Chart (optional) */}
        <FanchiseChart />
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/3 flex flex-col gap-8">
        <EventCalendar />
      </div>
    </div>

    {/* -------- FOOTER -------- */}
    <footer className="py-4 text-center text-gray-500 text-sm border-t bg-white">
      © {new Date().getFullYear()} Legacy Innovations — 
      <span className="text-blue-600 font-semibold"> Simple Hunt</span>
    </footer>

  </div>
);

}


