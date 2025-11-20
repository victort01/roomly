/*
  Warnings:

  - A unique constraint covering the columns `[telefone]` on the table `hospedes` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "hospedes_telefone_key" ON "hospedes"("telefone");
