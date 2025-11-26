"use server";


import { productSchema, ProductSchema } from "@/lib/formValidationSchema";
import { prisma } from "./prisma";

type CurrentState = { success: boolean; error: boolean };


export const createProduct = async (
  currentState: CurrentState,
  data: ProductSchema
) => {
  try {
    await prisma.productTable.create({
      data: {
        productName: data.productName,
        productTable: {
          connect: data.productTable.map((id) => ({ id: productID })),
        },
      },
    });

    
    return { success: true, error: false };
  } catch (err) {
    console.log(err);
    return { success: false, error: true };
  }
};