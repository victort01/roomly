import { Request, Response } from "express";
import * as hospedeService from "../services/hospedeService.js";

export const createHospede = async (req: Request, res: Response) => {
  try {
    const hospede = await hospedeService.create(req.body);
    return res.status(201).json(hospede);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res
        .status(409)
        .json({ message: `${error.meta.target} já cadastrado.` });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const getAllHospedes = async (req: Request, res: Response) => {
  try {
    const hospedes = await hospedeService.getAll();
    return res.status(200).json(hospedes);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getHospedeByDocumento = async (req: Request, res: Response) => {
  try {
    const hospede = await hospedeService.getByDocumento(req.params.documento);
    if (!hospede) {
      return res.status(404).json({ message: "Hospede nao encontrado" });
    }
    return res.status(200).json(hospede);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateHospede = async (req: Request, res: Response) => {
  try {
    const hospede = await hospedeService.update(
      Number(req.params.id),
      req.body
    );
    return res.json(hospede);
  } catch (error: any) {
    if (error.code === "P2025") {
      return res
        .status(404)
        .json({ message: `Hospede nao cadastrado: ${error.meta.target}` });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const deleteHospede = async (req: Request, res: Response) => {
  try {
    await hospedeService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Hospede nao encontrado" });
    }
    return res.status(500).json({ message: error.message });
  }
};
