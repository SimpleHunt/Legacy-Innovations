"use client";

import Image from "next/image";
import Table from "@/components/Table";
import Pagination from "@/components/Pagination";
import TableSearch from "@/components/TableSearch";
import { useState } from "react";

const columns = [
  { header: "ID", accessor: "id" },
  { header: "Name", accessor: "name" },
  { header: "Amount", accessor: "amount" },
  { header: "Date", accessor: "date" },
  { header: "Actions", accessor: "action" },
];

// Dummy data
const reportData = [
  { id: 1, name: "John Doe", amount: 250, date: "2024-01-05" },
  { id: 2, name: "Peter", amount: 120, date: "2024-01-10" },
];

export default function ReportPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    console.log("Start:", startDate, " End:", endDate);
    // Here you will fetch data using startDate & endDate
  };

  const renderRow = (item: any) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight py-4"
    >
      <td  className=" md:table-cell py-4 ">{item.id}</td>
      <td>{item.name}</td>
      <td>{item.amount}</td>
      <td>{item.date}</td>
      <td>
        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
          <Image src="/view.png" alt="" width={16} height={16} />
        </button>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">

      {/* TOP HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Product List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
             
          </div>
        </div>
      </div>

      {/* DATE FILTERS */}
      <div className="flex flex-wrap items-center gap-4 mb-6">

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 font-medium mb-1">
            Start Date
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm text-gray-500 font-medium mb-1">
            End Date
          </label>
          <input
            type="date"
            className="border border-gray-300 rounded-md px-3 py-2"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <button
          onClick={handleFilter}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-5"
        >
          Submit
        </button>
      </div>

      {/* TABLE */}
      <Table columns={columns} renderRow={renderRow} data={reportData} />

      {/* PAGINATION */}
      <Pagination page={1} count={reportData.length} />
    </div>
  );
}
