import { z } from "zod";

export const createEmployeeSchema = z.object({
  fullName: z.string(),
  phone: z.string().optional(),
  role: z.literal("EMPLOYEE"),
});

export const updateEmployeeSchema = z.object({
  fullName: z.string().optional(),
  phone: z.string().optional(),
});
