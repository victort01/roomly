import type { Quarto } from "../types/quarto";

export interface TipoQuarto {
  id: number;
  nome: string;
  descricao?: string | null;
  capacidade: number;
  precoBase: number;

  quartos?: Quarto[];
}
