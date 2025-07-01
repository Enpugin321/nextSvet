/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "ProductTag" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "ProductTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ControlTag" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "ControlTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WorkTypeTag" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "WorkTypeTag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "subTitle" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "images" TEXT[],
    "caseId" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CaseToProductTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CaseToProductTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CaseToControlTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CaseToControlTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateTable
CREATE TABLE "_CaseToWorkTypeTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CaseToWorkTypeTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "ProductTag_label_key" ON "ProductTag"("label");

-- CreateIndex
CREATE UNIQUE INDEX "ControlTag_label_key" ON "ControlTag"("label");

-- CreateIndex
CREATE UNIQUE INDEX "WorkTypeTag_label_key" ON "WorkTypeTag"("label");

-- CreateIndex
CREATE UNIQUE INDEX "Room_caseId_key" ON "Room"("caseId");

-- CreateIndex
CREATE INDEX "_CaseToProductTag_B_index" ON "_CaseToProductTag"("B");

-- CreateIndex
CREATE INDEX "_CaseToControlTag_B_index" ON "_CaseToControlTag"("B");

-- CreateIndex
CREATE INDEX "_CaseToWorkTypeTag_B_index" ON "_CaseToWorkTypeTag"("B");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_caseId_fkey" FOREIGN KEY ("caseId") REFERENCES "Case"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CaseToProductTag" ADD CONSTRAINT "_CaseToProductTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Case"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CaseToProductTag" ADD CONSTRAINT "_CaseToProductTag_B_fkey" FOREIGN KEY ("B") REFERENCES "ProductTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CaseToControlTag" ADD CONSTRAINT "_CaseToControlTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Case"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CaseToControlTag" ADD CONSTRAINT "_CaseToControlTag_B_fkey" FOREIGN KEY ("B") REFERENCES "ControlTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CaseToWorkTypeTag" ADD CONSTRAINT "_CaseToWorkTypeTag_A_fkey" FOREIGN KEY ("A") REFERENCES "Case"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CaseToWorkTypeTag" ADD CONSTRAINT "_CaseToWorkTypeTag_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkTypeTag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
