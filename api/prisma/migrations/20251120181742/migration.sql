/*
  Warnings:

  - You are about to drop the `pagamentos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "pagamentos" DROP CONSTRAINT "pagamentos_reservaId_fkey";

-- DropTable
DROP TABLE "pagamentos";

-- DropEnum
DROP TYPE "MetodoPagamento";

-- DropEnum
DROP TYPE "StatusPagamento";
