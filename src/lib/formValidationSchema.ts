import z from "zod";

export const productSchema = z.object({
  productName: z.string().min(1, { message: "Product Name is required!" }),
  productDesc: z.string().min(1, { message: "Product Description is required!" }),
  productSize: z.string().min(1, { message: "Product Size is required!" }),  
   
  productPrice: z
    .string()
    .min(1, { message: "Product Price is required!" })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), "Price must be a valid number"),

  productStock: z
    .string()
    .min(1, { message: "Product Stock is required!" })
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), "Stock must be a valid number"),
});

export type ProductSchema = z.infer<typeof productSchema>;


export const franchiseSchema = z.object({
  franchiseName: z.string().min(1, { message: "Frachise is required!" }),
  code: z.string().min(1, { message: "Code is required!" }),
  ownerName: z.string().min(1, { message: "Owner Name is required!" }),
  email: z.string().email({ message: "Invalid email address!" }),  
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" })
});

export type FranchiseSchema = z.infer<typeof franchiseSchema>;


export const customerSchema = z.object({
  name: z.string().min(1, { message: "Customer Name is required!" }),
  email: z.string().email({ message: "Invalid email address!" }),  
  phone: z.string().min(1, { message: "Phone is required!" }),
  address: z.string().min(1, { message: "Address is required!" })
});

export type CustomerSchema = z.infer<typeof customerSchema>;

export const orderSchema = z.object({

  orderNumber: z.string().min(1, { message: "Order Number is required!" }),
  customerId: z.coerce
  .number()
  .refine((val) => val > 0, { message: "Customer Name is required!" }),

productId: z.coerce
  .number()
  .refine((val) => val > 0, { message: "Product Name is required!" }),

  climate: z.enum(["NORMAL", "HOT", "COLD", "RAINY"])
  .or(z.literal(""))
  .refine((val) => val !== "", {
    message: "Climate is required!",
  }),
  terrain: z.enum(["FLAT", "HILL"])
  .or(z.literal(""))
  .refine((val) => val !== "", {
    message: "Terrain is required!",
  }),
  expectedDeliveryDate: z
  .string()
  .min(1, "Expected delivery date is required"),

  totalAmount: z.coerce.number().positive("Total amount is required"),
});

export type OrderSchema = z.infer<typeof orderSchema>;




export const userSchema = z.object({
  loginUserId: z.string().min(1, { message: "UserID is required!" }),
  password: z.string().min(6),
  email: z.string().email({ message: "Invalid email address!" }),  
  fullName: z.string().min(1, { message: "Name is required!" }),  
  phone: z.string().min(1, { message: "Phone is required!" }),
  //address: z.string().min(1, { message: "Address is required!" }),
  role: z.enum(["SUPER_ADMIN","ADMIN","FACTORY","EMPLOYEE","FRANCHISE","CUSTOMER"])
  .or(z.literal(""))
  .refine((val) => val !== "", {
    message: "role is required!",
  }),
});

export type UserSchema = z.infer<typeof userSchema>;