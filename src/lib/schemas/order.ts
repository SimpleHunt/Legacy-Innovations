import { z } from "zod";

export const createOrderSchema = z.object({
  orderNumber: z.string(), // can allow backend auto-generate if needed

  franchiseId: z.coerce.number().optional(),
  customerId: z.coerce.number().optional(),
  employeeId: z.coerce.number().optional(),

  productId: z.coerce.number(), // required

  climate: z.enum(["HOT", "COLD", "NORMAL", "RAINY"]),
  terrain: z.enum(["FLAT", "HILL"]),
  createdBy: z.coerce.number().optional(),

  status: z
    .enum(["PENDING", "PROCESSING", "COMPLETED", "CANCELLED"])
    .optional(),

  expectedDeliveryDate: z.string().optional(),
  totalAmount: z.number().optional(), // optional, can be calculated in backend
});

export const updateOrderSchema = createOrderSchema.partial();
