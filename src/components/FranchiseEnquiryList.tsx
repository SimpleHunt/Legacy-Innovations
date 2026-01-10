"use client";

import { useEffect, useState } from "react";
import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import FiltersBar from '@/components/FiltersBar';
import { enquiry } from "@prisma/client";
import { ITEM_PER_PAGE } from '@/lib/settings';
import { getSessionUser } from '@/lib/getSessionUser';
import { useSearchParams } from 'next/navigation';

interface Props {
  searchParams: { [key: string]: string | undefined };
}
type SessionUser = {
  id: string;
  role: string;
  email?: string | null;
};

export default function FranchiseEnquiryList({  }: Props) {
   const searchParams = useSearchParams()
  const [role, setRole] = useState("");
  const [data, setData] = useState<enquiry[]>([]);
  const [user, setUser] = useState<SessionUser | null>(null);
  const [count, setCount] = useState(0);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  // Extract params from URL
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "enquiryID";
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
    
    const res = await fetch(
      `${baseUrl}/api/enquiry?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      { next: { revalidate: 0 } }
    );
    // console.log("sadf");
    // console.log("FETCH ORDERS URL:", res);

    const result = await res.json();
    setData(result.enquiry);
    setCount(result.count);
  };

  const columns = [
    { header: "#", accessor: "info" },
    
    
    
    { header: "Name", accessor: "name", className: "hidden lg:table-cell" },
    { header: "Franchise Name", accessor: "franchise", className: "hidden lg:table-cell" },
    { header: "Mobile", accessor: "mobile", className: "hidden lg:table-cell" },
    { header: "Email", accessor: "email", className: "hidden lg:table-cell" },
    { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
    { header: "Description", accessor: "Description", className: "hidden md:table-cell" },

     ...(["SUPER_ADMIN", "ADMIN"].includes(role)
      ? [{ header: "Actions", accessor: "action", className: "hidden lg:table-cell" }]
      : []),
  ];

  const renderRow = (item: enquiry,index: number) => (
    <tr key={item.enquiryID} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
      <td className=" md:table-cell py-4 ">{index + 1}</td>
      <td className="hidden md:table-cell">{item.name}</td>
      
      <td className="hidden md:table-cell">{item.ownerName}</td>
      <td className="hidden md:table-cell">{item.ownerPhone}</td>
      <td className="hidden md:table-cell">{item.ownerEmail}</td>
      
      <td className="hidden md:table-cell">{item.address}</td>
      <td className="hidden md:table-cell">{item.description}</td>
     
      <td>
        {["SUPER_ADMIN", "ADMIN"].includes(role)  && (
          <FormModal table="enquiry" type="delete" id={item.enquiryID} />
        )}
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Franchise Enquiry List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="enquiry" />
            {["SUPER_ADMIN", "ADMIN","EMPLOYEE"].includes(role) && 
            <FormModal table="enquiry" type="create" />}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No enquiry found.</p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      <Pagination page={page} count={count} />
    </div>
  );
}
