"use client";

import Image from "next/image";
import TableSearch from "@/components/TableSearch";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/getSessionUser";
import axios from "axios";

const columns = [
  { header: "Sr.No", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Product Name", accessor: "productName" },
  { header: "Order Number", accessor: "orderNumber" },
  { header: "Total Amount", accessor: "totalAmount" },
  { header: "Date", accessor: "createdAt" },
];

export default function ProductReportPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [reportData, setReportData] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);


  const [session, setSession] = useState<any>(null);
  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [franchise, setFranchise] = useState<any[]>([]);

  // 🔹 Load Customers + Products
    useEffect(() => {
      const loadCustomers = async () => {
        try {
          const user = getSessionUser();
          const createdBy = user?.id;
  
          
  
          const customerRes = await axios.get(`/api/customers`);
          const franchiseRes = await axios.get(`/api/franchise`);
          const productRes = await axios.get("/api/products?isActive=true");
  
          //console.log(customerRes.data.customers)
  
          setCustomers(customerRes.data.customers ?? []);
          setProducts(productRes.data.products ?? []);
          setFranchise(franchiseRes.data.franchise ?? []);
        } catch (error) {
          console.log(error);
          setCustomers([]);
          setProducts([]);
          setFranchise([]);
        }
      };
      loadCustomers();
    }, []);

  const renderRow = (item: any, index: number) => (
    <tr
      key={item.id ?? index}
      className="border-b border-slate-200 hover:bg-slate-50 text-sm"
    >
      <td className="py-3 px-4">{item.id ?? index + 1}</td>
      <td className="py-3 px-4">{item.name}</td>
      <td className="py-3 px-4">{item.productName}</td>
      <td className="py-3 px-4">{item.orderNumber}</td>
      <td className="py-3 px-4">{item.totalAmount}</td>
      <td className="py-3 px-4">
        {item.createdAt ? item.createdAt.slice(0, 10) : "-"}
      </td>
      {/* Example action button (like the eye icon in your screenshot) */}
      {/* <td className="py-3 px-4">
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
          <Image src="/view.png" alt="" width={16} height={16} />
        </button>
      </td> */}
    </tr>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* PAGE HEADER / BREADCRUMB STYLE */}
      <header className="border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-800">
           Report
          </h1>
         
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
            {[
              { label: "Total Orders", value: 100 },
              { label: "Product", value: 100 },
              { label: "Order", value: 100 },
              { label: "Customer", value: 100 },
              { label: "Franchise", value: 100 },
              { label: "Inside Sales", value: 100 },
            ].map((card, idx) => (
              <div
                key={card.label}
                className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col justify-between border border-slate-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {card.label}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image
                      src="/user-group.svg" // put your icon here
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="mt-3 text-2xl font-semibold text-slate-800">
                  {card.value}
                </div>
              </div>
            ))}
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
            {[
              { label: "Pending", value: 1 },
              { label: "Started", value: 5 },
              { label: "Interior Plase", value: 2 },
              { label: "Completed", value: 3 },
              { label: "Out For Delivery", value: 0 },
              { label: "Defect - Replacement", value: 0 },
            ].map((card) => (
              <div
                key={card.label}
                className="bg-white rounded-xl shadow-sm px-4 py-3 flex flex-col justify-between border border-slate-100"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">
                    {card.label}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center">
                    <Image
                      src="/user-group.svg"
                      alt=""
                      width={16}
                      height={16}
                    />
                  </div>
                </div>
                <div className="mt-3 text-2xl font-semibold text-slate-800">
                  {card.value}
                </div>
              </div>
            ))}
          </div>

          
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 px-4 py-3 flex flex-wrap gap-3 items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center">
              

              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">
                  Product
                </span>
                <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                  
                >
                  <option value="">Select Product</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">
                  Franchise
                </span>
                <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                  
                >
                  <option value="">Select Franchise</option>
                  {franchise.map((p) => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">
                  InSideSales
                </span>
                <select className="text-xs border border-slate-300 rounded-md px-2 py-1 bg-white">
                  <option>Please Select</option>
                </select>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">
                  Order Status
                </span>
                <select className="text-xs border border-slate-300 rounded-md px-2 py-1 bg-white">
                  <option>Please Select</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-slate-600">
                  Customer
                </span>
                <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
                  
                >
                  <option value="">Select Customer</option>
                  {customers.map((c) => (
                    <option key={c.id} value={c.id}>{c.name} / {c.cusotmerCode}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center">
             
              <button className="flex items-center gap-1 rounded-md border border-orange-300 bg-orange-50 text-xs font-medium text-orange-700 px-3 py-1.5">
                <span>Filters</span>
              </button>

              
            </div>
          </div>

          {/* DATE FILTERS ROW  */}
          <div className="flex flex-wrap gap-3 items-center text-xs">
            <div className="flex items-center gap-2">
              <span className="text-slate-600">From</span>
              <input
                type="date"
                className="border border-slate-300 rounded-md px-2 py-1 text-xs bg-white"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-slate-600">To</span>
              <input
                type="date"
                className="border border-slate-300 rounded-md px-2 py-1 text-xs bg-white"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <button className="rounded-md bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 text-xs font-medium">
              Apply
            </button>
          </div>

          {/* TABLE CARD */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            

            {/* TABLE */}
            <div className="overflow-x-auto">
              <table className="min-w-full text-left">
                <thead className="bg-slate-100 border-b border-slate-200 text-xs text-slate-600">
                  <tr>
                    
                    <th className="py-2 px-4">
                      <input type="checkbox" />
                    </th>
                    {columns.map((col) => (
                      <th key={col.accessor} className="py-2 px-4 font-medium">
                        {col.header}
                      </th>
                    ))}
                    <th className="py-2 px-4 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {reportData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={columns.length + 2}
                        className="py-6 px-4 text-center text-sm text-slate-500"
                      >
                        No data available.
                      </td>
                    </tr>
                  ) : (
                    reportData.map((item, idx) => (
                      <tr
                        key={item.id ?? idx}
                        className="border-b border-slate-100 hover:bg-slate-50 text-sm"
                      >
                        <td className="py-3 px-4">
                          <input type="checkbox" />
                        </td>
                        <td className="py-3 px-4">{item.id ?? idx + 1}</td>
                        <td className="py-3 px-4">{item.name}</td>
                        <td className="py-3 px-4">{item.productName}</td>
                        <td className="py-3 px-4">{item.orderNumber}</td>
                        <td className="py-3 px-4">{item.totalAmount}</td>
                        <td className="py-3 px-4">
                          {item.createdAt ? item.createdAt.slice(0, 10) : "-"}
                        </td>
                        <td className="py-3 px-4">
                          
                          <div className="flex items-center gap-2 text-xs">
                           
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* PAGINATION BAR */}
            <div className="border-t border-slate-200 px-4 py-2 flex items-center justify-end">
              <Pagination page={page} count={count} setPage={setPage} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
