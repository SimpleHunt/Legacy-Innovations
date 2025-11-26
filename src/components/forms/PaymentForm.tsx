"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
  
  email: z.string().email({ message: "Invalid email address!" }),
  
  franchiseName: z.string().min(1, { message: "Frachise is required!" }),
  firstName: z.string().min(1, { message: "First name is required!" }),
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" }),
});

type Inputs = z.infer<typeof schema>;

const PaymentForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <h1 className="text-xl font-semibold">Create a new Payment</h1>
      {/* <span className="text-xs text-gray-400 font-medium">
        Franchise Authentication Information
      </span> */}
      {/* <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputField
          label="Email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
        />
        <InputField
          label="Password"
          name="password"
          type="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
        />
      </div> */}
      <span className="text-xs text-gray-400 font-medium">
        Franchise Personal Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Customer Name"
          name="customrName"
          defaultValue={data?.franchiseName}
          register={register}
          error={errors.franchiseName}
        />
        <InputField
          label="Order ID"
          name="orderID"
          defaultValue={data?.firstName}
          register={register}
          error={errors.firstName}
        />
        <InputField
          label="Phone"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors.phone}
        />
        <InputField
          label="Address"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors.address}
        />
        <InputField
          label="Email Address"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors.email}
        />
        
        
      </div>
      <button className="bg-blue-400 text-white p-2 rounded-md">
        {type === "create" ? "Create" : "Update"}
      </button>
    </form>
  );
};

export default PaymentForm;
