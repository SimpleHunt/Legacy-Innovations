"use client";

import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import { getSessionUser } from '@/lib/getSessionUser';
import Image from "next/image";
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

type Product = {
  id: number;
  franchise: string;
  franchiseName: string;
  mobile: number,
  email: string,
  username: string,
  password: string
};

const columns = [
  {
    header: "ID",
    accessor: "info",
  },
  {
    header: "Franchise",
    accessor: "franchise",
    className: "hidden lg:table-cell",
  },
  {
    header: "Name",
    accessor: "franchise Name",
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
    header: "Username",
    accessor: "username",
    className: "hidden lg:table-cell",
  },
  {
    header: "Password",
    accessor: "password",
    className: "hidden lg:table-cell",
  },
 
  
  
  {
    header: "Actions",
    accessor: "action",
  },
];

const FranchiseListPage = () => {
   const [role, setRole] = useState("");

   useEffect(() => {
     const user = getSessionUser();
   //setRole(user.role);
   }, []);


    const renderRow = (item: Product) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
        <td className=" md:table-cell py-4 ">{item.id}</td>
        <td>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.franchise}</h3>
        </div>
      </td>
      <td>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.franchiseName}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.mobile}</td>
      <td className="hidden md:table-cell">{item.email}</td>
      <td className="hidden md:table-cell">{item.username}</td>
      <td className="hidden md:table-cell">{item.password}</td>
      
      
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/product/${item.id}`}> */}
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          {/* </Link> */}
          {role === "ADMIN" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                // <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="products" type="delete" id={item.id}/>
            )}
          
        </div>
      </td>
    </tr>
  );
 
}

export default FranchiseListPage
