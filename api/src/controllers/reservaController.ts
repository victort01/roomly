import { Request, Response } from "express";
import * as reservaService from "../services/reservaService";

export const createReserva = async (req: Request, res: Response) => {
  try {
    const reserva = await reservaService.create(req.body);
    return res.status(201).json(reserva);
  } catch (error: any) {
    return res.status(400).json({ message: error.message });
  }
};

export const getAllReservas = async (req: Request, res: Response) => {
  try {
    const consultas = await reservaService.getAll();
    return res.json(consultas);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const getReservaById = async (req: Request, res: Response) => {
  try {
    const reserva = await reservaService.getById(Number(req.params.id));
    if (!reserva)
      return res.status(404).json({ message: "Reserva não encontrada" });
    return res.status(200).json(reserva);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateReserva = async (req: Request, res: Response) => {
  try {
    const reserva = await reservaService.update(
      Number(req.params.id),
      req.body
    );
    return res.json(reserva);
  } catch (error: any) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteReserva = async (req: Request, res: Response) => {
  try {
    await reservaService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({ message: "Reserva não encontrada" });
    return res.status(500).json({ message: error.message });
  }
};
