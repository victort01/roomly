import { Router } from "express";
import {
  createHospede,
  getAllHospedes,
  getHospedeByDocumento,
  updateHospede,
  deleteHospede,
} from "../controllers/hospedeController";
import { validateBody, validateParams } from "../middlewares/validation";
import {
  createHospedeSchema,
  updateHospedeSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Hospedes
 *   description: Gerenciamento de Hóspedes
 */

/**
 * @swagger
 * /hospedes:
 *   post:
 *     summary: Cria um novo hóspede
 *     tags: [Hospedes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hospede'
 *     responses:
 *       201:
 *         description: Hóspede criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post("/hospedes", validateBody(createHospedeSchema), createHospede);

/**
 * @swagger
 * /hospedes:
 *   get:
 *     summary: Retorna todos os hóspedes
 *     tags: [Hospedes]
 *     responses:
 *       200:
 *         description: Lista de hóspedes
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/hospedes", getAllHospedes);

/**
 * @swagger
 * /hospedes/documento/{documento}:
 *   get:
 *     summary: Retorna um hóspede pelo documento
 *     tags: [Hospedes]
 *     parameters:
 *       - in: path
 *         name: documento
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Hóspede encontrado
 *       404:
 *         description: Hóspede não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/hospedes/documento/:documento", getHospedeByDocumento);

/**
 * @swagger
 * /hospedes/{id}:
 *   put:
 *     summary: Atualiza um hóspede
 *     tags: [Hospedes]
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
 *             $ref: '#/components/schemas/Hospede'
 *     responses:
 *       200:
 *         description: Hóspede atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Hóspede não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  "/hospedes/:id",
  validateParams(idParamSchema),
  validateBody(updateHospedeSchema),
  updateHospede
);

/**
 * @swagger
 * /hospedes/{id}:
 *   delete:
 *     summary: Deleta um hóspede
 *     tags: [Hospedes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Hóspede deletado com sucesso
 *       404:
 *         description: Hóspede não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete("/hospedes/:id", validateParams(idParamSchema), deleteHospede);

export default router;
