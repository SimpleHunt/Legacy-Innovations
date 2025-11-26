import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import { role } from "@/lib/data1";
import Image from "next/image";
import Link from 'next/link';
import React from 'react'
import { Order } from "@/generated";
import { ITEM_PER_PAGE } from '@/lib/settings';
import FiltersBar from '@/components/FiltersBar';



const columns = [
  {
    header: "ID",
    accessor: "info",
  },
  {
    header: "Order Number",
    accessor: "orderNumber",
    className: "hidden lg:table-cell",
  },
  {
    header: "Customer Name",
    accessor: "customerID",
    className: "hidden lg:table-cell",
  },
  {
    header: "Product Name",
    accessor: "productId",
    className: "hidden lg:table-cell",
  },
  {
    header: "Climate",
    accessor: "climate",
    className: "hidden lg:table-cell",
  },
  {
    header: "Terrain",
    accessor: "terrain",
    className: "hidden lg:table-cell",
  },
  
  {
    header: "Expected DeliveryDate",
    accessor: "expectedDeliveryDate",
    className: "hidden lg:table-cell",
  },
  {
    header: "TotalAmount",
    accessor: "totalAmount",
    className: "hidden lg:table-cell",
  },
  {
    header: "status",
    accessor: "status",
    className: "hidden lg:table-cell",
  },
  
  
  
];


const renderRow = (item: Order) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm gap-4 p-4 hover:bg-lamaPurpleLight"
    >
      <td>
        <div className="flex flex-col">
          <h3 className="font-semibold py-4 ">#</h3>
        </div>
      </td>
      <td className="hidden md:table-cell py-4 ">{item.orderNumber}</td>
      <td className="hidden md:table-cell py-4">{item.customerId}</td>
      <td className="hidden md:table-cell py-4">{item.productId}</td>
      <td className="hidden md:table-cell py-4">{item.climate}</td>
      <td className="hidden md:table-cell py-4">{item.terrain}</td>
      <td className="hidden md:table-cell py-4">
        {item.expectedDeliveryDate
          ? new Date(item.expectedDeliveryDate).toISOString().split("T")[0]
          : "-"}
      </td>

      <td className="hidden md:table-cell py-4">{item.totalAmount}</td>
      <td className="hidden md:table-cell">
      {item.status ? (
        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
          Pending
        </span>
        
      ) : (
        <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          Completed
        </span>
      )}
    </td>
      
      {/* <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/product/${item.id}`}> */}
            {/* <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button> */}
          {/* </Link> */}
          {/* {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                // <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="order" type="delete" id={item.id}/>
            )} 
          
        </div>
      </td> */}
    </tr>
  );

const OrderListPage = async ({
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
      `${baseUrl}/api/orders?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
      { next: { revalidate: 0 } }
    );
  
   const { order: data, count } = await res.json();
    
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Order List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">            
            <FiltersBar params={params} role={role} table="products"/>            
            {role === "ADMIN" && <FormModal table="order" type="create" />}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={data} />
      {/* PAGINATION */}
      <Pagination page={page} count={count} />
    </div>
  )
}

export default OrderListPage
