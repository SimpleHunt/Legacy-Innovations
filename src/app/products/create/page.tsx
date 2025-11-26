"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProductPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    sku: "",
    name: "",
    description: "",
    price: "",
    stock: ""
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: any) {
    e.preventDefault();

    const res = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify({
        ...form,
        price: Number(form.price),
        stock: Number(form.stock)
      }),
    });

    if (res.ok) {
      router.push("/products");
    } else {
      alert("Error creating product");
    }
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-semibold mb-4">Add New Product</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="sku"
          placeholder="SKU"
          value={form.sku}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="name"
          placeholder="Product Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          name="stock"
          type="number"
          placeholder="Stock"
          value={form.stock}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button className="px-4 py-2 bg-green-600 text-white rounded">
          Create
        </button>
      </form>
    </div>
  );
}
