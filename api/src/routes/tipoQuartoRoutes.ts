import { Router } from "express";
import {
  createTipoQuarto,
  getAllTipoQuarto,
  getTipoQuartoById,
  updateTipoQuarto,
  deleteTipoQuarto,
} from "../controllers/tipoQuartoController";
import { validateBody, validateParams } from "../middlewares/validation";
import {
  createTipoQuartoSchema,
  updateTipoQuartoSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: TipoQuarto
 *   description: Gerenciamento de Tipos de Quarto
 */

/**
 * @swagger
 * /tipoquarto:
 *   post:
 *     summary: Cria um novo tipo de quarto
 *     tags: [TipoQuarto]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/TipoQuarto'
 *     responses:
 *       201:
 *         description: Tipo de quarto criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post(
  "/tipoquarto",
  validateBody(createTipoQuartoSchema),
  createTipoQuarto
);

/**
 * @swagger
 * /tipoquarto:
 *   get:
 *     summary: Retorna todos os tipos de quarto
 *     tags: [TipoQuarto]
 *     responses:
 *       200:
 *         description: Lista de tipos de quarto
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/tipoquarto", getAllTipoQuarto);

/**
 * @swagger
 * /tipoquarto/{id}:
 *   get:
 *     summary: Retorna um tipo de quarto pelo ID
 *     tags: [TipoQuarto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Tipo de quarto encontrado
 *       404:
 *         description: Tipo de quarto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/tipoquarto/:id", validateParams(idParamSchema), getTipoQuartoById);

/**
 * @swagger
 * /tipoquarto/{id}:
 *   put:
 *     summary: Atualiza um tipo de quarto
 *     tags: [TipoQuarto]
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
 *             $ref: '#/components/schemas/TipoQuarto'
 *     responses:
 *       200:
 *         description: Tipo de quarto atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Tipo de quarto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  "/tipoquarto/:id",
  validateParams(idParamSchema),
  validateBody(updateTipoQuartoSchema),
  updateTipoQuarto
);

/**
 * @swagger
 * /tipoquarto/{id}:
 *   delete:
 *     summary: Deleta um tipo de quarto
 *     tags: [TipoQuarto]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Tipo de quarto deletado com sucesso
 *       404:
 *         description: Tipo de quarto não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete(
  "/tipoquarto/:id",
  validateParams(idParamSchema),
  deleteTipoQuarto
);

export default router;
