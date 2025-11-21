import { Router } from "express";
import { getByLogin } from "../controllers/funcionarioController";
import { validateBody } from "../middlewares/validation";
import { loginFuncionarioSchema } from "../schemas/validation";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Funcionarios
 *   description: Autenticação de Funcionários
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login de um funcionário
 *     tags: [Funcionarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Funcionário autenticado com sucesso
 *       400:
 *         description: Erro na requisição
 *       401:
 *          description: Credenciais inválidas
 *       500:
 *         description: Erro interno do servidor
 */

router.post("/login", validateBody(loginFuncionarioSchema), getByLogin);

export default router;
