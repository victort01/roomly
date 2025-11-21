import { Router } from "express";
import {
  createQuarto,
  getAllQuartos,
  getById,
  updateQuarto,
  deleteQuarto,
} from "../controllers/quartoController";
import { validateBody, validateParams } from "../middlewares/validation";
import {
  createQuartoSchema,
  updateQuartoSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Quarto
 *   description: Gerenciamento de Quartos
 */

/**
 * @swagger
 * /quartos:
 *   post:
 *     summary: Cria um novo quarto
 *     tags: [Quarto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Quarto'
 *     responses:
 *       201:
 *         description: Quarto criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/quartos", validateBody(createQuartoSchema), createQuarto);

/**
 * @swagger
 * /quartos:
 *   get:
 *     summary: Retorna todos os quartos
 *     tags: [Quarto]
 *     responses:
 *       200:
 *         description: Lista de quartos
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/quartos", getAllQuartos);

/**
 * @swagger
 * /quartos/{id}:
 *   get:
 *     summary: Retorna um quarto pelo ID
 *     tags: [Quarto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Quarto encontrado
 *       404:
 *         description: Quarto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/quartos/:id", validateParams(idParamSchema), getById);

/**
 * @swagger
 * /quartos/{id}:
 *   put:
 *     summary: Atualiza um quarto
 *     tags: [Quarto]
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
 *             $ref: '#/components/schemas/Quarto'
 *     responses:
 *       200:
 *         description: Quarto atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Quarto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  "/quartos/:id",
  validateParams(idParamSchema),
  validateBody(updateQuartoSchema),
  updateQuarto
);

/**
 * @swagger
 * /quartos/{id}:
 *   delete:
 *     summary: Deleta um quarto
 *     tags: [Quarto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Quarto deletado com sucesso
 *       404:
 *         description: Quarto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/quartos/:id", validateParams(idParamSchema), deleteQuarto);

export default router;
