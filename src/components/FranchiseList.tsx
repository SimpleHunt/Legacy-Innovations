"use client";

import { useEffect, useState } from "react";
import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import FiltersBar from '@/components/FiltersBar';
import { Franchise } from "@/generated";
import { ITEM_PER_PAGE } from '@/lib/settings';
import { getSessionUser } from '@/lib/getSessionUser';
import { useSearchParams } from 'next/navigation';

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default function FranchiseList({  }: Props) {
   const searchParams = useSearchParams()
  const [role, setRole] = useState("");
  const [data, setData] = useState<Franchise[]>([]);
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
      `${baseUrl}/api/franchise?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      { next: { revalidate: 0 } }
    );

    console.log("FETCH ORDERS URL:", res);

    const result = await res.json();
    setData(result.franchise);
    setCount(result.count);
  };

  const columns = [
    { header: "#", accessor: "info" },
    
    { header: "Code", accessor: "code", className: "hidden lg:table-cell" },
    { header: "Franchise Name", accessor: "franchise", className: "hidden lg:table-cell" },
    { header: "Name", accessor: "name", className: "hidden lg:table-cell" },
    { header: "Mobile", accessor: "mobile", className: "hidden lg:table-cell" },
    { header: "Email", accessor: "email", className: "hidden lg:table-cell" },
    { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
    { header: "IsActive", accessor: "isActive", className: "hidden md:table-cell" },
    { header: "Documents", accessor: "documents", className: "hidden lg:table-cell" },
    { header: "Actions", accessor: "action" },
  ];
  

  const renderRow = (item: Franchise,index: number) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className=" md:table-cell py-4 ">{index + 1}</td>
      <td className="hidden md:table-cell">{item.code}</td>
      <td className="hidden md:table-cell">{item.name}</td>
      
      <td className="hidden md:table-cell">{item.ownerName}</td>
      <td className="hidden md:table-cell">{item.ownerPhone}</td>
      <td className="hidden md:table-cell">{item.ownerEmail}</td>
      
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="hidden md:table-cell">
        {item.isActive ? (
          <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">Active</span>
        ) : (
          <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">Inactive</span>
        )}
      </td>
      {/* 👇 NEW DOCUMENT DOWNLOAD CELL */}
    <td className="hidden md:table-cell space-y-2">
      {item.companyProfile && (
        <a href={item.companyProfile} download className="text-blue-600 underline text-xs block">
          Company Profile
        </a>
      )}
      {item.companyKyc && (
        <a href={item.companyKyc} download className="text-blue-600 underline text-xs block">
          Company KYC
        </a>
      )}
      {item.bankDetails && (
        <a href={item.bankDetails} download className="text-blue-600 underline text-xs block">
          Bank Details
        </a>
      )}
      {item.itrDocs && (
        <a href={item.itrDocs} download className="text-blue-600 underline text-xs block">
          ITR Docs
        </a>
      )}

      {!item.companyProfile && !item.companyKyc && !item.bankDetails && !item.itrDocs && (
        <span className="text-gray-400 text-xs">No Documents</span>
      )}
    </td>

      <td>
        {["SUPER_ADMIN", "ADMIN"].includes(role) && item.isActive && (
          <FormModal table="franchise" type="delete" id={item.id} />
        )}
      </td>
    </tr>
  );

  
  

  return (
    
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Franchise List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="franchise" />
            {["SUPER_ADMIN", "ADMIN","EMPLOYEE"].includes(role) && 
            <FormModal table="franchise" type="create" />}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No Franchise found.</p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      <Pagination page={page} count={count} />
    </div>
  );
}
