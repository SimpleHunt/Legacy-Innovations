"use client";

import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import FiltersBar from "@/components/FiltersBar";
import Pagination from "@/components/Pagination";
import FormModal from "@/components/FromModel";

export default function TableListWrapper({
  title,
  data,
  count,
  role,
  searchParams,
  columns,
  renderRow,
  tableName,
}) {
  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">{title}</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table={tableName} />

            {/* Allow create only for Franchise + Employee */}
            {["FRANCHISE", "EMPLOYEE"].includes(role) && (
              <FormModal table={tableName} type="create" />
            )}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No records found.</p>
      ) : (
        <Table columns={columns} data={data} renderRow={renderRow} />
      )}

      <Pagination page={Number(searchParams.page) || 1} count={count} />
    </div>
  );
}
