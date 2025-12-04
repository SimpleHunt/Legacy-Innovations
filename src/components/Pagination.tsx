"use client";

import { useRouter } from "next/navigation";
import { getSessionUser } from "@/lib/getSessionUser";
import { ITEM_PER_PAGE } from "@/lib/settings";

const Pagination = ({ page, count }: { page: number; count: number }) => {
  const router = useRouter();

  const safeCount = Number(count) || 0;
  const safePerPage = Number(ITEM_PER_PAGE) || 10;
  const totalPages = Math.max(1, Math.ceil(safeCount / safePerPage));

  const changePage = (newPage: number) => {
    const user = getSessionUser();
    const params = new URLSearchParams(window.location.search);

    params.set("page", String(newPage));
    params.set("role", user.role);

    if (["FRANCHISE", "EMPLOYEE"].includes(user.role)) {
      params.set("createdBy", user.id);
      params.delete("customerId");
    }

    if (user.role === "CUSTOMER") {
      params.set("customerId", user.id);
      params.delete("createdBy");
    }

    router.push(`${window.location.pathname}?${params.toString()}`);
  };

  return (
    <div className="p-4 flex items-center justify-between text-gray-500">

      <button
        disabled={page <= 1}
        onClick={() => changePage(page - 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50"
      >
        Prev
      </button>

      <div className="flex items-center gap-2 text-sm">
        {Array.from({ length: totalPages }).map((_, index) => {
          const pageIndex = index + 1;
          return (
            <button
              key={pageIndex}
              className={`px-2 rounded-sm ${
                page === pageIndex ? "bg-lamaSky" : ""
              }`}
              onClick={() => changePage(pageIndex)}
            >
              {pageIndex}
            </button>
          );
        })}
      </div>

      <button
        disabled={page >= totalPages}
        onClick={() => changePage(page + 1)}
        className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
};

export default Pagination;
