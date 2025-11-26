import { z } from "zod";

export const orderItemSchema = z.object({
  productId: z.coerce.number(),
  quantity: z.coerce.number().int().positive(),
  unitPrice: z.coerce.number().nonnegative().optional(),
});

export const createOrderSchema = z.object({
  orderNumber: z.string(),

  franchiseId: z.coerce.number().optional(),
  customerId: z.coerce.number().optional(),
  employeeId: z.coerce.number().optional(),

  items: z.array(orderItemSchema).min(1),

  climate: z.enum(["HOT", "COLD", "NORMAL", "RAINY"]),
  terrain: z.enum(["FLAT", "HILL"]),

  status: z
    .enum(["PENDING", "PROCESSING", "COMPLETED", "CANCELLED"])
    .optional(),

  expectedDeliveryDate: z.string().optional(),
});

export const updateOrderSchema = createOrderSchema.partial();
