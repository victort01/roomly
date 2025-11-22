import { Role } from "./enums";
import type { Reserva } from "../types/reserva";

export interface Funcionario {
    id: number;
    nome: string;
    email: string;
    senha: string;
    telefone?: string | null;
    role: Role;
    createdAt: string;
    updatedAt: string;

    reservas?: Reserva[];
}