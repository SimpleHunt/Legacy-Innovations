"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import { userSchema, UserSchema } from "@/lib/formValidationSchema";
import Image from "next/image";
import axios from "axios";
import { toast } from "react-toastify";
import {  useRouter } from "next/navigation";
import TextAreaField from "../TextAreaField";
import bcrypt from "bcryptjs";



const UserForm = ({
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
  } = useForm<UserSchema>({
    resolver: zodResolver(userSchema),
    defaultValues: data || {},
  });

   const router = useRouter(); 
   

  const onSubmit = handleSubmit(async (formData) => {
  try {
    // 🔐 Hash the password
  const hashedPassword = await bcrypt.hash(formData.password, 10);

    const payload = {
      loginUserId: formData.loginUserId,
      password: hashedPassword,
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      //address: formData.address, 
      role: formData.role,     
    };

    console.log("PAYLOAD:", payload);

    const res = await axios.post("/api/users", payload);

    toast.success("Users created successfully!");
    router.refresh();
    onClose?.();  

  } catch (error: any) {
    toast.error(error?.response?.data?.error || "Something went wrong");
  }
});
  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new User</h1>
      
      <span className="text-xs text-gray-400 font-medium">
        User Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Login UserId"
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
        <InputField
          label="Name"
          name="fullName"
          defaultValue={data?.fullName}
          register={register}
          error={errors.fullName}
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

       
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Role</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("role")}
            defaultValue={data?.role}
          >
            <option value="">Select role</option>
            <option value="SUPER_ADMIN">SUPER_ADMIN</option>
            <option value="ADMIN">ADMIN</option>
            <option value="FACTORY">FACTORY</option>
            <option value="EMPLOYEE">INSIDESALES</option> 
            <option value="FRANCHISE">FRANCHISE</option> 
            <option value="CUSTOMER">CUSTOMER</option>               
          </select>

          {errors.role?.message && (
            <p className="text-xs text-red-400">
              {errors.role.message.toString()}
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

export default UserForm;
