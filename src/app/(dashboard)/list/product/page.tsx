import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch'
import { role, productsData } from "@/lib/data";
import Image from "next/image";
import Link from 'next/link';
import React from 'react'

type Product = {
  id: number;
  productName: string;
  type: string;
  photo: string;
  size: string;
  Desc: string[];
  climate: string;
  tareene: string;
};

const columns = [
  {
    header: "Product Name",
    accessor: "info",
  },
  {
    header: "Desc",
    accessor: "Desc",
    className: "hidden lg:table-cell",
  },
  
  {
    header: "Type",
    accessor: "Type",
    className: "hidden md:table-cell",
  },
  {
    header: "Size",
    accessor: "classes",
    className: "hidden md:table-cell",
  },
  {
    header: "Climate",
    accessor: "climate",
    className: "hidden md:table-cell",
  },
  {
    header: "Tareene",
    accessor: "Tareene",
    className: "hidden md:table-cell",
  },
  {
    header: "Photo",
    accessor: "photo",
    className: "hidden md:table-cell",
  },
  
  
  {
    header: "Actions",
    accessor: "action",
  },
];

const ProductListPage = () => {
    const renderRow = (item: Product) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.productName}</h3>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.Desc}</td>
      <td className="hidden md:table-cell">{item.type}</td>
      <td className="hidden md:table-cell">{item.size}</td>
      <td className="hidden md:table-cell">{item.climate}</td>
      <td className="hidden md:table-cell">{item.tareene}</td>

      <td className="flex items-center gap-4 p-4">
        <Image
          src={item.photo}
          alt=""
          width={40}
          height={40}
          className="md:hidden xl:block w-10 h-10 rounded-full object-cover"
        />
        
      </td>
      
      
      
      <td>
        <div className="flex items-center gap-2">
          {/* <Link href={`/list/product/${item.id}`}> */}
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
            </button>
          {/* </Link> */}
          {role === "admin" && (
                // <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
                // <Image src="/delete.png" alt="" width={16} height={16} />
                // </button>
                <FormModal table="product" type="delete" id={item.id}/>
            )}
          
        </div>
      </td>
    </tr>
  );
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">All Products</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              <Image src="/sort.png" alt="" width={14} height={14} />
            </button>
             {role === "admin" && (
              // <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow">
              //   <Image src="/plus.png" alt="" width={14} height={14} />
              // </button>
              <FormModal table="product" type="create"/>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={productsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  )
}

export default ProductListPage
