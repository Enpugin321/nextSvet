/*
  Warnings:

  - You are about to drop the column `description` on the `Case` table. All the data in the column will be lost.
  - Added the required column `category` to the `Case` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `Case` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `Case` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('APARTMENT', 'HOUSE', 'COMERCIAL');

-- AlterTable
ALTER TABLE "Case" DROP COLUMN "description",
ADD COLUMN     "category" "Category" NOT NULL,
ADD COLUMN     "date" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL;
