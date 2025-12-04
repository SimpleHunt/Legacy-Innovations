"use client";

import { useEffect, useState } from "react";
import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import FiltersBar from '@/components/FiltersBar';
import { User } from "@/generated";
import { ITEM_PER_PAGE } from '@/lib/settings';
import { getSessionUser } from '@/lib/getSessionUser';
import { useSearchParams } from 'next/navigation';

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default function UserList({  }: Props) {
  const searchParams = useSearchParams();
  const [role, setRole] = useState("");
  const [data, setData] = useState<User[]>([]);
  const [count, setCount] = useState(0);

   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  // Extract params from URL
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "id";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const isActive = searchParams.get("isActive") || "";

  useEffect(() => {
    const user = getSessionUser();
    setRole(user.role);
    fetchData(user);
  }, []);
    useEffect(() => {
      const user = getSessionUser();
      if (user) fetchData(user);
    }, [searchParams]); 
  

  const fetchData = async (user) => {
    

    const res = await fetch(
      `${baseUrl}/api/users?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      { next: { revalidate: 0 } }
    );

    const result = await res.json();
    setData(result.users);
    setCount(result.count);
  };

  const columns = [
    { header: "ID", accessor: "info" },
    { header: "Login UserId", accessor: "loginUserId", className: "hidden lg:table-cell" },
    { header: "Password", accessor: "password", className: "hidden lg:table-cell" },
    { header: "Email", accessor: "email", className: "hidden lg:table-cell" },
    { header: "FullName", accessor: "fullName", className: "hidden lg:table-cell" },
    { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
    { header: "UserType", accessor: "role", className: "hidden lg:table-cell" },
    { header: "IsActive", accessor: "isActive", className: "hidden md:table-cell" },
    { header: "Actions", accessor: "action" },
  ];

  const renderRow = (item: User) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className=" md:table-cell py-4 ">#{item.id}</td>
      <td>{item.loginUserId}</td>
      <td>{item.password}</td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.fullName}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.role}</td>
      <td className="hidden md:table-cell">
        {item.isActive ? (
          <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">Active</span>
        ) : (
          <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">Inactive</span>
        )}
      </td>
      <td>
        {["SUPER_ADMIN", "ADMIN"].includes(role) && item.isActive && (
          <FormModal table="users" type="delete" id={item.id} />
        )}
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">User List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="users" />
            {["SUPER_ADMIN", "ADMIN"].includes(role) && <FormModal table="users" type="create" />}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No Users found.</p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      <Pagination page={page} count={count} />
    </div>
  );
}
