"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import { franchiseSchema, FranchiseSchema } from "@/lib/formValidationSchema";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";
import TextAreaField from "../TextAreaField";



const FranchiseForm = ({
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
  } = useForm<FranchiseSchema>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: data || {},
  });

   const router = useRouter(); 


  const onSubmit = handleSubmit(async (formData) => {
  try {
    const payload = {
      name: formData.franchiseName,
      code: formData.code,
      ownerName: formData.ownerName,
      ownerEmail: formData.email,
      ownerPhone: formData.phone,
      address: formData.address,
      isActive: true,
    };

    //console.log("PAYLOAD:", payload);

    const res = await axios.post("/api/franchise", payload);

    toast.success("Franchise created successfully!");
    router.refresh();
    onClose?.();  

  } catch (error: any) {
    toast.error(error?.response?.data?.error || "Something went wrong");
  }
});
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Franchise</h1>
      
      <span className="text-xs text-gray-400 font-medium">
        Franchise Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Franchise Name"
          name="franchiseName"
          defaultValue={data?.franchiseName}
          register={register}
          error={errors.franchiseName}
        />
        <InputField
          label="Owner Name"
          name="ownerName"
          defaultValue={data?.ownerName}
          register={register}
          error={errors.ownerName}
        />
        <InputField
          label="Franchise Code"
          name="code"
          defaultValue={data?.code}
          register={register}
          error={errors.code}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        
        <InputField
          label="Email Address"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
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

export default FranchiseForm;
