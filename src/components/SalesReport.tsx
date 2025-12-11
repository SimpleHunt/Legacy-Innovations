"use client";

import Image from "next/image";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
// Dynamic import — FIXES "Cannot find name 'Chart'"
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import axios from "axios";

const columns = [
  { header: "Sr.No", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Product Name", accessor: "productName" },
  { header: "Order Number", accessor: "orderNumber" },
  { header: "Total Amount", accessor: "totalAmount" },
  { header: "Date", accessor: "createdAt" },
];

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";


export default function ProductReportPage() {
  // filters & paging
  
 
  const [selectedFranchise, setSelectedFranchise] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [franchiseTotal, setFranchiseTotal] = useState(0);
  const [employeeTotal, setEmployeeTotal] = useState(0);

  const [franchiseMonthly, setFranchiseMonthly] = useState(new Array(12).fill(0));
const [employeeMonthly, setEmployeeMonthly] = useState(new Array(12).fill(0));


  const [page, setPage] = useState(1);
  const take = 10;

  
  const [franchise, setFranchise] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);


  const loadMonthlyStats = async (franchiseId = selectedFranchise, employeeId = selectedEmployee) => {
  try {
    const [frRes, empRes] = await Promise.all([
      axios.get(`${baseUrl}/api/reports/franchise/monthly?franchiseId=${franchiseId || "all"}`),
      axios.get(`${baseUrl}/api/reports/insideSales/monthly?employeeId=${employeeId || "all"}`),
    ]);

    const fData = frRes.data.data;
    const eData = empRes.data.data;

    setFranchiseTotal(fData.reduce((a:number,b:number)=>a+b,0));
    setEmployeeTotal(eData.reduce((a:number,b:number)=>a+b,0));

    setFranchiseMonthly(fData);
    setEmployeeMonthly(eData);

  } catch (error) {
    console.error("Monthly stats load error:", error);
  }
};


 

  // load initial dropdowns & dashboard
  useEffect(() => {
    const loadInitial = async () => {
      try {
        const [franchRes, usersRes] = await Promise.all([
          
          axios.get(`${baseUrl}/api/franchise`),
          axios.get(`${baseUrl}/api/users?role=Employee`),
        ]);
       // console.log(axios.get(`${baseUrl}/api/users`),)

       
        setFranchise(franchRes.data.franchise ?? []);
        setUsers(usersRes.data.users ?? []);
      } catch (err) {
        console.error("initial load error", err);
      }
    };

    loadInitial();
  }, []);
  
  useEffect(() => {
    loadMonthlyStats(selectedFranchise, selectedEmployee);
    }, [selectedFranchise, selectedEmployee]);









  // helper to reset page when filter changes via UI events (we set page to 1 in those handlers)
  const onFilterChange = (setter: (v: any) => void) => (e: any) => {
    setter(e.target.value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-800">Report</h1>
        </div>
      </header>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
          
         

          {/* FILTERS */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-4 py-3 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center">
              

              {/* FRANCHISE */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Franchise</span>
                <select value={selectedFranchise} onChange={onFilterChange(setSelectedFranchise)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">Select Franchise</option>
                  {franchise.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
                </select>
              </div>

              {/* INSIDE SALES */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Inside Sales</span>
                <select value={selectedEmployee} onChange={onFilterChange(setSelectedEmployee)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">Select InsideSales</option>
                  {users.map(u => <option key={u.id} value={u.id}>{u.fullName}</option>)}
                </select>
              </div>

              
              
            </div>

            <div className="flex gap-2 items-center">
              <button onClick={() => { setSelectedFranchise(""); setSelectedEmployee("");  }} className="flex items-center gap-1 rounded-md border border-orange-300 bg-orange-50 text-xs font-medium text-orange-700 px-3 py-1.5">
                Clear
              </button>
              <button onClick={() => { setPage(1);}} className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
              Apply
            </button>
            </div>
          </div>

          {/* RADIAL SUMMARY CARD */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-4 py-6 flex flex-col items-center mt-6">

            {/* Outer + Inner Radial using CSS only */}
            <div className="relative w-40 h-40">
                {/* Outer circle */}
                <div className="absolute inset-0 rounded-full bg-blue-300"></div>

                {/* Inner progress */}
                <div className="absolute inset-4 rounded-full bg-purple-400"></div>

                {/* Center white circle */}
                <div className="absolute inset-10 rounded-full bg-white"></div>
            </div>

            {/* Values */}
            <div className="flex justify-center gap-10 mt-6">

                {/* Franchise Count */}
                <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-blue-300 inline-block"></span>
                <div className="font-bold text-lg">{franchiseTotal}</div>
                <div className="text-xs text-slate-500">Franchise</div>
                </div>

                {/* Inside Sales */}
                <div className="flex flex-col items-center">
                <span className="w-3 h-3 rounded-full bg-yellow-400 inline-block"></span>
                <div className="font-bold text-lg">{employeeTotal}</div>
                <div className="text-xs text-slate-500">Inside Sales</div>
                </div>

            </div>

            </div>


            {/* MONTHLY BAR CHART */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-4 py-6 mt-6">
            <h2 className="text-lg font-semibold mb-3">Monthly Performance</h2>

            <Chart
                options={{
                chart: { type: "bar", height: 350 },
                xaxis: { categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"] },
                colors: ["#6FA8FF", "#FFD66F"],
                legend: { position: "top" }
                }}
                series={[
                { name: "Franchise", data: franchiseMonthly },
                { name: "Inside Sales", data: employeeMonthly }
                ]}
                type="bar"
                height={350}
            />
            </div>



       
        </div>
      </main>
    </div>
  );
}
