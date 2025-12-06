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

    CONSTRAINT "enquiry_pkey" PRIMARY KEY ("enquiryID")
);

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_ownerEmail_key" ON "enquiry"("ownerEmail");

-- CreateIndex
CREATE UNIQUE INDEX "enquiry_ownerPhone_key" ON "enquiry"("ownerPhone");
