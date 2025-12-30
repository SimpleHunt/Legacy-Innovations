import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Type for:
 * prisma.order.findMany({
 *   include: { customer: true, product: true }
 * })
 */
export type OrderWithRelations = Prisma.Result<
  typeof prisma.order,
  {
    include: {
      customer: true;
      product: true;
    };
  },
  "findMany"
>[number];
