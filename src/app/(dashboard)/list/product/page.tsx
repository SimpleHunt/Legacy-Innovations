export const revalidate = 0;

import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { Product } from "@prisma/client";
import FormModal from "@/components/FromModel";
import FiltersBar from "@/components/FiltersBar";
import { ITEM_PER_PAGE } from "@/lib/settings";
import React from "react";
import RoleWrapper from "./RoleWrapper"; 
import Footer from "@/components/footer";

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

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://72.61.238.253:3001";

  const res = await fetch(
    `${baseUrl}/api/products?page=${page}&take=${ITEM_PER_PAGE}&search=${search}&isActive=${isActive}&sortBy=${sortBy}&sortOrder=${sortOrder}`,
    { cache: "no-store" }
  );

  const { products: data, count } = await res.json();

  return (
    <div className="min-h-screen flex flex-col">

      {/* PAGE CONTENT */}
      <div className="flex-1">
        <RoleWrapper params={params} data={data} count={count} page={page} />
      </div>

      <Footer/>
    </div>
    
    
  );
};

export default ProductListPage;
