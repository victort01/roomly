import { Request, Response } from "express";
import * as quartoService from "../services/quartoService";

export const createQuarto = async (req: Request, res: Response) => {
  try {
    const quarto = await quartoService.create(req.body);
    return res.status(201).json(quarto);
  } catch (error: any) {
    if (error.code === "P2002")
      return res
        .status(409)
        .json({ message: `Campo unico ja existe: ${error.meta.target}` });
    return res.status(500).json({ message: error.message });
  }
};

export const getAllQuartos = async (req: Request, res: Response) => {
  try {
    const quartos = await quartoService.getAll();
    return res.json(quartos);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const quarto = await quartoService.getById(Number(req.params.id));
    if (!quarto)
      return res.status(404).json({ message: "Quarto nao encontrado" });
    return res.json(quarto);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateQuarto = async (req: Request, res: Response) => {
  try {
    const quarto = await quartoService.update(Number(req.params.id), req.body);
    return res.json(quarto);
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(409).json({ message: "Quarto nao encontrado" });
    if (error.code === "P2002")
      return res
        .status(409)
        .json({ message: `Campo unico ja existe: ${error.meta.target}` });
    return res.status(500).json({ messagE: error.message });
  }
};

export const deleteQuarto = async (req: Request, res: Response) => {
  try {
    await quartoService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({ message: "Quarto nao encontrado." });
    return res.status(500).json({ message: error });
  }
};
