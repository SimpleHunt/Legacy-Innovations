-- CreateEnum
CREATE TYPE "ClimateList" AS ENUM ('Cool', 'Warm', 'Both');

-- CreateTable
CREATE TABLE "ProductTable" (
    "id" SERIAL NOT NULL,
    "productName" TEXT NOT NULL,
    "productDes" TEXT NOT NULL,
    "productType" TEXT NOT NULL,
    "productSize" TEXT NOT NULL,
    "climate" "ClimateList" NOT NULL,
    "tareena" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProductTable_pkey" PRIMARY KEY ("id")
);
