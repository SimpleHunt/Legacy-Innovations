import { z } from "zod";

export const createPaymentSchema = z.object({
  orderId: z.string(),
  amount: z.number(),
  method: z.string().optional(),
  status: z.string().default("PENDING"),
  transactionRef: z.string().optional(),
  paidAt: z.string().datetime().optional(),
});

export const updatePaymentSchema = z.object({
  amount: z.number().optional(),
  method: z.string().optional(),
  status: z.string().optional(),
  transactionRef: z.string().optional(),
  paidAt: z.string().datetime().optional(),
});
