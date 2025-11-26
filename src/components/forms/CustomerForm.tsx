"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";
import { customerSchema, CustomerSchema } from "@/lib/formValidationSchema";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import TextAreaField from "../TextAreaField";



const CustomerForm = ({
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
  } = useForm<CustomerSchema>({
    resolver: zodResolver(customerSchema),
  });

  const router = useRouter(); 

  const onSubmit = handleSubmit(async (formData) => {
  try {
    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      
    };

    console.log("PAYLOAD:", payload);

    const res = await axios.post("/api/customers", payload);

    toast.success("Product created successfully!");
    router.refresh();
    onClose?.();  

  } catch (error: any) {
    toast.error(error?.response?.data?.error || "Something went wrong");
  }
});

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Customer</h1>
      
      <span className="text-xs text-gray-400 font-medium">
        Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Customer Name"
          name="name"
          defaultValue={data?.name}
          register={register}
          error={errors.name}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
       
        <TextAreaField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        
        
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default CustomerForm;
