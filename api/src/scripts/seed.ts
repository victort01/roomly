import { prisma } from "../database/prisma";

import { 
  Role, 
  StatusQuarto, 
  StatusReserva
} from "../generated/prisma";

async function seed() {
  console.log("🌱 Iniciando seed do banco...\n");

  try {
    // ======================================================
    // FUNCIONÁRIOS
    // ======================================================
    console.log("👨‍💼 Criando funcionários...");

    const funcionariosData = [
      { nome: "Mariana Alves", email: "mariana@hotel.com", senha: "senha123", role: Role.ADMIN },
      { nome: "Fernando Gomes", email: "fernando@hotel.com", senha: "senha123", role: Role.GERENTE },
      { nome: "Ricardo Mendes", email: "ricardo@hotel.com", senha: "senha123", role: Role.RECEPCIONISTA },
      { nome: "Priscila Tavares", email: "priscila@hotel.com", senha: "senha123", role: Role.RECEPCIONISTA },
      { nome: "João Victor", email: "joaov@hotel.com", senha: "senha123", role: Role.RECEPCIONISTA },
    ];

    let funcionariosCount = 0;
    for (const f of funcionariosData) {
      try {
        await prisma.funcionario.create({ data: f });
        funcionariosCount++;
        console.log(`  ✅ ${f.nome} (${f.role})`);
      } catch (error: any) {
        if (error.code === "P2002") console.log(`  ⚠️  Funcionário já existe: ${f.nome}`);
        else console.error(`  ❌ Erro ao criar ${f.nome}: ${error.message}`);
      }
    }

    console.log(`📊 Total de funcionários criados: ${funcionariosCount}\n`);


    // ======================================================
    // HÓSPEDES
    // ======================================================
    console.log("👥 Criando hóspedes...");

    const hospedesData = [
      { nome: "Lucas Ferreira", email: "lucasf@gmail.com", telefone: "11984563210", documento: "345.123.678-90" },
      { nome: "Ana Júlia Martins", email: "anajmartins@gmail.com", telefone: "11988776655", documento: "123.456.789-00" },
      { nome: "Bruno Andrade", email: "bruno.andrade@hotmail.com", telefone: "11977889944", documento: "987.654.321-11" },
      { nome: "Beatriz Gomes", email: "bia.gomes22@gmail.com", telefone: "11999887766", documento: "456.789.123-55" },
      { nome: "Eduardo Silva", email: "edu_silva@gmail.com", telefone: "11993124567", documento: "321.654.987-77" },
      { nome: "Camila Oliveira", email: "camila.oli@gmail.com", telefone: "11976543210", documento: "741.852.963-00" },
    ];

    let hospedesCount = 0;
    for (const h of hospedesData) {
      try {
        await prisma.hospede.create({ data: h });
        hospedesCount++;
        console.log(`  ✅ ${h.nome}`);
      } catch (error: any) {
        if (error.code === "P2002") console.log(`  ⚠️  Hóspede já existe: ${h.nome}`);
        else console.error(`  ❌ Erro ao criar ${h.nome}: ${error.message}`);
      }
    }

    console.log(`📊 Total de hóspedes criados: ${hospedesCount}\n`);


    // ======================================================
    // TIPOS DE QUARTO
    // ======================================================
    console.log("🏨 Criando tipos de quarto...");

    const tiposData = [
      { nome: "Econômico", descricao: "Quarto compacto e funcional", capacidade: 1, precoBase: 120 },
      { nome: "Luxo", descricao: "Quarto espaçoso com varanda e vista lateral", capacidade: 3, precoBase: 350 },
      { nome: "Premium", descricao: "Andar alto, cama king e varanda", capacidade: 3, precoBase: 480 },
      { nome: "Família", descricao: "Ideal para grupos e famílias", capacidade: 5, precoBase: 600 },
      { nome: "Suíte Executiva", descricao: "Quarto para negócios com mesa de trabalho e conforto extra", capacidade: 2, precoBase: 700 },
      { nome: "Suíte Presidencial", descricao: "Suíte completa com sala, jacuzzi e vista panorâmica", capacidade: 4, precoBase: 1200 },
    ];

    let tiposCount = 0;
    for (const t of tiposData) {
      try {
        await prisma.tipoQuarto.create({ data: t });
        tiposCount++;
        console.log(`  ✅ ${t.nome}`);
      } catch (error: any) {
        if (error.code === "P2002") console.log(`  ⚠️  Tipo já existe: ${t.nome}`);
        else console.error(`  ❌ Erro ao criar ${t.nome}: ${error.message}`);
      }
    }

    console.log(`📊 Total de tipos de quarto criados: ${tiposCount}\n`);

    const tiposCriados = await prisma.tipoQuarto.findMany();


    // ======================================================
    // QUARTOS
    // ======================================================
    console.log("🛏️  Criando quartos...");

    const quartosData: any[] = [];
    let roomNumber = 101;

    for (const tipo of tiposCriados) {
      for (let i = 0; i < 5; i++) {
        quartosData.push({
          numero: `${roomNumber}`,
          tipoId: tipo.id,
          status: StatusQuarto.DISPONIVEL
        });
        roomNumber++;
      }
    }

    let quartosCount = 0;
    for (const q of quartosData) {
      try {
        await prisma.quarto.create({ data: q });
        quartosCount++;
      } catch (error: any) {
        if (error.code === "P2002") console.log(`  ⚠️  Quarto já existe: ${q.numero}`);
        else console.error(`  ❌ Erro ao criar quarto ${q.numero}: ${error.message}`);
      }
    }

    console.log(`📊 Total de quartos criados: ${quartosCount}\n`);


    // ======================================================
    // RESERVAS (sem pagamento)
    // ======================================================
    console.log("📅 Criando reservas...");

    const funcionariosList = await prisma.funcionario.findMany();
    const hospedesList = await prisma.hospede.findMany();
    const quartosList = await prisma.quarto.findMany({ include: { tipo: true } });

    const reservasData: any[] = [];

    for (let i = 0; i < hospedesList.length; i++) {
      const hospede = hospedesList[i];
      const quarto = quartosList[i];
      const funcionario = funcionariosList[i % funcionariosList.length];

      reservasData.push({
        hospedeId: hospede.id,
        quartoId: quarto.id,
        funcionarioId: funcionario.id,
        checkIn: new Date(2025, 0, 5 + i),
        checkOut: new Date(2025, 0, 6 + i),
        total: quarto.tipo.precoBase,
        status: StatusReserva.CONFIRMADA
      });
    }

    let reservasCount = 0;
    for (const reserva of reservasData) {
      try {
        await prisma.reserva.create({ data: reserva });
        reservasCount++;
      } catch (error: any) {
        if (error.code === "P2002") console.log(`  ⚠️  Reserva duplicada`);
        else console.error(`  ❌ Erro ao criar reserva: ${error.message}`);
      }
    }

    console.log(`📊 Total de reservas criadas: ${reservasCount}\n`);


    // ======================================================
    // RESUMO FINAL
    // ======================================================
    console.log("================================");
    console.log("📊 RESUMO FINAL DO BANCO DE DADOS");
    console.log("================================");
    console.log(`👨‍💼 Funcionários: ${funcionariosCount}`);
    console.log(`👥 Hóspedes: ${hospedesCount}`);
    console.log(`🏨 Tipos de quarto: ${tiposCount}`);
    console.log(`🛏️  Quartos: ${quartosCount}`);
    console.log(`📅 Reservas: ${reservasCount}`);
    console.log("================================\n");

    console.log("🎉 Seed concluído com sucesso!");
  } catch (error) {
    console.error("❌ Erro no seed:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

seed().catch((e) => {
  console.error("❌ Falha no seed:", e);
  process.exit(1);
});
