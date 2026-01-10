/*
  Warnings:

  - Added the required column `description` to the `Customer` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `enquiry` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Customer" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "enquiry" ADD COLUMN     "description" TEXT NOT NULL;
