<<<<<<< HEAD
import CustomerList from "@/components/CustomerList";
import Footer from "@/components/footer";
import RoleWrapper from "@/components/RoleWrapper";


export default async function Page({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  return (
    <div className="min-h-screen flex flex-col">
    
          {/* PAGE CONTENT */}
          <div className="flex-1">
            <RoleWrapper allowedRoles={["SUPER_ADMIN", "ADMIN", "FRANCHISE", "EMPLOYEE"]}>
              <CustomerList searchParams={searchParams} />
            </RoleWrapper>
            
=======
import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import { role } from "@/lib/data1";
import Image from "next/image";
import Link from 'next/link';
import React from 'react'
import FiltersBar from "@/components/FiltersBar";
import { Customer } from "@/generated";
import { ITEM_PER_PAGE } from '@/lib/settings';


const columns = [
  {
    header: "ID",
    accessor: "info",
  },
  {
    header: "Customer Name",
    accessor: "Customer Name",
    className: "hidden lg:table-cell",
  },
  {
    header: "Mobile",
    accessor: "mobile",
    className: "hidden lg:table-cell",
  },
  {
    header: "Email",
    accessor: "email",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  ...(["SUPER_ADMIN", "ADMIN"].includes(role)
      ? [
          {
            header: "customer Type",
            accessor: "type",
            className: "hidden lg:table-cell",
  },
        ]
      : []), 
  
  
  {
    header: "Actions",
    accessor: "action",
  },
];

 const renderRow = (item: Customer) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
        <td className=" md:table-cell py-4">#</td>
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
          {/* <Link href={`/list/product/${item.id}`}> */}
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          {/* </Link> */}
          {["SUPER_ADMIN", "ADMIN"].includes(role) && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                // <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="customers" type="delete" id={item.id}/>
            )}
          
        </div>
      </td>
    </tr>
  );

const CustomerListPage = async({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {

  

  // ✅ params MUST be defined here FIRST
    const params = await searchParams;
  
    const page = Number(params.page) || 1;
    const search = params.search || "";
    const isActive = params.isActive || "";
    const sortBy = params.sortBy || "id";
    const sortOrder = params.sortOrder || "desc";
  
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  
    const res = await fetch(
      `${baseUrl}/api/customers?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}&franchiseId=3`,
      { next: { revalidate: 0 } }
    );
  
    const { customer: data, count } = await res.json();

    console.log(data)
   
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Customer List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">            
            <FiltersBar params={params} role={role} table="customer"/>            
            {["SUPER_ADMIN", "ADMIN", "FRANCHISE", "INSALES"].includes(role) && <FormModal table="customers" type="create" />}
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
          </div>
    
          <Footer/>
        </div>
<<<<<<< HEAD
    
  );
=======
      </div>
      {/* LIST */}
      {/* Show table or empty message */}
        {data.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No Cusotmer found.</p>
        ) : (
          <Table columns={columns} renderRow={renderRow} data={data} />
        )}
      {/* PAGINATION */}
      <Pagination page={page} count={count} />
    </div>
  )
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
}
