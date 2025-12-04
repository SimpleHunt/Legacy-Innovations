"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import { orderSchema, OrderSchema } from "@/lib/formValidationSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/getSessionUser";


const OrderForm = ({
  type,
  data,
  onClose,
  
}: {
  type: "create" | "update";
  data?: any;
  onClose?: () => void;
  
}) => {
  const [session, setSession] = useState<any>(null);
  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  

  // 🔹 Load Session
  useEffect(() => {
    setSession(getSessionUser());
  }, []);

  // 🔹 Load Customers + Products
  useEffect(() => {
    const loadCustomers = async () => {
      try {
        const user = getSessionUser();
        const createdBy = user?.id;

        const customerRes = await axios.get(`/api/customers?createdBy=${createdBy}`);
        const productRes = await axios.get("/api/products?isActive=true");

        setCustomers(customerRes.data.customers ?? []);
        setProducts(productRes.data.products ?? []);
      } catch (error) {
        console.log(error);
        setCustomers([]);
        setProducts([]);
      }
    };
    loadCustomers();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    //mode: "onChange",
    defaultValues: data || {},
  });

<<<<<<< HEAD
  const router = useRouter();
  const onSubmit = handleSubmit(async (formData) => {
    try {
      if (!session) {
        toast.error("User session not found!");
        return;
      }
=======
  

  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  const router = useRouter(); 

  useEffect(() => {
  const loadCustomers = async () => {
    try {
      const customerRes = await axios.get("/api/customers?franchiseId=3");
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
      orderNumber:formData.orderNumber,
      customerId: formData.customerId,
      productId: formData.productId,
      climate: formData.climate,
      terrain: formData.terrain,
      expectedDeliveryDate: new Date(formData.expectedDeliveryDate).toISOString(),
      totalAmount: Number(formData.totalAmount),
      franchiseId: 3,
>>>>>>> c451937a061cf7b0ae4e343925bb8a52e21132c2

      const payload = {
        orderNumber: formData.orderNumber,
        customerId: Number(formData.customerId),
        productId: Number(formData.productId),
        climate: formData.climate,
        terrain: formData.terrain,
        expectedDeliveryDate: new Date(formData.expectedDeliveryDate).toISOString(),
        totalAmount: Number(formData.totalAmount),

        createdBy: Number(session.id),
        employeeId: session.role === "EMPLOYEE" ? Number(session.id) : null,
        franchiseId: session.role === "FRANCHISE" ? Number(session.franchiseId) : null,
      };

      console.log("PAYLOAD:", payload);

      if (type === "create") {
        await axios.post("/api/orders", payload);
        toast.success("Order created successfully!");
      } else {
        await axios.put(`/api/orders/${data.id}`, payload);
        toast.success("Order updated successfully!");
      }

      router.refresh();

      // Close modal
      onClose?.();

    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Something went wrong");
    }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Order" : "Update Order"}
      </h1>

      <span className="text-xs text-gray-500 font-medium">Order Information</span>

      <div className="flex justify-between flex-wrap gap-4">

        <InputField
          label="Order Number"
          name="orderNumber"
          register={register}
          error={errors.orderNumber}
        />

        {/* Customer Select */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Customer Name</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("customerId")}
          >
            <option value="">Select Customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          {errors.customerId && <p className="text-xs text-red-400">{errors.customerId.message}</p>}
        </div>

        {/* Product Select */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Product Name</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("productId")}
          >
            <option value="">Select Product</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          {errors.productId && (
            <p className="text-xs text-red-400">{errors.productId.message}</p>
          )}
        </div>

        {/* Climate */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Climate</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("climate")}
          >
            <option value="">Select Climate</option>
            <option value="NORMAL">Normal</option>
            <option value="HOT">Hot</option>
            <option value="COLD">Cold</option>
            <option value="RAINY">Rainy</option>
          </select>
          {errors.climate && <p className="text-xs text-red-400">{errors.climate.message}</p>}
        </div>

        {/* Terrain */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Terrain</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("terrain")}
          >
            <option value="">Select Terrain</option>
            <option value="FLAT">Flat</option>
            <option value="HILL">Hill</option>
          </select>
          {errors.terrain && <p className="text-xs text-red-400">{errors.terrain.message}</p>}
        </div>

        <InputField
          label="Expected Delivery Date"
          name="expectedDeliveryDate"
          type="date"
          register={register}
          error={errors.expectedDeliveryDate}
        />
      </div>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Total Amount"
          name="totalAmount"
          register={register}
          error={errors.totalAmount}
        />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default OrderForm;
