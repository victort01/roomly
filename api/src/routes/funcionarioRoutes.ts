import { Router } from "express";
import {
  createFuncionario,
  getAllFuncionarios,
  getFuncionarioById,
  updateFuncionario,
  deleteFuncionario,
} from "../controllers/funcionarioController";
import { validateBody, validateParams } from "../middlewares/validation";
import {
  createFuncionarioSchema,
  updateFuncionarioSchema,
  idParamSchema,
} from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Funcionarios
 *   description: Gerenciamento de Funcionários
 */

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cria um novo funcionário
 *     tags: [Funcionarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 *       400:
 *         description: Erro na requisição
 *       500:
 *         description: Erro interno do servidor
 */
router.post(
  "/funcionarios",
  validateBody(createFuncionarioSchema),
  createFuncionario
);

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Retorna todos os funcionários
 *     tags: [Funcionarios]
 *     responses:
 *       200:
 *         description: Lista de funcionários
 *       500:
 *         description: Erro interno do servidor
 */
router.get("/funcionarios", getAllFuncionarios);

/**
 * @swagger
 * /funcionarios/{id}:
 *   get:
 *     summary: Retorna um funcionário pelo ID
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.get(
  "/funcionarios/:id",
  validateParams(idParamSchema),
  getFuncionarioById
);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualiza um funcionário
 *     tags: [Funcionarios]
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
 *             $ref: '#/components/schemas/Funcionario'
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 *       400:
 *         description: Erro na requisição
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.put(
  "/funcionarios/:id",
  validateParams(idParamSchema),
  validateBody(updateFuncionarioSchema),
  updateFuncionario
);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Deleta um funcionário
 *     tags: [Funcionarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Funcionário deletado com sucesso
 *       404:
 *         description: Funcionário não encontrado
 *       500:
 *         description: Erro interno do servidor
 */
router.delete(
  "/funcionarios/:id",
  validateParams(idParamSchema),
  deleteFuncionario
);

export default router;
