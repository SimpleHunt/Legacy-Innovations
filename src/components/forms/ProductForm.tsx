"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import InputField from "../InputField";
import { productSchema, ProductSchema } from "@/lib/formValidationSchema";
import TextAreaField from "../TextAreaField";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ProductForm = ({
  type,
  data,
  onClose,
}: {
  type: "create" | "update";
  data?: any;
  onClose?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSchema>({
    resolver: zodResolver(productSchema),
    defaultValues: data || {},
  });

  const router = useRouter();

  const onSubmit = handleSubmit(async (formData) => {
    try {
      // ⬇️ Get logged user from sessionStorage
      const sessionUser = JSON.parse(sessionStorage.getItem("user") || "{}");
      const createdById = sessionUser.id;

      const payload = {
        name: formData.productName,
        price: Number(formData.productPrice),
        stock: Number(formData.productStock),
        size: formData.productSize,
        isActive: true,
        createdById: createdById || null, // ⬅️ Important
      };

      console.log("PAYLOAD:", payload);

      const res = await axios.post("/api/products", payload);

      toast.success("Product created successfully!");
      router.refresh();
      onClose?.();
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Something went wrong");
    }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Product</h1>
      <span className="text-xs text-gray-400 font-medium">
        Product Information
      </span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Product Name"
          name="productName"
          defaultValue={data?.productName}
          register={register}
          error={errors?.productName}
        />

        <InputField
          label="Product Size"
          name="productSize"
          defaultValue={data?.productSize}
          register={register}
          error={errors?.productSize}
        />

        <InputField
          label="Product Price"
          name="productPrice"
          defaultValue={data?.productPrice}
          register={register}
          error={errors?.productPrice}
        />
      </div>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Product Stock"
          name="productStock"
          defaultValue={data?.productStock}
          register={register}
          error={errors?.productStock}
        />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default ProductForm;

