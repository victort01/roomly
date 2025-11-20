/*
  Warnings:

  - Made the column `funcionarioId` on table `reservas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "reservas" DROP CONSTRAINT "reservas_funcionarioId_fkey";

-- AlterTable
ALTER TABLE "reservas" ALTER COLUMN "funcionarioId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
