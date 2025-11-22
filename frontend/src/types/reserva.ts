import type { StatusReserva } from "./enums";
import type { Hospede } from "./hospede";
import type { Quarto } from "./quarto";
import type { Funcionario } from "./funcionario";

export interface Reserva {
    id: number;
    hospedeId: number;
    quartoId: number;
    funcionarioId: number;
    checkIn: string;
    checkOut: string;
    total?: number | null;
    status: StatusReserva;
    cretaedAt: string;
    updatedAt: string;

    hospede?: Hospede;
    quarto?: Quarto;
    funcionario?: Funcionario;
}