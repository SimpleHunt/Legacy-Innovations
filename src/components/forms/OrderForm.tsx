"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import InputField from "../InputField";
import { orderSchema, OrderSchema } from "@/lib/formValidationSchema";
import axios from "axios";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";
import { useEffect, useState } from "react";



const OrderForm = ({
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
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    mode: "onChange",
  });

  

  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const router = useRouter(); 

  useEffect(() => {
  const loadCustomers = async () => {
    try {
      const customerRes = await axios.get("/api/customers");
      const productRes  = await axios.get("/api/products");

      setCustomers(customerRes.data.customer);  // ← customer array
      setProducts(productRes .data.products);  // ← Product array
    } catch (error) {
      console.log(error);
    }
  };

  loadCustomers();
}, []);

  const onSubmit = handleSubmit(async (formData) => {
  try {
    const payload = {
      orderNumber:"ORD003",
      customerId: formData.customerId,
      productId: formData.productId,
      climate: formData.climate,
      terrain: formData.terrain,
      expectedDeliveryDate: new Date(formData.expectedDeliveryDate).toISOString(),
      totalAmount: Number(formData.totalAmount),

    };

    console.log("PAYLOAD:", payload);

    const res = await axios.post("/api/orders", payload);

    toast.success("Product created successfully!");
    router.refresh();
    onClose?.();  

  } catch (error: any) {
    toast.error(error?.response?.data?.error || "Something went wrong");
  }
});

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Order</h1>
      <span className="text-xs text-gray-400 font-medium">
        Order Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Order Number"
          name="orderNumber"
          defaultValue={data?.orderNumber}
          register={register}
          error={errors.orderNumber}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Customer Name</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("customerId")}
          >
            <option value="">Select Customer</option>

            {customers.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.customerId?.message && (
            <p className="text-xs text-red-400">{errors.customerId.message}</p>
          )}
        </div>

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Product Name</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("productId")}
            defaultValue={data?.productId}
          >
            <option value="">Select Product</option>

            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>

          {errors.productId?.message && (
            <p className="text-xs text-red-400">
              {errors.productId.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Climate</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("climate")}
            defaultValue={data?.climate}
          >
            <option value="">Select Climate</option>
            <option value="NORMAL">Normal</option>
            <option value="HOT">HOT</option>
            <option value="COLD">COLD</option>
            <option value="RAINY">RAINY</option>            
          </select>

          {errors.climate?.message && (
            <p className="text-xs text-red-400">
              {errors.climate.message.toString()}
            </p>
          )}
        </div>
        
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Terrain</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("terrain")}
            defaultValue={data?.terrain}
          >
            <option value="">Select climate</option>
            <option value="FLAT">Flat</option>
            <option value="HILL">Hill</option>           
          </select>

          {errors.climate?.message && (
            <p className="text-xs text-red-400">
              {errors.climate.message.toString()}
            </p>
          )}
        </div>

       <InputField
        label="Expected Delivery Date"
        name="expectedDeliveryDate"
        type="date"
        defaultValue={data?.expectedDeliveryDate}
        register={register}
        error={errors.expectedDeliveryDate}
      />

        
      </div>
      
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Total Amount"
          name="totalAmount"
          defaultValue={data?.totalAmount}
          register={register}
          error={errors.totalAmount}
        />
        
        
        {/* <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Product Climate</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("productClimate")}
            defaultValue={data?.productClimate}
          >
            <option value="cool">Cool</option>
            <option value="worm">Worm</option>
            <option value="both">Both</option>
          </select>
          {errors.productClimate?.message && (
            <p className="text-xs text-red-400">
              {errors.productClimate.message.toString()}
            </p>
          )}
        </div> */}
        
        
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default OrderForm;
