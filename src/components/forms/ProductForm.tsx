"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import InputField from "../InputField";

const schema = z.object({
  productName: z.string().min(1, { message: "Product Name is required!" }),
  productType: z.string().min(1, { message: "Product Type is required!" }),
  productSize: z.string().min(1, { message: "Product Size is required!" }),
  productDesc: z.string().min(1, { message: "Product Desc is required!" }),
  productClimate: z.enum(["Cool", "Worm", "Both"], { message: "Climate is required!" }),
  productTareene: z.enum(["Flate", "Hill"], { message: "Tareene is required!" }),
  img: z.instanceof(File, { message: "Image is required" }),
});

type Inputs = z.infer<typeof schema>;

const ProductForm = ({
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
      <h1 className="text-xl font-semibold">Create a new Product</h1>
      <span className="text-xs text-gray-400 font-medium">
        Authentication Information
      </span>
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Product Name"
          name="productName"
          defaultValue={data?.productName}
          register={register}
          error={errors?.productName}
        />
        <InputField
          label="Product Type"
          name="productType"
          defaultValue={data?.productType}
          register={register}
          error={errors?.productType}
        />
        <InputField
          label="Product Size"
          name="productSize"
          defaultValue={data?.productSize}
          register={register}
          error={errors?.productSize}
        />
      </div>
      
      <div className="flex justify-between flex-wrap gap-4">
        <InputField
          label="Product Desc"
          name="productDesc"
          defaultValue={data?.productDesc}
          register={register}
          error={errors.productDesc}
        />
        
        
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Product Climate</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("productClimate")}
            defaultValue={data?.productClimate}
          >
            <option value="cool">Cool</option>
            <option value="worm">Worm</option>
            <option value="both">Both</option>
          </select>
          {errors.productClimate?.message && (
            <p className="text-xs text-red-400">
              {errors.productClimate.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4">
          <label className="text-xs text-gray-500">Product Tareene</label>
          <select
            className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
            {...register("productTareene")}
            defaultValue={data?.productTareene}
          >
            <option value="flate">Flate</option>
            <option value="hill">Hill</option>
          </select>
          {errors.productTareene?.message && (
            <p className="text-xs text-red-400">
              {errors.productTareene.message.toString()}
            </p>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
          <label
            className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
            htmlFor="img"
          >
            <Image src="/upload.png" alt="" width={28} height={28} />
            <span>Upload a photo</span>
          </label>
          <input type="file" id="img" {...register("img")} className="hidden" />
          {errors.img?.message && (
            <p className="text-xs text-red-400">
              {errors.img.message.toString()}
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

export default ProductForm;
