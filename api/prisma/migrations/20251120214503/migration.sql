/*
  Warnings:

  - Made the column `documento` on table `hospedes` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "hospedes" ALTER COLUMN "documento" SET NOT NULL;
