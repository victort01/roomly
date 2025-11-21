"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_1 = require("../database/prisma");
var prisma_2 = require("../generated/prisma");
function seed() {
    return __awaiter(this, void 0, void 0, function () {
        var funcionariosData, funcionariosCount, _i, funcionariosData_1, f, error_1, hospedesData, hospedesCount, _a, hospedesData_1, h, error_2, tiposData, tiposCount, _b, tiposData_1, t, error_3, tiposCriados, quartosData, roomNumber, _c, tiposCriados_1, tipo, i, quartosCount, _d, quartosData_1, q, error_4, funcionariosList, hospedesList, quartosList, reservasData, i, hospede, quarto, funcionario, reservasCount, _e, reservasData_1, reserva, error_5, error_6;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    console.log("🌱 Iniciando seed do banco...\n");
                    _f.label = 1;
                case 1:
                    _f.trys.push([1, 36, 37, 39]);
                    // ======================================================
                    // FUNCIONÁRIOS
                    // ======================================================
                    console.log("👨‍💼 Criando funcionários...");
                    funcionariosData = [
                        { nome: "Mariana Alves", email: "mariana@hotel.com", senha: "senha123", role: prisma_2.Role.ADMIN },
                        { nome: "Fernando Gomes", email: "fernando@hotel.com", senha: "senha123", role: prisma_2.Role.GERENTE },
                        { nome: "Ricardo Mendes", email: "ricardo@hotel.com", senha: "senha123", role: prisma_2.Role.RECEPCIONISTA },
                        { nome: "Priscila Tavares", email: "priscila@hotel.com", senha: "senha123", role: prisma_2.Role.RECEPCIONISTA },
                        { nome: "João Victor", email: "joaov@hotel.com", senha: "senha123", role: prisma_2.Role.RECEPCIONISTA },
                    ];
                    funcionariosCount = 0;
                    _i = 0, funcionariosData_1 = funcionariosData;
                    _f.label = 2;
                case 2:
                    if (!(_i < funcionariosData_1.length)) return [3 /*break*/, 7];
                    f = funcionariosData_1[_i];
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, prisma_1.prisma.funcionario.create({ data: f })];
                case 4:
                    _f.sent();
                    funcionariosCount++;
                    console.log("  \u2705 ".concat(f.nome, " (").concat(f.role, ")"));
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _f.sent();
                    if (error_1.code === "P2002")
                        console.log("  \u26A0\uFE0F  Funcion\u00E1rio j\u00E1 existe: ".concat(f.nome));
                    else
                        console.error("  \u274C Erro ao criar ".concat(f.nome, ": ").concat(error_1.message));
                    return [3 /*break*/, 6];
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    console.log("\uD83D\uDCCA Total de funcion\u00E1rios criados: ".concat(funcionariosCount, "\n"));
                    // ======================================================
                    // HÓSPEDES
                    // ======================================================
                    console.log("👥 Criando hóspedes...");
                    hospedesData = [
                        { nome: "Lucas Ferreira", email: "lucasf@gmail.com", telefone: "11984563210", documento: "345.123.678-90" },
                        { nome: "Ana Júlia Martins", email: "anajmartins@gmail.com", telefone: "11988776655", documento: "123.456.789-00" },
                        { nome: "Bruno Andrade", email: "bruno.andrade@hotmail.com", telefone: "11977889944", documento: "987.654.321-11" },
                        { nome: "Beatriz Gomes", email: "bia.gomes22@gmail.com", telefone: "11999887766", documento: "456.789.123-55" },
                        { nome: "Eduardo Silva", email: "edu_silva@gmail.com", telefone: "11993124567", documento: "321.654.987-77" },
                        { nome: "Camila Oliveira", email: "camila.oli@gmail.com", telefone: "11976543210", documento: "741.852.963-00" },
                    ];
                    hospedesCount = 0;
                    _a = 0, hospedesData_1 = hospedesData;
                    _f.label = 8;
                case 8:
                    if (!(_a < hospedesData_1.length)) return [3 /*break*/, 13];
                    h = hospedesData_1[_a];
                    _f.label = 9;
                case 9:
                    _f.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, prisma_1.prisma.hospede.create({ data: h })];
                case 10:
                    _f.sent();
                    hospedesCount++;
                    console.log("  \u2705 ".concat(h.nome));
                    return [3 /*break*/, 12];
                case 11:
                    error_2 = _f.sent();
                    if (error_2.code === "P2002")
                        console.log("  \u26A0\uFE0F  H\u00F3spede j\u00E1 existe: ".concat(h.nome));
                    else
                        console.error("  \u274C Erro ao criar ".concat(h.nome, ": ").concat(error_2.message));
                    return [3 /*break*/, 12];
                case 12:
                    _a++;
                    return [3 /*break*/, 8];
                case 13:
                    console.log("\uD83D\uDCCA Total de h\u00F3spedes criados: ".concat(hospedesCount, "\n"));
                    // ======================================================
                    // TIPOS DE QUARTO
                    // ======================================================
                    console.log("🏨 Criando tipos de quarto...");
                    tiposData = [
                        { nome: "Econômico", descricao: "Quarto compacto e funcional", capacidade: 1, precoBase: 120 },
                        { nome: "Luxo", descricao: "Quarto espaçoso com varanda e vista lateral", capacidade: 3, precoBase: 350 },
                        { nome: "Premium", descricao: "Andar alto, cama king e varanda", capacidade: 3, precoBase: 480 },
                        { nome: "Família", descricao: "Ideal para grupos e famílias", capacidade: 5, precoBase: 600 },
                        { nome: "Suíte Executiva", descricao: "Quarto para negócios com mesa de trabalho e conforto extra", capacidade: 2, precoBase: 700 },
                        { nome: "Suíte Presidencial", descricao: "Suíte completa com sala, jacuzzi e vista panorâmica", capacidade: 4, precoBase: 1200 },
                    ];
                    tiposCount = 0;
                    _b = 0, tiposData_1 = tiposData;
                    _f.label = 14;
                case 14:
                    if (!(_b < tiposData_1.length)) return [3 /*break*/, 19];
                    t = tiposData_1[_b];
                    _f.label = 15;
                case 15:
                    _f.trys.push([15, 17, , 18]);
                    return [4 /*yield*/, prisma_1.prisma.tipoQuarto.create({ data: t })];
                case 16:
                    _f.sent();
                    tiposCount++;
                    console.log("  \u2705 ".concat(t.nome));
                    return [3 /*break*/, 18];
                case 17:
                    error_3 = _f.sent();
                    if (error_3.code === "P2002")
                        console.log("  \u26A0\uFE0F  Tipo j\u00E1 existe: ".concat(t.nome));
                    else
                        console.error("  \u274C Erro ao criar ".concat(t.nome, ": ").concat(error_3.message));
                    return [3 /*break*/, 18];
                case 18:
                    _b++;
                    return [3 /*break*/, 14];
                case 19:
                    console.log("\uD83D\uDCCA Total de tipos de quarto criados: ".concat(tiposCount, "\n"));
                    return [4 /*yield*/, prisma_1.prisma.tipoQuarto.findMany()];
                case 20:
                    tiposCriados = _f.sent();
                    // ======================================================
                    // QUARTOS
                    // ======================================================
                    console.log("🛏️  Criando quartos...");
                    quartosData = [];
                    roomNumber = 101;
                    for (_c = 0, tiposCriados_1 = tiposCriados; _c < tiposCriados_1.length; _c++) {
                        tipo = tiposCriados_1[_c];
                        for (i = 0; i < 5; i++) {
                            quartosData.push({
                                numero: "".concat(roomNumber),
                                tipoId: tipo.id,
                                status: prisma_2.StatusQuarto.DISPONIVEL
                            });
                            roomNumber++;
                        }
                    }
                    quartosCount = 0;
                    _d = 0, quartosData_1 = quartosData;
                    _f.label = 21;
                case 21:
                    if (!(_d < quartosData_1.length)) return [3 /*break*/, 26];
                    q = quartosData_1[_d];
                    _f.label = 22;
                case 22:
                    _f.trys.push([22, 24, , 25]);
                    return [4 /*yield*/, prisma_1.prisma.quarto.create({ data: q })];
                case 23:
                    _f.sent();
                    quartosCount++;
                    return [3 /*break*/, 25];
                case 24:
                    error_4 = _f.sent();
                    if (error_4.code === "P2002")
                        console.log("  \u26A0\uFE0F  Quarto j\u00E1 existe: ".concat(q.numero));
                    else
                        console.error("  \u274C Erro ao criar quarto ".concat(q.numero, ": ").concat(error_4.message));
                    return [3 /*break*/, 25];
                case 25:
                    _d++;
                    return [3 /*break*/, 21];
                case 26:
                    console.log("\uD83D\uDCCA Total de quartos criados: ".concat(quartosCount, "\n"));
                    // ======================================================
                    // RESERVAS (sem pagamento)
                    // ======================================================
                    console.log("📅 Criando reservas...");
                    return [4 /*yield*/, prisma_1.prisma.funcionario.findMany()];
                case 27:
                    funcionariosList = _f.sent();
                    return [4 /*yield*/, prisma_1.prisma.hospede.findMany()];
                case 28:
                    hospedesList = _f.sent();
                    return [4 /*yield*/, prisma_1.prisma.quarto.findMany({ include: { tipo: true } })];
                case 29:
                    quartosList = _f.sent();
                    reservasData = [];
                    for (i = 0; i < hospedesList.length; i++) {
                        hospede = hospedesList[i];
                        quarto = quartosList[i];
                        funcionario = funcionariosList[i % funcionariosList.length];
                        reservasData.push({
                            hospedeId: hospede.id,
                            quartoId: quarto.id,
                            funcionarioId: funcionario.id,
                            checkIn: new Date(2025, 0, 5 + i),
                            checkOut: new Date(2025, 0, 6 + i),
                            total: quarto.tipo.precoBase,
                            status: prisma_2.StatusReserva.CONFIRMADA
                        });
                    }
                    reservasCount = 0;
                    _e = 0, reservasData_1 = reservasData;
                    _f.label = 30;
                case 30:
                    if (!(_e < reservasData_1.length)) return [3 /*break*/, 35];
                    reserva = reservasData_1[_e];
                    _f.label = 31;
                case 31:
                    _f.trys.push([31, 33, , 34]);
                    return [4 /*yield*/, prisma_1.prisma.reserva.create({ data: reserva })];
                case 32:
                    _f.sent();
                    reservasCount++;
                    return [3 /*break*/, 34];
                case 33:
                    error_5 = _f.sent();
                    if (error_5.code === "P2002")
                        console.log("  \u26A0\uFE0F  Reserva duplicada");
                    else
                        console.error("  \u274C Erro ao criar reserva: ".concat(error_5.message));
                    return [3 /*break*/, 34];
                case 34:
                    _e++;
                    return [3 /*break*/, 30];
                case 35:
                    console.log("\uD83D\uDCCA Total de reservas criadas: ".concat(reservasCount, "\n"));
                    // ======================================================
                    // RESUMO FINAL
                    // ======================================================
                    console.log("================================");
                    console.log("📊 RESUMO FINAL DO BANCO DE DADOS");
                    console.log("================================");
                    console.log("\uD83D\uDC68\u200D\uD83D\uDCBC Funcion\u00E1rios: ".concat(funcionariosCount));
                    console.log("\uD83D\uDC65 H\u00F3spedes: ".concat(hospedesCount));
                    console.log("\uD83C\uDFE8 Tipos de quarto: ".concat(tiposCount));
                    console.log("\uD83D\uDECF\uFE0F  Quartos: ".concat(quartosCount));
                    console.log("\uD83D\uDCC5 Reservas: ".concat(reservasCount));
                    console.log("================================\n");
                    console.log("🎉 Seed concluído com sucesso!");
                    return [3 /*break*/, 39];
                case 36:
                    error_6 = _f.sent();
                    console.error("❌ Erro no seed:", error_6);
                    throw error_6;
                case 37: return [4 /*yield*/, prisma_1.prisma.$disconnect()];
                case 38:
                    _f.sent();
                    return [7 /*endfinally*/];
                case 39: return [2 /*return*/];
            }
        });
    });
}
seed().catch(function (e) {
    console.error("❌ Falha no seed:", e);
    process.exit(1);
});
