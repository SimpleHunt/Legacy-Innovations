"use client";

import FormModal from "@/components/FromModel";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import FiltersBar from "@/components/FiltersBar";
import { Order } from "@prisma/client";
import { ITEM_PER_PAGE } from "@/lib/settings";
import { getSessionUser } from "@/lib/getSessionUser";
import { useState, useEffect } from "react";
import StartedModal from "@/app/(dashboard)/list/order/StartedModal";
import GeneralStatusModal from "@/app/(dashboard)/list/order/GeneralStatusModal";

type SessionUser = {
  id: string;
  role: string;
  email?: string | null;
};

type OrderSearchParams = {
  [key: string]: string | undefined;
};

type OrderListProps = {
  searchParams: OrderSearchParams;
};

type ModalData = {
  id: number;
  newStatus: string;
  isDefect?: boolean;
};

export default function OrderList({ searchParams }: OrderListProps) {
  const [role, setRole] = useState<string>("");
  const [user, setUser] = useState<SessionUser | null>(null);

  const [data, setData] = useState<Order[]>([]);
  const [count, setCount] = useState(0);

  const [editData, setEditData] = useState<ModalData | null>(null);
  const [showStartedModal, setShowStartedModal] = useState(false);
  const [showGeneralModal, setShowGeneralModal] = useState(false);

  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";
  const sortBy = searchParams.sortBy || "id";
  const sortOrder = searchParams.sortOrder || "desc";
  const status = searchParams.status || "";

  // ✅ Load session ONCE
  useEffect(() => {
    const sessionUser = getSessionUser();
    if (!sessionUser) return;

    setUser(sessionUser);
    setRole(sessionUser.role);
  }, []);

  // ✅ Fetch orders when params or user change
  useEffect(() => {
    if (!user) return;
    fetchOrders(user);
  }, [searchParams, user]);

  const fetchOrders = async (user: SessionUser) => {
    
    let url = `${baseUrl}/api/orders?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&status=&sortBy=${sortBy}&sortOrder=${sortOrder}&role=${user.role}`;

    if (user.role === "FRANCHISE" || user.role === "EMPLOYEE") {
      url += `&createdBy=${user.id}`;
    }

    console.log(url);

    if (user.role === "CUSTOMER" && user.email) {
      const customerRes = await fetch(
        `${baseUrl}/api/customers/emailID?email=${user.email}`,
        { cache: "no-store" }
      );
      const customer = await customerRes.json();
      if (customer?.id) url += `&customerId=${customer.id}`;
    }

    const res = await fetch(url, { cache: "no-store" });
    const json = await res.json();

    setData(json.orders || []);
    setCount(json.count || 0);
  };

  // 🔥 Status change handler
  const handleStatusChange = (order: Order, newStatus: string) => {
    if (!newStatus) return;

    // Started → ask expected date
    if (newStatus === "Started") {
      setEditData({ ...order, newStatus });
      setShowStartedModal(true);
      return;
    }

    // DEFECT - REPLACEMENT
    if (newStatus === "Defect - Replacement") {
      if (role === "FACTORY") {
        setEditData({ ...order, newStatus, isDefect: true });
        setShowStartedModal(true);
        return;
      }

      if (role === "EMPLOYEE" || role === "FRANCHISE") {
        setEditData({ ...order, newStatus, isDefect: true });
        setShowGeneralModal(true);
        return;
      }
    }

    // Other statuses
    setEditData({ ...order, newStatus });
    setShowGeneralModal(true);
  };

  const columns = [
    { header: "#ID", accessor: "info" },
    {
      header: "Order Number",
      accessor: "orderNumber",
      className: "hidden lg:table-cell",
    },
    ...(role !== "FACTORY"
      ? [
          {
            header: "Customer Name",
            accessor: "customerID",
            className: "hidden lg:table-cell",
          },
        ]
      : []),
    {
      header: "Product Name",
      accessor: "productId",
      className: "hidden lg:table-cell",
    },
    { header: "Climate", accessor: "climate", className: "hidden lg:table-cell" },
    { header: "Terrain", accessor: "terrain", className: "hidden lg:table-cell" },
    {
      header: "Expected Delivery Date",
      accessor: "expectedDeliveryDate",
      className: "hidden lg:table-cell",
    },
    {
      header: "Total Amount",
      accessor: "totalAmount",
      className: "hidden lg:table-cell",
    },
    { header: "Status", accessor: "status", className: "hidden lg:table-cell" },
    { header: "Action", accessor: "action", className: "hidden lg:table-cell" },
  ];

  const renderRow = (item: Order, index: number) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="py-4">{index + 1}</td>
      <td className="hidden md:table-cell py-4">{item.orderNumber}</td>

      {role !== "FACTORY" && (
        <td className="hidden md:table-cell py-4">Customer</td>
      )}

      <td className="hidden md:table-cell py-4">Product</td>
      <td className="hidden md:table-cell py-4">{item.climate}</td>
      <td className="hidden md:table-cell py-4">{item.terrain}</td>

      <td className="hidden md:table-cell py-4">
        {item.expectedDeliveryDate
          ? new Date(item.expectedDeliveryDate)
              .toISOString()
              .split("T")[0]
          : "-"}
      </td>

      <td className="hidden md:table-cell py-4">{item.totalAmount}</td>

      <td className="hidden md:table-cell">
        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-100">
          {item.status}
        </span>
      </td>

      <td className="py-4">
        <select
          className="border p-2 rounded-md text-sm"
          defaultValue=""
          onChange={(e) => handleStatusChange(item, e.target.value)}
        >
          <option value="">Select Status</option>

          {role === "FACTORY" && (
            <>
              <option value="Started">Started</option>
              <option value="Interior Phase">Interior Phase</option>
              <option value="Completed">Completed</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Defect - Replacement">
                Defect - Replacement
              </option>
            </>
          )}

          {["EMPLOYEE", "FRANCHISE"].includes(role) && (
            <option value="Defect - Replacement">
              Defect - Replacement
            </option>
          )}
        </select>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold">
          Order List
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <FiltersBar params={searchParams} role={role} table="order" />
            {["FRANCHISE", "EMPLOYEE"].includes(role) && (
              <FormModal table="order" type="create" />
            )}
          </div>
        </div>
      </div>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No Orders found.
        </p>
      ) : (
        <Table columns={columns} renderRow={renderRow} data={data} />
      )}

      {showStartedModal && editData && user && (
        <StartedModal
          data={editData}
          onClose={() => setShowStartedModal(false)}
          onSuccess={() => fetchOrders(user)}
        />
      )}

      {showGeneralModal && editData && user && (
        <GeneralStatusModal
          data={editData}
          onClose={() => setShowGeneralModal(false)}
          onSuccess={() => fetchOrders(user)}
        />
      )}

      <Pagination page={page} count={count} />
    </div>
  );
}
