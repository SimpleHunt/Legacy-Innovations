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
    setValue,
    watch
  } = useForm<OrderSchema>({
    resolver: zodResolver(orderSchema),
    //mode: "onChange",
    defaultValues: data || {
      gstPercent: 18,
    },
  });

  useEffect(() => {
  if (type === "create") {
    const getLastCode = async () => {
      try {
        const res = await axios.get("/api/orders/lastCode");
        setValue("orderNumber", res.data.lastCode);
      } catch (error) {
        console.error(error);
      }
    };

    getLastCode();
  }
}, [type, setValue]);



  const router = useRouter();
  const onSubmit = handleSubmit(async (formData) => {
    try {
      if (!session) {
        toast.error("User session not found!");
        return;
      }

      const payload = {
        orderNumber: formData.orderNumber,
        customerId: Number(formData.customerId),
        productId: Number(formData.productId),
        climate: formData.climate,
        terrain: formData.terrain,
        //expectedDeliveryDate: new Date(formData.expectedDeliveryDate).toISOString(),
        unitPrice: Number(formData.unitPrice),
        discount: Number(formData.discount),
        unitPriceCost: Number(formData.unitPriceCost),
        gstPercentage: Number(formData.gstPercent),
        gstAmount: Number(formData.gstAmountValue),
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

  
const watchProductId = watch("productId");
const watchStock = watch("stock");
const watchUnitPrice = watch("unitPrice");
const watchDiscount = watch("discount");
const watchGstPercent = watch("gstPercent");
const watchGstAmountValue = watch("gstAmountValue");


useEffect(() => {
  if (!watchProductId) return;

  const product = products.find((p) => p.id === Number(watchProductId));
  if (!product) return;

  // Auto-fill fields when product changes
  setValue("unitPrice", product.price);
  setValue("unitPriceCost", product.price);   
  setValue("stock", 1);                       
  setValue("discount", 0);                    
  setValue("totalAmount", product.price);     

}, [watchProductId, products, setValue]);

useEffect(() => {
  let stock = Number(watchStock);
  let unitPrice = Number(watchUnitPrice);
  let discount = Number(watchDiscount);
  let gstPercent = Number(watchGstPercent);
  let gstAmountValue = Number(watchGstAmountValue);

  // --- STOCK VALIDATION ---
  if (stock < 1) {
    stock = 1;
    setValue("stock", 1);
  }

  // --- DISCOUNT VALIDATION ---
  if (discount < 0) {
    discount = 0;
    setValue("discount", 0);
  }
  if (discount > unitPrice) {
    discount = unitPrice;
    setValue("discount", unitPrice);
  }

  // --- UNIT PRICE VALIDATION ---
  if (unitPrice < 0) {
    unitPrice = 0;
    setValue("unitPrice", 0);
  }

  // --- GST VALIDATION ---
  if (gstPercent < 0) {
    gstPercent = 0;
    setValue("gstPercent", 0);
  }

  // --- CALCULATIONS ---
  const unitPriceCost = unitPrice - discount;
  setValue("unitPriceCost", unitPriceCost < 0 ? 0 : unitPriceCost);

  // GST amount value
  const gstAmountValue1 = (unitPriceCost * stock * gstPercent) / 100;
  setValue("gstAmountValue", gstAmountValue1);

  const gstValue = (unitPriceCost * stock * gstPercent) / 100;
  const totalAmount = (unitPriceCost * stock) + gstValue;
  setValue("totalAmount", totalAmount);

}, [watchStock, watchUnitPrice, watchDiscount, watchGstPercent, watchGstAmountValue, setValue]);



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
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }}  
        />

        {/* Customer Select */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Customer Name</label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("customerId")}
          >
            <option value="">Select Customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>{c.name} / {c.cusotmerCode}</option>
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
            <option value="HUMID">Humid</option>
            <option value="COLD">Cold</option>
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
            <option value="HILL_STATION">Hill Station</option>
          </select>
          {errors.terrain && <p className="text-xs text-red-400">{errors.terrain.message}</p>}
        </div>

       <InputField
          label="Stock"
          name="stock"
          type="number"
          register={register}
          registerOptions={{ valueAsNumber: true }}
          error={errors.stock}
        />

      </div>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Unit Price"
          name="unitPrice"
          register={register}
          error={errors.unitPrice}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />

        <InputField
          label="Discount"
          name="discount"
          register={register}
        />
        <InputField
          label="Unit Price Cost"
          name="unitPriceCost"
          register={register}
          error={errors.unitPriceCost}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />
      </div>
      <div className="flex justify-between flex-wrap gap-4">
         <InputField
          label="GST Percentage % "
          name="gstPercent"
          register={register}
          error={errors.gstPercent}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }}
        />
        <InputField
          label="GST Amount Value"
          name="gstAmountValue"
          register={register}
          error={errors.gstAmountValue}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />
        <InputField
          label="Total Amount"
          name="totalAmount"
          register={register}
          error={errors.totalAmount}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default OrderForm;
