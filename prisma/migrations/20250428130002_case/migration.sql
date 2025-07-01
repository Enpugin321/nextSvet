/*
  Warnings:

  - You are about to drop the `Slide` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Slide";

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);
