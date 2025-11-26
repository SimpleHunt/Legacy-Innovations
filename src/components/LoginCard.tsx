
"use client";

import z from "zod";
import Logo from "./Logo";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputFieldLogin from "./InputFieldLogin";
import Link from "next/link";

const schema = z.object({
  username: z.string().min(1, { message: "UserName is required!" }),
  password: z.string().min(1, { message: "Password Type is required!" }),
  
});

type Inputs = z.infer<typeof schema>;



const LoginCard = ({
  type,
  data,
}: {
  type: "Login IN";
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
    <div className="bg-white shadow-md rounded-xl p-10 w-[380px] text-center">
      <Logo />

      <h2 className="text-lg font-semibold">Log in to your account</h2>
      <p className="text-gray-500 text-sm mt-1 mb-6">
        Enter your email address and password to access.
      </p>

      <div className="flex flex-col gap-2 w-full align-baseline text-start">
        
        <InputFieldLogin
          label="User Name"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
        />
        <InputFieldLogin
          label="Password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password} 
        />
      </div>
      
      <button className=" bg-blue-400 text-white gap-2 p-2 rounded-md w-full mt-4">
        {type = "Login IN"}
      </button>
        
    </div>
    </form>
  );
}
export default LoginCard;