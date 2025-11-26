import { PrismaClient, Role, Climate, Terrain, PaymentMethod } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1️⃣ Create SUPER ADMIN
  const hashedPassword = await bcrypt.hash("password123", 10);

  const superAdmin = await prisma.user.create({
    data: {
      fullName: "Super Admin",
      email: "super@admin.com",
      loginUserId: "SUPER1",
      password: hashedPassword,
      phone: "9999999999",
      role: Role.SUPER_ADMIN,
    },
  });

  // 2️⃣ Franchise
  const franchise = await prisma.franchise.create({
    data: {
      name: "Main Branch",
      code: "F001",
      ownerName: "John Doe",
      ownerEmail: "owner@example.com",
      ownerPhone: "9876543210",
      address: "City Center",
      createdBy: superAdmin.id
    },
  });

  // 3️⃣ Product
  const product = await prisma.product.create({
    data: {
      name: "Legacy Brick",
      price: 250,
      size: "10 x 20",
      description: "Model Description",
      stock: 500,
      createdById: superAdmin.id
    },
  });

  // 4️⃣ Retail Customer
  const customer = await prisma.customer.create({
    data: {
      name: "Retail Customer",
      email: "retail@example.com",
      phone: "7007007000",
      customerType: "RETAIL",
      createdBy: superAdmin.id
    },
  });

  // 5️⃣ Order
  const order = await prisma.order.create({
    data: {
      orderNumber: "ORD001",
      productId: product.id,
      employeeId: superAdmin.id,
      customerId: customer.id,
      climate: Climate.NORMAL,
      terrain: Terrain.FLAT,
      totalAmount: 5000
    },
  });

  // 6️⃣ Payment
  await prisma.payment.create({
    data: {
      orderId: order.id,
      amount: order.totalAmount,
      method: PaymentMethod.CASH
    }
  });

  console.log("🌱 Seed completed successfully!");
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
