import { Router } from "express";
import * as dashboardController from "../controllers/dashboardController";

const router = Router();

/**
 * @swagger
 * /api/dashboard/stats:
 *   get:
 *     summary: Obtém estatísticas do dashboard
 *     tags: [Dashboard]
 *     parameters:
 *       - in: query
 *         name: dataInicio
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Data de início para filtrar estatísticas
 *       - in: query
 *         name: dataFim
 *         schema:
 *           type: string
 *           format: date-time
 *         description: Data de fim para filtrar estatísticas
 *     responses:
 *       200:
 *         description: Estatísticas obtidas com sucesso
 *       500:
 *         description: Erro ao buscar estatísticas
 */
router.get("/api/dashboard/stats", dashboardController.getStats);

/**
 * @swagger
 * /api/dashboard/room-occupation:
 *   get:
 *     summary: Obtém informações de ocupação dos quartos
 *     tags: [Dashboard]
 *     responses:
 *       200:
 *         description: Informações de ocupação obtidas com sucesso
 *       500:
 *         description: Erro ao buscar informações de ocupação
 */
router.get("/api/dashboard/room-occupation", dashboardController.getRoomOccupation);

export default router;
