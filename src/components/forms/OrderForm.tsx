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
import { z } from "zod";
import TextAreaField from "../TextAreaField";

type SessionUser = {
  id: string;
  role: string;
  email?: string | null;
  franchiseId?: number | null;
};

type OrderFormProps = {
  type: "create" | "update";
  data?: any;
  onClose?: () => void;
};

const OrderForm = ({ type, data, onClose }: OrderFormProps) => {
  const router = useRouter();

  const [user, setUser] = useState<SessionUser | null>(null);
  const [customers, setCustomers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  // ✅ Load session ONCE
  useEffect(() => {
    const sessionUser = getSessionUser();
    if (sessionUser) setUser(sessionUser);
  }, []);

  // ✅ Load customers & products after session exists
  useEffect(() => {
    if (!user) return;

    console.log(user);

    const loadData = async () => {
      try {
        const customerRes = await axios.get(
          `/api/customers?createdBy=${user.id}`
        );
        const productRes = await axios.get(
          "/api/products?isActive=true"
        );

        setCustomers(customerRes.data.customers ?? []);
        setProducts(productRes.data.products ?? []);
      } catch (error) {
        console.error(error);
        setCustomers([]);
        setProducts([]);
      }
    };

    loadData();
  }, [user]);

  // type OrderFormInput = z.input<typeof orderSchema>;   // 👈 unknown allowed
//type OrderFormOutput = z.output<typeof orderSchema>; // 👈 numbers guaranteed

type OrderItem = {
  productId: string;
  climate: string,
  terrain: string,
  description: string,
  stock: number;
  unitPrice: number;
  discount: number;
  gstPercent: string;
  gstAmountValue: number;
  unitPriceCost: number;
  totalAmount: number;
};

const [orderItems, setOrderItems] = useState<OrderItem[]>([]);


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(orderSchema),
    defaultValues: data || { gstPercent: 18,
      stock: 1,
    discount: 0,
    unitPrice: 0,
    unitPriceCost: 0,
    gstAmountValue: 0,
    totalAmount: 0,
    },
  });

 

  // ✅ Auto-generate order number (create only)
  useEffect(() => {
    if (type !== "create") return;

    const getLastCode = async () => {
      try {
        const res = await axios.get("/api/orders/lastCode");
        setValue("orderNumber", res.data.lastCode);
      } catch (error) {
        console.error(error);
      }
    };

    getLastCode();
  }, [type, setValue]);

  const getCurrentProductFromForm = () => {
  const values = watch();

  if (!values.productId) return null;

  return {
    customerId: values.customerId,
    productId: values.productId,
    climate: values.climate,
    terrain: values.terrain,
    description: values.description , 
    stock: Number(values.stock),
    unitPrice: Number(values.unitPrice),
    discount: Number(values.discount),
    gstPercent: String(values.gstPercent),
    unitPriceCost: Number(values.unitPriceCost),
    gstAmountValue: Number(values.gstAmountValue),
    totalAmount: Number(values.totalAmount),
  };
};

//   const onSubmit = handleSubmit(async (formData) => {
//   try {
//     if (!user) {
//       toast.error("User session not found!");
//       return;
//     }

//     // ✅ ONLY CHECK ADDED PRODUCTS
//     if (orderItems.length === 0) {
//       toast.error("Please add the product");
//       return;
//     }

//     const payload = {
//       orderNumber: formData.orderNumber,
//       customerId: Number(formData.customerId),
//       climate: formData.climate,
//       terrain: formData.terrain,

//       createdBy: Number(user.id),
//       employeeId: user.role === "EMPLOYEE" ? Number(user.id) : null,
//       franchiseId:
//         user.role === "FRANCHISE"
//           ? Number(user.franchiseId)
//           : null,

//       // ✅ INSERT ONLY ADDED PRODUCTS
//       items: orderItems.map((item) => ({
//         productId: Number(item.productId),
//         climate: item.climate,
//         terrain: item.terrain,
//         stock: item.stock,
//         unitPrice: item.unitPrice,
//         discount: item.discount,
//         unitPriceCost: item.unitPriceCost,
//         gstPercent: Number(item.gstPercent),
//         gstAmount: item.gstAmountValue,
//         totalAmount: item.totalAmount,
//       })),
//     };

//     await axios.post("/api/orders", payload);

//     toast.success("Order created successfully!");
//     router.refresh();
//     onClose?.();
//   } catch (error: any) {
//     toast.error(
//       error?.response?.data?.error || "Something went wrong"
//     );
//   }
// });

const handleCreate = async () => {
  try {
    if (!user) {
      toast.error("User session not found!");
      return;
    }

    // ✅ ONLY CHECK ADDED PRODUCTS
    if (orderItems.length === 0) {
      toast.error("Please add the product");
      return;
    }

    const values = watch(); // only for order-level fields

    const payload = {
      orderNumber: values.orderNumber,
      customerId: Number(values.customerId),
      climate: values.climate,
      terrain: values.terrain,

      createdBy: Number(user.id),
      employeeId: user.role === "EMPLOYEE" ? Number(user.id) : null,
      franchiseId:
        user.role === "FRANCHISE"
          ? Number(user.franchiseId)
          : null,

      items: orderItems.map((item) => ({
        productId: Number(item.productId),
        climate: item.climate,
        terrain: item.terrain,
        stock: item.stock,
        description : item.description,
        unitPrice: item.unitPrice,
        discount: item.discount,
        unitPriceCost: item.unitPriceCost,
        gstPercent: Number(item.gstPercent),
        gstAmount: item.gstAmountValue,
        totalAmount: item.totalAmount,
      })),
    };

    await axios.post("/api/orders", payload);

    toast.success("Order created successfully!");
    router.refresh();
    onClose?.();
  } catch (error: any) {
    toast.error(
      error?.response?.data?.error || "Something went wrong"
    );
  }
};



  const addProductToOrder = () => {
  const product = getCurrentProductFromForm();

   if (!product) {
    toast.error("Please select a product");
    return;
  }
  if (!product.customerId) {
    toast.error("Please select Cusotmer Name");
    return;
  }

  if (!product.climate) {
    toast.error("Please select Climate");
    return;
  }

  if (!product.terrain) {
    toast.error("Please select Terrain");
    return;
  }
  if (!product.description) {
    toast.error("Please select Description");
    return;
  }

  if (!product.stock || product.stock < 1) {
    toast.error("Please enter valid quantity");
    return;
  }

  setOrderItems((prev) => [...prev, product]);

  // reset ONLY product fields
  setValue("productId", "");
  setValue("stock", 1);
  setValue("discount", 0);
  setValue("unitPrice", 0);
  setValue("unitPriceCost", 0);
  setValue("gstAmountValue", 0);
  setValue("totalAmount", 0);
};



  // 🔢 Watch fields
  const watchProductId = watch("productId");
  const watchStock = watch("stock");
  const watchUnitPrice = watch("unitPrice");
  const watchDiscount = watch("discount");
  const watchGstPercent = watch("gstPercent");

  // ✅ Auto-fill when product changes
  useEffect(() => {
    if (!watchProductId) return;

    const product = products.find(
      (p) => p.id === Number(watchProductId)
    );
    if (!product) return;

    setValue("unitPrice", product.price);
    setValue("unitPriceCost", product.price);
    setValue("stock", 1);
    setValue("discount", 0);
    setValue("totalAmount", product.price);
  }, [watchProductId, products, setValue]);

  // ✅ Auto-calc totals
  useEffect(() => {
    let stock = Number(watchStock) || 1;
    let unitPrice = Number(watchUnitPrice) || 0;
    let discount = Number(watchDiscount) || 0;
    let gstPercent = Number(watchGstPercent) || 0;

    if (stock < 1) stock = 1;
    if (discount < 0) discount = 0;
    if (discount > unitPrice) discount = unitPrice;

    const unitPriceCost = unitPrice - discount;
    setValue("unitPriceCost", unitPriceCost);

    const gstAmountValue =
      (unitPriceCost * stock * gstPercent) / 100;
    setValue("gstAmountValue", gstAmountValue);

    const totalAmount =
      unitPriceCost * stock + gstAmountValue;
    setValue("totalAmount", totalAmount);
  }, [
    watchStock,
    watchUnitPrice,
    watchDiscount,
    watchGstPercent,
    setValue,
  ]);

  return (
    <form className="flex flex-col gap-8" >
      <h1 className="text-xl font-semibold">
        {type === "create" ? "Create a new Order" : "Update Order"}
      </h1>

      <span className="text-xs text-gray-500 font-medium">
        Order Information
      </span>

      <div className="flex justify-between flex-wrap gap-4">

        <InputField
          label="Order Number"
          name="orderNumber"
          register={register}
          //error={errors.orderNumber}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }}  
        />

        {/* Customer Select */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Customer Name <span className="text-red-500">*</span></label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("customerId")}
          >
            <option value="">Select Customer</option>
            {customers.map((c) => (
              <option key={c.id} value={c.id}>{c.name} / {c.cusotmerCode}</option>
            ))}
          </select>
          {/* {errors.customerId && <p className="text-xs text-red-400">{errors.customerId.message}</p>} */}
        </div>

        {/* Product Select */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Product Name <span className="text-red-500">*</span></label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("productId")}
          >
            <option value="">Select Product</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name}</option>
            ))}
          </select>
          {/* {errors.productId && (
            <p className="text-xs text-red-400">{errors.productId.message}</p>
          )} */}
        </div>

        {/* Climate */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Climate <span className="text-red-500">*</span></label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("climate")}
          >
            <option value="">Select Climate</option>
            <option value="HUMID">Humid</option>
            <option value="COLD">Cold</option>
          </select>
          {/* {errors.climate && <p className="text-xs text-red-400">{errors.climate.message}</p>} */}
        </div>

        {/* Terrain */}
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Terrain <span className="text-red-500">*</span></label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("terrain")}
          >
            <option value="">Select Terrain</option>
            <option value="FLAT">Flat</option>
            <option value="HILL_STATION">Hill Station</option>
          </select>
          {/* {errors.terrain && <p className="text-xs text-red-400">{errors.terrain.message}</p>} */}
        </div>

       <InputField
          label="Quantity"
          name="stock"
          type="number"
          register={register}
          //registerOptions={{ valueAsNumber: true }}
          //error={errors.stock}
        />

      </div>

      <TextAreaField label="Description" name="description" defaultValue={data?.description} register={register} />

      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Unit Price"
          name="unitPrice"
          register={register}
          //error={errors.unitPrice}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />

        <InputField
          label="Discount"
          name="discount"
          type="number"
          register={register}
        />
        <InputField
          label="Unit Price Cost"
          name="unitPriceCost"
          register={register}
          //error={errors.unitPriceCost}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />
      </div>
      <div className="flex justify-between flex-wrap gap-4">

        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">GST Percentage % <span className="text-red-500">*</span></label>
          <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("gstPercent")}
          >
            <option value="">Select GST Percentage</option>
            <option value="9">9 Percentage %</option>
            <option value="18">18 Percentage %</option>
            <option value="0">Nill Percentage %</option>
          </select>
          {errors.gstPercent && <p className="text-xs text-red-400">{
          //errors.gstPercent.message
          }</p>}
        </div>
         {/* <InputField
          label="GST Percentage % "
          name="gstPercent"
          register={register}
          //error={errors.gstPercent}
          
        /> */}
        <InputField
          label="GST Amount Value"
          name="gstAmountValue"
          register={register}
          //error={errors.gstAmountValue}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />
        <InputField
          label="Total Amount"
          name="totalAmount"
          register={register}
          //error={errors.totalAmount}
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }} 
        />
      </div>

      <button
  type="button"
  onClick={addProductToOrder}
  className="bg-green-500 text-white p-2 rounded-md"
>
  + Add Another Product
</button>

      {orderItems.length > 0 && (
  <div className="border rounded-md p-4">
    <h3 className="font-semibold mb-3">Added Products</h3>

    {orderItems.map((item, index) => (
      <div
        key={index}
        className="grid grid-cols-4 gap-3 text-sm border-b py-3"
      >
        <div>
          <span className="font-medium">Product</span>
          <p>{item.productId}</p>
        </div>

        <div>
          <span className="font-medium">Climate</span>
          <p>{item.climate}</p>
        </div>

        <div>
          <span className="font-medium">Terrain</span>
          <p>{item.terrain}</p>
        </div>

        <div>
          <span className="font-medium">Stock</span>
          <p>{item.stock}</p>
        </div>

        <div>
          <span className="font-medium">Unit Price</span>
          <p>₹{item.unitPrice}</p>
        </div>

        <div>
          <span className="font-medium">Discount</span>
          <p>₹{item.discount}</p>
        </div>

        <div>
          <span className="font-medium">Unit Price Cost</span>
          <p>₹{item.unitPriceCost}</p>
        </div>

        <div>
          <span className="font-medium">GST %</span>
          <p>{item.gstPercent}%</p>
        </div>

        <div>
          <span className="font-medium">GST Amount</span>
          <p>₹{item.gstAmountValue}</p>
        </div>

        <div>
          <span className="font-medium">Total Amount</span>
          <p className="font-semibold text-green-600">
            ₹{item.totalAmount}
          </p>
        </div>
        <div>
          <span className="font-medium">Description</span>
          <p>{item.description}</p>
        </div>
      </div>
    ))}
  </div>
)}




<button
  type="button"
  onClick={handleCreate}
  disabled={orderItems.length === 0}
  className="bg-blue-400 text-white p-2 rounded-md disabled:opacity-50"
>
  Create
</button>


{/* 
     <button
      disabled={orderItems.length === 0}
      className="bg-blue-400 text-white p-2 rounded-md disabled:opacity-50"
    >
      Create
    </button> */}
    </form>
  );
};

export default OrderForm;
