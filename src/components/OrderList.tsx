"use client";

import FormModal from '@/components/FromModel';
import Pagination from '@/components/Pagination';
import Table from '@/components/Table';
import TableSearch from '@/components/TableSearch';
import FiltersBar from '@/components/FiltersBar';
import { Order } from "@/generated";
import { ITEM_PER_PAGE } from '@/lib/settings';
import { getSessionUser } from "@/lib/getSessionUser";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import StatusModal from './StatusModal';
import CompleteModal from './CompleteModal';
import { useSearchParams } from "next/navigation";
import Image from 'next/image';

interface Props {
  searchParams: { [key: string]: string | undefined };
}

export default function OrderList({  }: Props) {
  const searchParams = useSearchParams();

  const [role, setRole] = useState("");
  const [data, setData] = useState<Order[]>([]);
  const [count, setCount] = useState(0);
  const [editData, setEditData] = useState<Order | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  // Extract params from URL
  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";
  const sortBy = searchParams.get("sortBy") || "id";
  const sortOrder = searchParams.get("sortOrder") || "desc";
  const status = searchParams.get("status") || "";


  //const router = useRouter();

   useEffect(() => {
    const user = getSessionUser();
    if (user) setRole(user.role);
  }, []);

  
  useEffect(() => {
    const user = getSessionUser();
    if (user) fetchOrders(user);
  }, [searchParams]); 


//   const sessionUser = getSessionUser();
//   const createdBy = sessionUser?.id;
//   const role = sessionUser?.role;
//   //const customerId = searchParams.get("");

//   const page = Number(searchParams.page) || 1;
//   const search = searchParams.search || "";
//   const sortBy = searchParams.sortBy || "id";
//   const sortOrder = searchParams.sortOrder || "desc";

//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

//   try {
//     const res = await fetch(
//       `${baseUrl}/api/orders?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&sortBy=${sortBy}&sortOrder=${sortOrder}&createdBy=${createdBy}&role=${role}&customerId=${createdBy}`,
//       { next: { revalidate: 0 } }
//     );

//     const result = await res.json();

//     setData(result.orders ?? []);
//     setCount(result.count ?? 0);

//   } catch (error) {
//     console.error("Error fetching orders:", error);
//     setData([]);
//     setCount(0);
//   }
// };
    const fetchOrders = async (user) => {
    let url = `${baseUrl}/api/orders?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&status=${status}&sortBy=${sortBy}&sortOrder=${sortOrder}&role=${user.role}`;

    if (user.role === "FRANCHISE") url += `&createdBy=${user.id}`;
    if (user.role === "CUSTOMER") url += `&customerId=${user.id}`;
    if (user.role === "EMPLOYEE") url += `&createdBy=${user.id}`;

    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();

    setData(json.orders || []);
    setCount(json.count || 0);
  };



  const columns = [
  { header: "ID", accessor: "info" },
  { header: "Order Number", accessor: "orderNumber", className: "hidden lg:table-cell" },

  // Only show Customer Name if NOT factory
  ...(role !== "FACTORY"
    ? [{ header: "Customer Name", accessor: "customerID", className: "hidden lg:table-cell" }]
    : []
  ),

  { header: "Product Name", accessor: "productId", className: "hidden lg:table-cell" },
  { header: "Climate", accessor: "climate", className: "hidden lg:table-cell" },
  { header: "Terrain", accessor: "terrain", className: "hidden lg:table-cell" },
  { header: "Expected Delivery Date", accessor: "expectedDeliveryDate", className: "hidden lg:table-cell" },
  { header: "Total Amount", accessor: "totalAmount", className: "hidden lg:table-cell" },

  { header: "Status", accessor: "status", className: "hidden lg:table-cell" },

  // FACTORY only → Action Button
  ...(role === "FACTORY"
    ? [{ header: "Action", accessor: "action", className: "hidden lg:table-cell" }]
    : []
  ),
];


  const renderRow = (item: Order) => (
  <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight">
    
    <td className="py-4">#</td>
    <td className="hidden md:table-cell py-4">{item.orderNumber}</td>

    {/* Only show customer for franchise/employee */}
    {role !== "FACTORY" && (
      <td className="hidden md:table-cell py-4">{item.customer?.name}</td>
    )}

    <td className="hidden md:table-cell py-4">{item.product?.name}</td>
    <td className="hidden md:table-cell py-4">{item.climate}</td>
    <td className="hidden md:table-cell py-4">{item.terrain}</td>
    <td className="hidden md:table-cell py-4">
      {item.expectedDeliveryDate ? new Date(item.expectedDeliveryDate).toISOString().split("T")[0] : "-"}
    </td>
    <td className="hidden md:table-cell py-4">{item.totalAmount}</td>

    {/* Status */}
    <td className="hidden md:table-cell">
      <span
        className={`px-3 py-1 text-xs font-semibold rounded-full ${
          item.status === "Pending"
            ? "bg-red-100 text-red-700"
            : item.status === "Processing"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-green-100 text-green-700"
        }`}
      >
        {item.status}
      </span>
    </td>

    {role === "FACTORY" && (
  <td className="py-4">
    {item.status?.toString().toLowerCase() === "completed" ? (
      <span className="text-gray-400 text-xs">No Action</span>
    ) : (
      <button
        onClick={() => setEditData(item)}
        className={`px-4 py-1 rounded-md text-white text-sm
          ${
            item.status?.toString().toLowerCase() === "pending"
              ? "bg-red-600"      // Approve → red
              : "bg-green-600"    // Complete → green
          }
        `}
      >
        {item.status?.toString().toLowerCase() === "pending"
          ? "Approve"
          : "Complete"}
      </button>
    )}
  </td>
)}

  </tr>
);


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">Order List</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="order" />
            {["FRANCHISE", "EMPLOYEE"].includes(role) && (
              <FormModal table="order" type="create"  />
            )}
          </div>
        </div>
      </div>

      {data?.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No Orders found.</p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      {/* Edit Modal */}
        {editData && role === "FACTORY" && (
          <>
            {/* Pending → PROCESS modal */}
            {editData.status === "PENDING" && (
              <StatusModal
                data={editData}
                onClose={() => setEditData(null)}
                onSuccess={() => fetchOrders(getSessionUser())}
              />
            )}

            {/* Processing → COMPLETE modal */}
            {editData.status === "Processing" && (
              <CompleteModal
                data={editData}
                onClose={() => setEditData(null)}
                onSuccess={() => fetchOrders(getSessionUser())}
              />
            )}
          </>
        )}


      <Pagination page={page} count={count} />
      
      
    </div>
    
  );
}
