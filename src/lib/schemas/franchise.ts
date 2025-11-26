import { z } from "zod";

export const createFranchiseSchema = z.object({
  name: z.string(),
  code: z.string(),

  ownerName: z.string().optional(),
  ownerEmail: z.string().email().optional(),
  ownerPhone: z.string().optional(),

  address: z.string().optional(),
  createdBy: z.coerce.number().optional(),
});

export const updateFranchiseSchema = z.object({
  name: z.string().optional(),
  code: z.string().optional(),

  ownerName: z.string().optional(),
  ownerEmail: z.string().email().optional(),
  ownerPhone: z.string().optional(),

  address: z.string().optional(),

  isActive: z.boolean().optional(),
});
