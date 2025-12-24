import { Prisma } from "@prisma/client";

export type OrderWithRelations = Prisma.OrderGetPayload<{
  include: {
    customer: true;
    product: true;
   
  };
}>;
