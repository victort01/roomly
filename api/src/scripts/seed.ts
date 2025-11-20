import {
  PrismaClient,
  Role,
  StatusQuarto,
  StatusReserva,
  MetodoPagamento,
  StatusPagamento,
} from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco...");

  // =====================================================
  // FUNCIONÁRIOS
  // =====================================================
  await prisma.funcionario.createMany({
    data: [
      { nome: "Marina Carvalho", email: "marina@hotel.com", senha: "123456", role: Role.ADMIN },
      { nome: "Renato Silva", email: "renato@hotel.com", senha: "123456", role: Role.GERENTE },
      { nome: "Isabela Rocha", email: "isabela@hotel.com", senha: "123456", role: Role.RECEPCIONISTA },
      { nome: "Roberto Mendes", email: "roberto@hotel.com", senha: "123456", role: Role.RECEPCIONISTA },
      { nome: "Camila Duarte", email: "camila@hotel.com", senha: "123456", role: Role.RECEPCIONISTA },
    ],
    skipDuplicates: true,
  });

  console.log("Funcionários criados.");

  // =====================================================
  // HÓSPEDES
  // =====================================================
  const hospedesData = [
    { nome: "Lucas Ferreira", email: "lucasf@gmail.com", telefone: "11984563210", documento: "345.123.678-90" },
    { nome: "Ana Júlia Martins", email: "ana.martins@gmail.com", telefone: "11988776655", documento: "123.456.789-00" },
    { nome: "Bruno Andrade", email: "bruno.andrade@hotmail.com", telefone: "11977889944", documento: "987.654.321-11" },
    { nome: "Beatriz Gomes", email: "bia.gomes22@gmail.com", telefone: "11999887766", documento: "456.789.123-55" },
    { nome: "Eduardo Silva", email: "edu.silva@gmail.com", telefone: "11993124567", documento: "321.654.987-77" },
    { nome: "Camila Oliveira", email: "camila.oli@gmail.com", telefone: "11976543210", documento: "741.852.963-00" },
    { nome: "Gustavo Rocha", email: "gustavo.rocha@gmail.com", telefone: "11985236974", documento: "357.951.753-12" },
    { nome: "Vitinho", email: "vitinho@gmail.com", telefone: "11999999999", documento: "123.789.456-99" },
  ];

  await prisma.hospede.createMany({
    data: hospedesData,
    skipDuplicates: true,
  });

  console.log("Hóspedes criados.");


  // =====================================================
  // TIPOS DE QUARTO REALISTAS
  // =====================================================
  const tipos = await prisma.tipoQuarto.createMany({
    data: [
      {
        nome: "Econômico",
        descricao: "Quarto compacto, ideal para estadias rápidas.",
        capacidade: 1,
        precoBase: 150,
      },
      {
        nome: "Standard",
        descricao: "Quarto confortável com cama de casal.",
        capacidade: 2,
        precoBase: 220,
      },
      {
        nome: "Luxo",
        descricao: "Amplo, vista para a cidade, cama queen.",
        capacidade: 3,
        precoBase: 380,
      },
      {
        nome: "Família",
        descricao: "Espaçoso, ideal para famílias com crianças.",
        capacidade: 5,
        precoBase: 520,
      },
      {
        nome: "Suíte Master",
        descricao: "Suíte premium com hidromassagem e vista panorâmica.",
        capacidade: 4,
        precoBase: 900,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Tipos de quarto criados.");

  const tiposCriados = await prisma.tipoQuarto.findMany();


  // =====================================================
  // QUARTOS — 25 QUARTOS (5 por tipo)
  // =====================================================
  const quartosData: any[] = [];
  let numero = 101;

  for (const tipo of tiposCriados) {
    for (let i = 0; i < 5; i++) {
      quartosData.push({
        numero: `${numero++}`,
        tipoId: tipo.id,
        status: StatusQuarto.DISPONIVEL,
      });
    }
  }

  await prisma.quarto.createMany({
    data: quartosData,
    skipDuplicates: true,
  });

  console.log("Quartos criados:", quartosData.length);


  // =====================================================
  // RESERVAS REALISTAS
  // =====================================================
  const hospedes = await prisma.hospede.findMany();
  const funcionarios = await prisma.funcionario.findMany();
  const quartos = await prisma.quarto.findMany();

  const reservasGeradas: any[] = [];

  for (let i = 0; i < 8; i++) {
    const hospede = hospedes[i];
    const quarto = quartos[i + 2];
    const funcionario = funcionarios[i % funcionarios.length];

    const checkIn = new Date(2025, 1, 5 + i);
    const checkOut = new Date(2025, 1, 7 + i);

    reservasGeradas.push({
      hospedeId: hospede.id,
      quartoId: quarto.id,
      funcionarioId: funcionario.id,
      checkIn,
      checkOut,
      total: quarto.id * 10 + 200,
      status: StatusReserva.CONFIRMADA,
    });
  }

  for (const reserva of reservasGeradas) {
    await prisma.reserva.create({
      data: {
        ...reserva,
        pagamento: {
          create: {
            valor: reserva.total,
            metodo: MetodoPagamento.CARTAO,
            status: StatusPagamento.PAGO,
            data: new Date(),
          },
        },
      },
    });
  }

  console.log("Reservas e pagamentos gerados.");

  console.log("🌱 Seed finalizado com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro no seed:", e);
    process.exit(1);
  })
  .finally(async () => prisma.$disconnect());