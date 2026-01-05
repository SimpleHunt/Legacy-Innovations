"use client";

import React, { useEffect, useState } from "react";
import FormModal from "@/components/FromModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import FiltersBar from "@/components/FiltersBar";
import { Factory } from "@prisma/client";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { getSessionUser } from "@/lib/getSessionUser";

interface Props {
  searchParams: { [key: string]: string | undefined };
}

// 🔹 Session user type
type SessionUser = {
  id: string;
  role: string;
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
};

export default function FactoryList({ searchParams }: Props) {
  const [role, setRole] = useState("");
  const [data, setData] = useState<Factory[]>([]);
  const [count, setCount] = useState(0);
  const [user, setUser] = useState<SessionUser | null>(null);

  useEffect(() => {
    const sessionUser = getSessionUser();
    
    if (!sessionUser) return;

    setUser(sessionUser);
    setRole(sessionUser.role);
    fetchData();
  }, []);

  const fetchData = async () => {
    const page = Number(searchParams.page) || 1;
    const search = searchParams.search || "";
    const isActive = searchParams.isActive || "";
    const sortBy = searchParams.sortBy || "id";
    const sortOrder = searchParams.sortOrder || "desc";

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

    const res = await fetch(
      `${baseUrl}/api/factory?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      { next: { revalidate: 0 } }
    );

    const result = await res.json();
    setData(result.factory);
    setCount(result.count);
  };

  const columns = [
    { header: "ID", accessor: "info" },
    { header: "Order ID", accessor: "orderID", className: "hidden lg:table-cell" },
    { header: "Order Status", accessor: "status", className: "hidden lg:table-cell" },
    { header: "Delivery Date", accessor: "deliveryDate", className: "hidden lg:table-cell" },
    { header: "Actions", accessor: "action" },
  ];

  const renderRow = (item: Factory) => (
  <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
    <td className="md:table-cell py-4">#{item.id}</td>
    <td>{item.orderId}</td>
    <td className="hidden md:table-cell">{item.orderStatus}</td>
    <td className="hidden md:table-cell">
      {item.deliveryDate ? new Date(item.deliveryDate).toISOString().split("T")[0] : "-"}
    </td>
    
    <td>
      {["SUPER_ADMIN", "ADMIN"].includes(role) && (
        <FormModal table="factory" type="delete" id={item.id} />
      )}
    </td>
  </tr>
);


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Factory List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="factory" />
            {/* Optionally enable create button */}
            {/* {["SUPER_ADMIN", "ADMIN"].includes(role) && <FormModal table="factory" type="create" />} */}
          </div>
        </div>
      </div>

      {!data ? (
  <p className="text-center text-gray-500 py-10">Loading...</p>
) : data.length === 0 ? (
  <p className="text-center text-gray-500 py-10">No Factory found.</p>
) : (
  <Table columns={columns} renderRow={renderRow} data={data} />
)}
    </div>
  );
}
