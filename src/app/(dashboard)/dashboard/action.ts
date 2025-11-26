"use server";

import prisma from "@/lib/db";

export async function getDashboardCounts() {
  const productCount = await prisma.product.count();
  const userCount = await prisma.user.count();
  const orderCount = await prisma.order.count();
  const customerCount = await prisma.customer.count();
 

  return {
    productCount,
    userCount,
    orderCount,
    customerCount,
    
  };
}
