"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import { EnquirySchema, enquirySchema } from "@/lib/formValidationSchema";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";
import TextAreaField from "../TextAreaField";
import bcrypt from "bcryptjs";
import { useEffect } from "react";



const FranchiseEnquiryForm = ({
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
    setValue,
  } = useForm<EnquirySchema>({
    resolver: zodResolver(enquirySchema),
    defaultValues: data || {},
  });

   const router = useRouter(); 



  const onSubmit = handleSubmit(async (formData) => {
  try {

    const payload = {
      name: formData.franchiseName,
      ownerName: formData.ownerName,
      ownerEmail: formData.email,
      ownerPhone: formData.phone,
      address: formData.address,
    };

    console.log("PAYLOAD:", payload);

    const res = await axios.post("/api/enquiry", payload);

    toast.success("Enquiry created successfully!");
    router.refresh();
    onClose?.();  

  } catch (error: any) {
    toast.error(error?.response?.data?.error || "Something went wrong");
  }
});
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Enquiry For Franchise </h1>
      
      <span className="text-xs text-gray-400 font-medium">
        Franchise Enquiry Personal Information
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

export default FranchiseEnquiryForm;
