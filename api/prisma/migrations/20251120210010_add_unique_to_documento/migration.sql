/*
  Warnings:

  - A unique constraint covering the columns `[documento]` on the table `hospedes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "funcionarios" ALTER COLUMN "role" DROP DEFAULT;

-- AlterTable
ALTER TABLE "hospedes" ALTER COLUMN "documento" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "hospedes_documento_key" ON "hospedes"("documento");
