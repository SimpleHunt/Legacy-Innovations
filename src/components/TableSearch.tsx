"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function TableSearch() {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const query = new URLSearchParams(params.toString());
    query.set("search", value);
    query.set("page", "1"); // reset pagination

    router.push(`?${query.toString()}`);
  };

  return (
    <input
      placeholder="Search..."
      className="border rounded px-3 py-2"
      onChange={handleSearch}
      defaultValue={params.get("search") || ""}
    />
  );
}
