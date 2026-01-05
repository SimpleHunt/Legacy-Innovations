"use client";

import Image from "next/image";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedFranchise, setSelectedFranchise] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  const [page, setPage] = useState(1);
  const take = 10;

  // data stores
  const [reportData, setReportData] = useState<any[]>([]);
  const [count, setCount] = useState(0);

  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [franchise, setFranchise] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);

  // dashboard summary & statuses
  const [summary, setSummary] = useState<any | null>(null);
  const [statusCounts, setStatusCounts] = useState<any | null>(null);

  // load initial dropdowns & dashboard
  useEffect(() => {
    const loadInitial = async () => {
      try {
        const [custRes, franchRes, prodRes, usersRes, dashRes] = await Promise.all([
          axios.get(`${baseUrl}/api/customers`),
          axios.get(`${baseUrl}/api/franchise`),
          axios.get(`${baseUrl}/api/products?isActive=true`),
          axios.get(`${baseUrl}/api/users?role=EMPLOYEE`),
          axios.get(`${baseUrl}/api/reports/dashboard`),
        ]);
        console.log(axios.get(`${baseUrl}/api/users`),)

        setCustomers(custRes.data.customers ?? []);
        setFranchise(franchRes.data.franchise ?? []);
        setProducts(prodRes.data.products ?? []);
        setUsers(usersRes.data.users ?? []);
        setSummary(dashRes.data.summary ?? []);
        setStatusCounts(dashRes.data.statusCounts ?? null);
      } catch (err) {
        console.error("initial load error", err);
      }
    };

    loadInitial();
  }, []);

  // fetch report data based on filters / page
  const loadReport = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/reports/order`, {
      params: {
        page,
        take: 10,
        productId: selectedProduct || undefined,
        franchiseId: selectedFranchise || undefined,
        employeeId: selectedEmployee || undefined,
        customerId: selectedCustomer || undefined,
        status: selectedStatus || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      },
    });

    setReportData(res.data.data);
    setCount(res.data.count);
  } catch (err) {
    console.error(err);
  }
};


const loadFilteredSummary = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/reports/summary`, {
      params: {
        productId: selectedProduct || undefined,
        franchiseId: selectedFranchise || undefined,
        employeeId: selectedEmployee || undefined,
        customerId: selectedCustomer || undefined,
        status: selectedStatus || undefined,
        startDate: startDate || undefined,
        endDate: endDate || undefined,
      }
    });

    //setSummary(res.data.summary);
    setStatusCounts(res.data.statusCounts);

  } catch (err) {
    console.error("Error loading filtered summary:", err);
  }
};



  useEffect(() => {
  loadReport();
  loadFilteredSummary(); // 🔥 NEW
}, [
  page,
  selectedProduct,
  selectedFranchise,
  selectedEmployee,
  selectedCustomer,
  selectedStatus,
  startDate,
  endDate,
]);
  const renderRow = (item: any, index: number) => (
    <tr key={item.id ?? index} className="border-b border-slate-200 hover:bg-slate-50 text-sm">
      <td className="py-3 px-4">{index + 1 + (page - 1) * take}</td>
      <td className="py-3 px-4">{item.name}</td>
      <td className="py-3 px-4">{item.productName}</td>
      <td className="py-3 px-4">{item.orderNumber}</td>
      <td className="py-3 px-4">{item.totalAmount}</td>
      <td className="py-3 px-4">{item.createdAt ? item.createdAt.slice(0, 10) : "-"}</td>
      <td className="py-3 px-4"></td>
    </tr>
  );

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
          {/* TOP SUMMARY CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
            {summary
              ? [
                  { label: "Total Orders", value: summary.totalOrders },
                  { label: "Product", value: summary.totalProducts },
                  { label: "Customer", value: summary.totalCustomers },
                  { label: "Franchise", value: summary.totalFranchise },
                  { label: "Inside Sales", value: summary.totalInsideSales },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col justify-between border border-slate-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">{card.label}</span>
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                        <Image src="/user-group.svg" alt="" width={16} height={16} />
                      </div>
                    </div>
                    <div className="mt-3 text-2xl font-semibold text-slate-800">{card.value}</div>
                  </div>
                ))
              : // skeleton placeholders while loading
                Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm px-4 py-3 border border-slate-100">
                    <div className="h-6 w-28 bg-slate-100 animate-pulse" />
                    <div className="mt-3 h-8 w-16 bg-slate-100 animate-pulse" />
                  </div>
                ))}
          </div>

          {/* ORDER STATUS SUMMARY */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
            {statusCounts
              ? [
                  { label: "Pending", value: statusCounts.pending },
                  { label: "Started", value: statusCounts.started },
                  { label: "Interior Phase", value: statusCounts.interiorPhase },
                  { label: "Completed", value: statusCounts.completed },
                  { label: "Out For Delivery", value: statusCounts.outForDelivery },
                  { label: "Defect - Replacement", value: statusCounts.defect },
                ].map((card) => (
                  <div
                    key={card.label}
                    className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col justify-between border border-slate-100"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-slate-600 uppercase tracking-wide">{card.label}</span>
                      <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                        <Image src="/user-group.svg" alt="" width={16} height={16} />
                      </div>
                    </div>
                    <div className="mt-3 text-2xl font-semibold text-slate-800">{card.value}</div>
                  </div>
                ))
              : Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-xl shadow-sm px-4 py-3 border border-slate-100">
                    <div className="h-6 w-24 bg-slate-100 animate-pulse" />
                    <div className="mt-3 h-8 w-12 bg-slate-100 animate-pulse" />
                  </div>
                ))}
          </div>

          {/* FILTERS */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-4 py-3 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center">
              {/* PRODUCT */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Product</span>
                <select value={selectedProduct} onChange={onFilterChange(setSelectedProduct)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">Select Product</option>
                  {products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>

              {/* FRANCHISE */}
              {/* <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Franchise</span>
                <select value={selectedFranchise} onChange={onFilterChange(setSelectedFranchise)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">Select Franchise</option>
                  {franchise.map((f) => <option key={f.id} value={f.id}>{f.name}</option>)}
                </select>
              </div> */}

              {/* INSIDE SALES */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Inside Sales</span>
                <select value={selectedEmployee} onChange={onFilterChange(setSelectedEmployee)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">Select InsideSales</option>
                  {users.map(u => <option key={u.id} value={u.id}>{u.fullName}</option>)}
                </select>
              </div>

              {/* CUSTOMER */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Customer</span>
                <select value={selectedCustomer} onChange={onFilterChange(setSelectedCustomer)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">Select Customer</option>
                  {customers.map(c => <option key={c.id} value={c.id}>{c.name} / {c.cusotmerCode}</option>)}
                </select>
              </div>

              {/* STATUS */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">Status</span>
                <select value={selectedStatus} onChange={onFilterChange(setSelectedStatus)} className="text-xs border rounded-md px-2 py-1 bg-white">
                  <option value="">All Status</option>
                  <option value="PENDING">Pending</option>
                  <option value="Started">Started</option>
                  <option value="Interior Phase">Interior Phase</option>
                  <option value="Completed">Completed</option>
                  <option value="Out For Delivery">Out For Delivery</option>
                  <option value="Defect - Replacement">Defect - Replacement</option>
                </select>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <button onClick={() => { setSelectedProduct(""); setSelectedFranchise(""); setSelectedEmployee(""); setSelectedCustomer(""); setSelectedStatus(""); setStartDate(""); setEndDate(""); setPage(1); }} className="flex items-center gap-1 rounded-md border border-orange-300 bg-orange-50 text-xs font-medium text-orange-700 px-3 py-1.5">
                Clear
              </button>
            </div>
          </div>

          {/* DATE FILTERS */}
          <div className="flex gap-3 items-center text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">From</span>
              <input type="date" value={startDate} onChange={(e) => { setStartDate(e.target.value); setPage(1); }} className="border px-2 py-1 rounded-md text-xs" />
            </div>

            <div className="flex items-center gap-2">
              <span className="text-slate-600">To</span>
              <input type="date" value={endDate} onChange={(e) => { setEndDate(e.target.value); setPage(1); }} className="border px-2 py-1 rounded-md text-xs" />
            </div>

            <button onClick={() => { setPage(1); loadReport(); }} className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs">
              Apply
            </button>
          </div>

          {/* TABLE */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-slate-100 border-b text-xs text-slate-600">
                  <tr>
                    {/* <th className="py-2 px-4"><input type="checkbox" /></th> */}
                    {columns.map(col => <th key={col.accessor} className="py-2 px-4 font-medium">{col.header}</th>)}
                    {/* <th className="py-2 px-4 font-medium">Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {reportData.length === 0 ? (
                    <tr>
                      <td colSpan={columns.length + 2} className="py-6 text-center text-sm text-slate-500">No data available.</td>
                    </tr>
                  ) : reportData.map((item, idx) => renderRow(item, idx))}
                </tbody>
              </table>
            </div>

            <div className="border-t py-2 px-4 flex justify-end">
              {/* <Pagination page={page} count={count} setPage={setPage} /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
