// src/lib/data.ts

import prisma from "./db";

export async function getCustomers() {
  return prisma.customer.findMany();
}

export async function getProducts() {
  return prisma.product.findMany();
}

export async function getFranchises() {
  return prisma.franchise.findMany();
}

export async function getOrders() {
  return prisma.order.findMany({
    //include: { customer: true, franchise: true, items: true },
    include: { customer: true, franchise: true },
  });
}
