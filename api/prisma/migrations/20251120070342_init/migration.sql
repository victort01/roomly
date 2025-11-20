-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'GERENTE', 'RECEPCIONISTA');

-- CreateEnum
CREATE TYPE "StatusQuarto" AS ENUM ('DISPONIVEL', 'OCUPADO', 'MANUTENCAO', 'LIMPEZA');

-- CreateEnum
CREATE TYPE "StatusReserva" AS ENUM ('PENDENTE', 'CONFIRMADA', 'CHECKED_IN', 'CHECKED_OUT', 'CANCELADA');

-- CreateEnum
CREATE TYPE "MetodoPagamento" AS ENUM ('CARTAO', 'PIX', 'DINHEIRO');

-- CreateEnum
CREATE TYPE "StatusPagamento" AS ENUM ('PENDENTE', 'PAGO', 'FALHOU');

-- CreateTable
CREATE TABLE "funcionarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT,
    "role" "Role" NOT NULL DEFAULT 'RECEPCIONISTA',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "funcionarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hospedes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT,
    "telefone" TEXT,
    "documento" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hospedes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_quarto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "capacidade" INTEGER NOT NULL,
    "precoBase" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "tipo_quarto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quartos" (
    "id" SERIAL NOT NULL,
    "numero" TEXT NOT NULL,
    "tipoId" INTEGER NOT NULL,
    "status" "StatusQuarto" NOT NULL DEFAULT 'DISPONIVEL',

    CONSTRAINT "quartos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservas" (
    "id" SERIAL NOT NULL,
    "hospedeId" INTEGER NOT NULL,
    "quartoId" INTEGER NOT NULL,
    "funcionarioId" INTEGER,
    "checkIn" TIMESTAMP(3) NOT NULL,
    "checkOut" TIMESTAMP(3) NOT NULL,
    "total" DOUBLE PRECISION,
    "status" "StatusReserva" NOT NULL DEFAULT 'PENDENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pagamentos" (
    "id" SERIAL NOT NULL,
    "reservaId" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "metodo" "MetodoPagamento" NOT NULL,
    "status" "StatusPagamento" NOT NULL DEFAULT 'PENDENTE',
    "data" TIMESTAMP(3),

    CONSTRAINT "pagamentos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "funcionarios_email_key" ON "funcionarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "hospedes_email_key" ON "hospedes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "quartos_numero_key" ON "quartos"("numero");

-- CreateIndex
CREATE UNIQUE INDEX "pagamentos_reservaId_key" ON "pagamentos"("reservaId");

-- AddForeignKey
ALTER TABLE "quartos" ADD CONSTRAINT "quartos_tipoId_fkey" FOREIGN KEY ("tipoId") REFERENCES "tipo_quarto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_hospedeId_fkey" FOREIGN KEY ("hospedeId") REFERENCES "hospedes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_quartoId_fkey" FOREIGN KEY ("quartoId") REFERENCES "quartos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reservas" ADD CONSTRAINT "reservas_funcionarioId_fkey" FOREIGN KEY ("funcionarioId") REFERENCES "funcionarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pagamentos" ADD CONSTRAINT "pagamentos_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "reservas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
