import { z } from "zod";



export const createProductSchema = z.object({
  description: z.string().optional(),
  price: z.number(),
  stock: z.number().optional(),
  createdById: z.string().optional(),
  isActive: z.boolean().optional(),
});

export const updateProductSchema = createProductSchema.partial();

