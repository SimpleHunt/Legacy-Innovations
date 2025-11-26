"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    const res = await fetch("/api/product");
    const data = await res.json();
    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Products</h1>

        <Link
          href="/products/create"
          className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-500"
        >
          Add Product
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((p: any) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="border rounded-lg p-4 shadow hover:shadow-md"
          >
            <h2 className="font-semibold text-xl">{p.name}</h2>
            <p className="text-sm text-gray-500">{p.sku}</p>

            <p className="mt-2 text-lg font-bold">₹{p.price}</p>

            <p className="mt-1 text-sm">Stock: {p.stock}</p>

            <span
              className={`mt-2 inline-block px-2 py-1 text-xs rounded ${
                p.isActive ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"
              }`}
            >
              {p.isActive ? "Active" : "Inactive"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
