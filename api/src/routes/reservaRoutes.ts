import { Router } from "express";
import {
  createReserva,
  getAllReservas,
  getReservaById,
  updateReserva,
  deleteReserva,
} from "../controllers/reservaController";
import { validateBody, validateParams } from "../middlewares/validation";
import {
  createReservaSchema,
  updateReservaSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Reserva
 *   description: Gerenciamento de Reservas
 */

/**
 * @swagger
 * /reservas:
 *   post:
 *     summary: Cria uma nova reserva
 *     tags: [Reserva]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       201:
 *         description: Reserva criada com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/reservas", validateBody(createReservaSchema), createReserva);

/**
 * @swagger
 * /reservas:
 *   get:
 *     summary: Retorna todas as reservas
 *     tags: [Reserva]
 *     responses:
 *       200:
 *         description: Lista de reservas
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/reservas", getAllReservas);

/**
 * @swagger
 * /reservas/{id}:
 *   get:
 *     summary: Retorna uma reserva pelo ID
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Reserva encontrada
 *       404:
 *         description: Reserva não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/reservas/:id", validateParams(idParamSchema), getReservaById);

/**
 * @swagger
 * /reservas/{id}:
 *   put:
 *     summary: Atualiza uma reserva
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Reserva'
 *     responses:
 *       200:
 *         description: Reserva atualizada com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Reserva não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  "/reservas/:id",
  validateParams(idParamSchema),
  validateBody(updateReservaSchema),
  updateReserva
);

/**
 * @swagger
 * /reservas/{id}:
 *   delete:
 *     summary: Deleta uma reserva
 *     tags: [Reserva]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Reserva deletada com sucesso
 *       404:
 *         description: Reserva não encontrada
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/reservas/:id", validateParams(idParamSchema), deleteReserva);

export default router;
