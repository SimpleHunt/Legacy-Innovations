import { z } from "zod";

export const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  fullName: z.string().optional(),
  phone: z.string().optional(),
  role: z.enum(["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"]),
});

export const updateUserSchema = z.object({
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  fullName: z.string().optional(),
  phone: z.string().optional(),
  role: z.enum(["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"]).optional(),
});
