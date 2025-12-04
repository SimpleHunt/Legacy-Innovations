export const revalidate = 0;

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Product } from "@/generated";
import FormModal from "@/components/FromModel";
import FiltersBar from "@/components/FiltersBar";
<<<<<<< HEAD
import { ITEM_PER_PAGE } from "@/lib/settings";
import React from "react";
import RoleWrapper from "./RoleWrapper"; 
import Footer from "@/components/footer";
=======

const columns = [
  { header: "#", accessor: "info" },
  { header: "Product Name", accessor: "productName" },
  { header: "Description ", accessor: "description ", className: "hidden lg:table-cell" },
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
  <tr
    key={item.id}
    className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
  >
    <td className="hidden md:table-cell py-5">#</td>

    <td><h3 className="font-semibold">{item.name}</h3></td>

    <td className="hidden md:table-cell py-5">{item.description}</td>
    <td className="hidden md:table-cell">{item.size}</td>
    <td className="hidden md:table-cell">{item.price}</td>
    <td className="hidden md:table-cell">{item.stock}</td>

    <td className="hidden md:table-cell">
      {item.isActive ? (
        <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          Active
        </span>
      ) : (
        <span className="px-3 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
          Inactive
        </span>
      )}
    </td>

    {["SUPER_ADMIN", "ADMIN"].includes(role) && (
      <td>
         <div className="flex items-center gap-2">
           {item.isActive && (
           <FormModal table="products" type="delete" id={item.id} />
          )}
         </div>
      </td>
    )}

  </tr>
);

>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2

const ProductListPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = await searchParams;

  const page = Number(params.page) || 1;
  const search = params.search || "";
  const isActive = params.isActive || "";
  const sortBy = params.sortBy || "id";
  const sortOrder = params.sortOrder || "desc";

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(
    `${baseUrl}/api/products?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    { cache: "no-store" }
  );

  const { products: data, count } = await res.json();

  return (
    <div className="min-h-screen flex flex-col">

<<<<<<< HEAD
      {/* PAGE CONTENT */}
      <div className="flex-1">
        <RoleWrapper params={params} data={data} count={count} page={page} />
=======
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">

          
          <TableSearch />
          <div className="flex items-center gap-4 self-end">            
            <FiltersBar params={params} role={role} table="products"/>            
            {["SUPER_ADMIN", "ADMIN"].includes(role) && <FormModal table="products" type="create" />}
          </div>
        </div>
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2
      </div>

      <Footer/>
    </div>
    
    
  );
};

export default ProductListPage;
