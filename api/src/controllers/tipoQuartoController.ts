import { Request, Response } from "express";
import * as tipoQuartoService from "../services/tipoQuartoService";

export const createTipoQuarto = async (req: Request, res: Response) => {
  try {
    const novoTipoQuarto = await tipoQuartoService.create(req.body);
    return res.status(201).json(novoTipoQuarto);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({
        message: `Campo unico ja existe: ${error.meta.target}`,
      });
    }
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getAllTipoQuarto = async (req: Request, res: Response) => {
  try {
    const tipoQuarto = await tipoQuartoService.getAll();
    return res.json(tipoQuarto);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getTipoQuartoById = async (req: Request, res: Response) => {
  try {
    const tipoQuarto = await tipoQuartoService.getById(Number(req.params.id));
    if (!tipoQuarto)
      return res.status(404).json({
        message: "Tipo do quarto nao encontrado",
      });
    return res.status(200).json(tipoQuarto);
  } catch (error: any) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateTipoQuarto = async (req: Request, res: Response) => {
  try {
    const tipoQuarto = await tipoQuartoService.update(
      Number(req.params.id),
      req.body
    );
    return res.json(tipoQuarto);
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({
        message: "Tipo do quarto nao encontrado",
      });
    return res.status(500).json({
      message: error.mensage,
    });
  }
};

export const deleteTipoQuarto = async (req: Request, res: Response) => {
  try {
    await tipoQuartoService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({
        message: "Tipo do quarto nao encontrado",
      });
    return res.status(500).json({
      menssge: error.message,
    });
  }
};
