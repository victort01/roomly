import { StatusQuarto } from "./enums";
import type { TipoQuarto } from "./tipoQuarto";
import type { Reserva } from "../types/reserva";

export interface Quarto {
    id: number;
    numero: string;
    tipoId: number;
    status: StatusQuarto;

    tipo?: TipoQuarto;
    reservas?: Reserva[];
}