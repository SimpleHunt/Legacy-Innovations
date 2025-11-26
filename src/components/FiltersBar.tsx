"use client";

import { useState } from "react";
import Image from "next/image";

export default function FiltersBar({ params, table }: any) {
  const onChangeParam = (key: string, value: string) => {
    const query = new URLSearchParams(params as any);
    query.set(key, value);
    query.set("page", "1");
    window.location.href = `?${query.toString()}`;
  };

  const [openFilter, setOpenFilter] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const tableSortFields: any = {
    products: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "price", label: "Price" },
      { key: "size", label: "Size" },
      { key: "stock", label: "Stock" },
    ],
    customer: [
      { key: "id", label: "ID" },
      { key: "name", label: "Name" },
      { key: "phone", label: "Mobile" },
      { key: "email", label: "Email" },
      { key: "address", label: "Address" },
    ],
    order: [
      { key: "id", label: "ID" },
      { key: "orderDate", label: "Date" },
      { key: "totalAmount", label: "Amount" },
      { key: "status", label: "Status" },
    ],
    franchise: [
      { key: "id", label: "ID" },
      { key: "name", label: "f Name" },
      { key: "code", label: "Code" },
      { key: "ownerName", label: "Owner Name" },
      { key: "ownerEmail", label: "Email" },
      { key: "ownerPhone", label: "Phone" },
    ],
    payment: [
      { key: "id", label: "ID" },
      { key: "amount", label: "Amount" },
      { key: "method", label: "Payment Method" },
    ],
    factory: [
      { key: "id", label: "ID" },
      { key: "amount", label: "Amount" },
      { key: "method", label: "Payment Method" },
    ],
  };

  return (
    <div className="flex items-center gap-4">

      {/* FILTER BUTTON */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenFilter(!openFilter);
            setOpenSort(false);
          }}
          className="w-8 h-8 bg-lamaYellow rounded-full flex items-center justify-center shadow"
        >
          <Image src="/filter.png" alt="filter" width={14} height={14} />
        </button>

        {openFilter && (
          <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-2 w-32 z-50">
            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => onChangeParam("isActive", "")}>All</div>
            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => onChangeParam("isActive", "true")}>Active</div>
            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => onChangeParam("isActive", "false")}>Inactive</div>
          </div>
        )}
      </div>

      {/* SORT BUTTON */}
      <div className="relative">
        <button
          onClick={() => {
            setOpenSort(!openSort);
            setOpenFilter(false);
          }}
          className="w-8 h-8 bg-lamaYellow rounded-full flex items-center justify-center shadow"
        >
          <Image src="/sort.png" alt="sort" width={14} height={14} />
        </button>

        {openSort && (
          <div className="absolute top-10 left-0 bg-white shadow-lg rounded-md p-2 w-40 z-50">

            <span className="block px-3 py-1 text-xs text-gray-400">Sort By</span>

            {(tableSortFields[table] ?? []).map((f: any) => (
              <div
                key={f.key}
                className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                onClick={() => onChangeParam("sortBy", f.key)}
              >
                {f.label}
              </div>
            ))}

            <hr className="my-2" />

            <span className="block px-3 py-1 text-xs text-gray-400">Order</span>

            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => onChangeParam("sortOrder", "asc")}>Ascending</div>
            <div className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm" onClick={() => onChangeParam("sortOrder", "desc")}>Descending</div>

          </div>
        )}
      </div>
    </div>
  );
}
