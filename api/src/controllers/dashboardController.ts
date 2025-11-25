import { Request, Response } from "express";
import * as dashboardService from "../services/dashboardService";

export const getStats = async (req: Request, res: Response) => {
  try {
    const { dataInicio, dataFim } = req.query;

    const stats = await dashboardService.getDashboardStats(
      dataInicio as string | undefined,
      dataFim as string | undefined
    );

    return res.status(200).json(stats);
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    return res.status(500).json({ error: "Failed to fetch dashboard statistics" });
  }
};

export const getRoomOccupation = async (req: Request, res: Response) => {
  try {
    const { dataInicio, dataFim } = req.query;
    const rooms = await dashboardService.getRoomOccupation(
      dataInicio as string | undefined,
      dataFim as string | undefined
    );
    return res.status(200).json(rooms);
  } catch (error) {
    console.error("Error fetching room occupation:", error);
    return res.status(500).json({ error: "Failed to fetch room occupation" });
  }
};
