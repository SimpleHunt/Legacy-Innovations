import { z } from "zod";

export const createCustomerSchema = z.object({
  name: z.string(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),

  // NEW
  customerType: z.enum(["RETAIL", "FRANCHISE"]).optional(),

  // Convert ID fields into number (or string convertible to number)
  franchiseId: z.coerce.number().optional(),
  employeeId: z.coerce.number().optional(),
  createdBy: z.coerce.number().optional(),
});

export const updateCustomerSchema = z.object({
  name: z.string().optional(),
  email: z.string().email().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),

  customerType: z.enum(["RETAIL", "FRANCHISE"]).optional(),

  franchiseId: z.coerce.number().optional(),
  employeeId: z.coerce.number().optional(),
});
