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
import bcrypt from "bcryptjs";
import { useEffect } from "react";



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
    setValue,
  } = useForm<FranchiseSchema>({
    resolver: zodResolver(franchiseSchema),
    defaultValues: data || {},
  });

   const router = useRouter(); 


   useEffect(() => {
  if (type === "create") {
    const getLastCode = async () => {
      try {
        const res = await axios.get("/api/franchise/lastCode");

        // If no last code exists → start from LI-FC-001
        const lastCode = res.data?.lastCode;
        const lastNumber = parseInt(lastCode.replace("LI-FC-", ""), 10) || 0;
        const nextNumber = lastNumber + 1;
        const formatted = `LI-FC-${String(nextNumber).padStart(3, "0")}`;
        
        setValue("code", formatted);
      } catch (error) {
        console.error(error);
      }
    };

    getLastCode();
  }
}, [type, setValue]);


//   const onSubmit = handleSubmit(async (formData) => {
//   try {
//     // 🔐 Hash the password
//     const hashedPassword = await bcrypt.hash(formData.password, 10);

//     const payload = {
//       name: formData.franchiseName,
//       code: formData.code,
//       ownerName: formData.ownerName,
//       ownerEmail: formData.email,
//       ownerPhone: formData.phone,
//       address: formData.address,
//       loginUserId: formData.loginUserId,
//       password: hashedPassword,
      
//       isActive: true,
//     };

//     //console.log("PAYLOAD:", payload);

//     const res = await axios.post("/api/franchise", payload);

//     toast.success("Franchise created successfully!");
//     router.refresh();
//     onClose?.();  

//   } catch (error: any) {
//     toast.error(error?.response?.data?.error || "Something went wrong");
//   }
// });

const onSubmit = handleSubmit(async (formData) => {
  try {
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    const fd = new FormData();

    fd.append("name", formData.franchiseName);
    fd.append("code", formData.code);
    fd.append("ownerName", formData.ownerName);
    fd.append("ownerEmail", formData.email);
    fd.append("ownerPhone", formData.phone);
    fd.append("address", formData.address);
    fd.append("loginUserId", formData.loginUserId);
    fd.append("password", hashedPassword);
    fd.append("isActive", "true");

    // Attach Files (if selected)
    if (formData.companyProfile?.[0]) {
      fd.append("companyProfile", formData.companyProfile[0]);
    }
    if (formData.companyKyc?.[0]) {
      fd.append("companyKyc", formData.companyKyc[0]);
    }
    if (formData.bankDetails?.[0]) {
      fd.append("bankDetails", formData.bankDetails[0]);
    }
    if (formData.itrDocs?.[0]) {
      fd.append("itrDocs", formData.itrDocs[0]);
    }

    const res = await axios.post("/api/franchise", fd, {
      headers: { "Content-Type": "multipart/form-data" },
    });

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
          inputProps={{ readOnly: true, style: { backgroundColor: "rgb(205 205 205)" } }}   // 👈 Prevent editing
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


        <InputField
          label="User Name"
          name="loginUserId"
          defaultValue={data?.loginUserId}
          register={register}
          error={errors.loginUserId}
        />
        <InputField
          label="Password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors.password}
        />
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="companyProfile"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload Company Profile </span>
          </label>
          <input type="file" id="companyProfile" accept="application/pdf" {...register("companyProfile")} className="hidden" />
          {errors.companyProfile?.message && (
            <p className="text-xs text-red-400">
              {errors.companyProfile.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="companyKyc"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload Company KYC </span>
          </label>
          <input type="file" id="companyKyc" accept="application/pdf" {...register("companyKyc")} className="hidden" />
          {errors.companyKyc?.message && (
            <p className="text-xs text-red-400">
              {errors.companyKyc.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="bankDetails"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload Bank Account Details  </span>
          </label>
          <input type="file" id="bankDetails" accept="application/pdf" {...register("bankDetails")} className="hidden" />
          {errors.bankDetails?.message && (
            <p className="text-xs text-red-400">
              {errors.bankDetails.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="itrDocs"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload  ITR or Balnce Sheet last 3 Years</span>
          </label>
          <input type="file" id="itrDocs" accept="application/pdf" {...register("itrDocs")} className="hidden" />
          {errors.itrDocs?.message && (
            <p className="text-xs text-red-400">
              {errors.itrDocs.message.toString()}
            </p>
          )}
        </div>
        
        
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default FranchiseForm;
