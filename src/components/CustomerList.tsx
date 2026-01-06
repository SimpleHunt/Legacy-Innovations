"use client";

import FormModal from "@/components/FromModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import FiltersBar from "@/components/FiltersBar";
import { Customer } from "@prisma/client";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { getSessionUser } from "@/lib/getSessionUser";
import { useSearchParams } from "next/navigation";

type SessionUser = {
  id: string;
  role: string;
  fullName?: string | null;
  email?: string | null;
  phone?: string | null;
};

export default function CustomerList() {
  const searchParams = useSearchParams();

  const [role, setRole] = useState<string>("");
  const [user, setUser] = useState<SessionUser | null>(null);
  
  const [dataState, setDataState] = useState<{
    customers: Customer[];
    count: number;
  }>({
    customers: [],
    count: 0,
  });

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // URL params
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "id";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const isActive = searchParams.get("isActive") || "";

 useEffect(() => {
  const sessionUser = getSessionUser();
  if (!sessionUser) return;

  setUser(sessionUser);
  setRole(sessionUser.role);

  fetchData(sessionUser);
}, [searchParams]);

  const fetchData = async (user: SessionUser) => {
    const createdBy = user.id;

    const res = await fetch(
      `${baseUrl}/api/customers?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}&createdBy=${createdBy}&role=${user.role}`,
      { cache: "no-store" }
    );

    const result = await res.json();
    setDataState(result);
  };

  const { customers: data, count } = dataState;

  const columns = [
    { header: "#", accessor: "info" },
    {
      header: "Customer Code",
      accessor: "Customer Code",
      className: "hidden lg:table-cell",
    },
    {
      header: "Customer Name",
      accessor: "Customer Name",
      className: "hidden lg:table-cell",
    },
    { header: "Mobile", accessor: "mobile", className: "hidden lg:table-cell" },
    { header: "Email", accessor: "email", className: "hidden lg:table-cell" },
    {
      header: "Address",
      accessor: "address",
      className: "hidden lg:table-cell",
    },
    ...(["SUPER_ADMIN", "ADMIN"].includes(role)
      ? [
          {
            header: "Customer Type",
            accessor: "type",
            className: "hidden lg:table-cell",
          },
        ]
      : []),
    ...(["SUPER_ADMIN", "ADMIN"].includes(role)
      ? [{ header: "Actions", accessor: "action", className: "hidden lg:table-cell" }]
      : []),
  ];

  const renderRow = (item: Customer, index: number) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="md:table-cell py-4">{index + 1}</td>
      <td className="hidden md:table-cell">{item.customerCode}</td>
      <td>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.address}</td>

      {["SUPER_ADMIN", "ADMIN"].includes(role) && (
        <td className="hidden md:table-cell">{item.customerType}</td>
      )}

      <td>
        <div className="flex items-center gap-2">
          {["SUPER_ADMIN", "ADMIN"].includes(role) && (
            <FormModal table="customers" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Customer List
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="customer" />
            {["FRANCHISE", "EMPLOYEE"].includes(role) && (
              <FormModal table="customers" type="create" />
            )}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No Customer found.
        </p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      <Pagination page={page} count={count} />
    </div>
  );
}
