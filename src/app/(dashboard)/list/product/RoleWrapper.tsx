"use client";

import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/getSessionUser";
import FormModal from "@/components/FromModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import FiltersBar from "@/components/FiltersBar";
import { Product } from "@/generated";
import Image from "next/image";

export default function RoleWrapper({
  params,
  data,
  count,
  page,
}: {
  params: any;
  data: Product[];
  count: number;
  page: number;
}) {
  const [role, setRole] = useState("");

  useEffect(() => {
    const user = getSessionUser();
    setRole(user?.role || "");
  }, []);

  const columns = [
    { header: "#", accessor: "info" },
    { header: "Product Name", accessor: "productName" },
    { header: "Size", accessor: "size", className: "hidden md:table-cell" },
    { header: "Price", accessor: "price", className: "hidden md:table-cell" },
    { header: "stock", accessor: "stock", className: "hidden md:table-cell" },
    { header: "IsActive", accessor: "isActive", className: "hidden md:table-cell" },
    ...(["SUPER_ADMIN", "ADMIN"].includes(role)
      ? [
          {
            header: "Actions",
            accessor: "action",
          },
        ]
      : []),
  ];

  const renderRow = (item: Product) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className="hidden md:table-cell py-5">#</td>
      <td><h3 className="font-semibold">{item.name}</h3></td>
      <td className="hidden md:table-cell">{item.size}</td>
      <td className="hidden md:table-cell">{item.price}</td>
      <td className="hidden md:table-cell">{item.stock}</td>
      <td className="hidden md:table-cell">
        {item.isActive ? (
          <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">Active</span>
        ) : (
          <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">Inactive</span>
        )}
      </td>
      {["SUPER_ADMIN", "ADMIN"].includes(role) && (
        <td>
          <div className="flex items-center gap-2">
            {item.isActive && <FormModal table="products" type="delete" id={item.id} />}
          </div>
        </td>
      )}
    </tr>
  );

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Product List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={params} role={role} table="products" />
            {["SUPER_ADMIN", "ADMIN"].includes(role) && <FormModal table="products" type="create" />}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No products found.</p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      <Pagination page={page} count={count} />

     
    </div>
    
  );
}
