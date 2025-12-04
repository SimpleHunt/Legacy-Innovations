"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CustomerSchema, customerSchema } from "@/lib/formValidationSchema";
import InputField from "../InputField";
import TextAreaField from "../TextAreaField";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSessionUser } from "@/lib/getSessionUser"; // <-- use your session function

const CustomerForm = ({ type, data, onClose }: { type: "create" | "update"; data?: any; onClose?: () => void }) => {
  
  const [session, setSession] = useState<any>();

  useEffect(() => {
    const user = getSessionUser(); // get session using your function
    setSession(user);
  }, []);

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
      if (!session) return toast.error("Session not found!");

      const payload = {
        ...formData,
        createdBy: Number(session.id),           
        employeeId: session.role === "EMPLOYEE" ? Number(session.id) : null,
        franchiseId: session.role === "FRANCHISE" ? Number(session.franchiseId) : null,
      };

       console.log("PAYLOAD:", payload);

      await axios.post("/api/customers", payload);

      toast.success("Customer created successfully!");
      router.refresh();
      onClose?.();
    } catch (error: any) {
      toast.error(error?.response?.data?.error || "Something went wrong");
    }
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Customer</h1>

      <span className="text-xs text-gray-400 font-medium">Personal Information</span>

      <div className="flex justify-between flex-wrap gap-4">
        <InputField label="Customer Name" name="name" defaultValue={data?.name} register={register} error={errors.name} />
        <InputField label="Email" name="email" defaultValue={data?.email} register={register} error={errors.email} />
        <InputField label="Phone" name="phone" defaultValue={data?.phone} register={register} error={errors.phone} />
        <TextAreaField label="Address" name="address" defaultValue={data?.address} register={register} error={errors.address} />
        <InputField label="User Name" name="loginUserId" defaultValue={data?.loginUserId} register={register} error={errors.loginUserId} />
        <InputField label="Password" name="password" register={register} error={errors.password} />
      </div>

      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default CustomerForm;
