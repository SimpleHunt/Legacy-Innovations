-- CreateEnum
CREATE TYPE "Role" AS ENUM ('SUPER_ADMIN', 'ADMIN', 'FACTORY', 'EMPLOYEE', 'FRANCHISE', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "Climate" AS ENUM ('HUMID', 'COLD');

-- CreateEnum
CREATE TYPE "Terrain" AS ENUM ('FLAT', 'HILL_STATION');

-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'CARD', 'UPI', 'BANK_TRANSFER');

-- CreateTable
CREATE TABLE "User" (
    "email" TEXT,
    "password" TEXT,
    "fullName" TEXT,
    "phone" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "loginUserId" TEXT,
    "id" SERIAL NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enquiry" (
    "enquiryID" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ownerEmail" TEXT NOT NULL,
    "ownerName" TEXT,
    "ownerPhone" TEXT NOT NULL,
    "address" TEXT,
    "status" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "createdBy" INTEGER,

    CONSTRAINT "enquiry_pkey" PRIMARY KEY ("enquiryID")
);

-- CreateTable
CREATE TABLE "Franchise" (
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "ownerEmail" TEXT NOT NULL,
    "ownerName" TEXT,
    "ownerPhone" TEXT NOT NULL,
    "companyProfile" TEXT,
    "companyKyc" TEXT,
    "bankDetails" TEXT,
    "itrDocs" TEXT,
    "id" SERIAL NOT NULL,
    "createdBy" INTEGER,

    CONSTRAINT "Franchise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "customerType" TEXT,
    "id" SERIAL NOT NULL,
    "cusotmerCode" TEXT NOT NULL,
    "franchiseId" INTEGER,
    "createdBy" INTEGER,
    "employeeId" INTEGER,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "stock" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "size" TEXT NOT NULL,
    "id" SERIAL NOT NULL,
    "productCode" TEXT NOT NULL,
    "createdById" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Order" (
    "orderNumber" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "expectedDeliveryDate" TIMESTAMP(3),
    "defectedStatus" INTEGER NOT NULL,
    "defExpectedDate" TIMESTAMP(3),
    "unitPrice" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "unitPriceCost" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "discountDate" TIMESTAMP(3) NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "gstPercentage" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "gstAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "totalAmount" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "climate" "Climate" NOT NULL,
    "employeeId" INTEGER,
    "createdBy" INTEGER,
    "productId" INTEGER NOT NULL,
    "terrain" "Terrain" NOT NULL,
    "id" SERIAL NOT NULL,
    "franchiseId" INTEGER,
    "customerId" INTEGER,

    CONSTRAINT "Order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Factory" (
    "id" SERIAL NOT NULL,
    "orderId" INTEGER NOT NULL,
    "orderStatus" TEXT NOT NULL DEFAULT 'PROCESSING',
    "deliveryDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Factory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" SERIAL NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "orderId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "method" TEXT NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phone_key" ON "User"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "User_loginUserId_key" ON "User"("loginUserId");

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_ownerEmail_key" ON "enquiry"("ownerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_ownerPhone_key" ON "enquiry"("ownerPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Franchise_code_key" ON "Franchise"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Franchise_ownerEmail_key" ON "Franchise"("ownerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "Franchise_ownerPhone_key" ON "Franchise"("ownerPhone");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_cusotmerCode_key" ON "Customer"("cusotmerCode");

-- CreateIndex
CREATE UNIQUE INDEX "Product_productCode_key" ON "Product"("productCode");

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Factory_orderId_key" ON "Factory"("orderId");

-- AddForeignKey
ALTER TABLE "Franchise" ADD CONSTRAINT "Franchise_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_franchiseId_fkey" FOREIGN KEY ("franchiseId") REFERENCES "Franchise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_franchiseId_fkey" FOREIGN KEY ("franchiseId") REFERENCES "Franchise"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Factory" ADD CONSTRAINT "Factory_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
