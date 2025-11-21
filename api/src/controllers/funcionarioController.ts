import { Request, Response } from "express";
import * as funcionarioService from "../services/funcionarioService";

export const createFuncionario = async (req: Request, res: Response) => {
  try {
    const funcionario = await funcionarioService.create(req.body);
    return res.status(201).json(funcionario);
  } catch (error: any) {
    if (error.code === "P2002") {
      return res.status(409).json({ message: "Email ja esta em uso" });
    }
    return res.status(500).json({ message: error.message });
  }
};

export const getAllFuncionarios = async (req: Request, res: Response) => {
  try {
    const funcionario = await funcionarioService.getAll();
    return res.json(funcionario);
  } catch (error: any) {
    return res.status(500).json({ message: error.mensage });
  }
};

export const getFuncionarioById = async (req: Request, res: Response) => {
  try {
    const funcionario = await funcionarioService.getById(Number(req.params.id));
    if (!funcionario) {
      return res.status(404).json({ message: "Funcionario nao encontrado" });
    }
    return res.json(funcionario);
  } catch (error: any) {
    return res.status(500).json({ message: error.mensage });
  }
};

export const updateFuncionario = async (req: Request, res: Response) => {
  try {
    const funcionario = await funcionarioService.update(
      Number(req.params.id),
      req.body
    );
    return res.json(funcionario);
  } catch (error: any) {
    if (error.code === "P2025")
      return res.status(404).json({ message: "Funcionario nao encontrado" });
    if (error.code === "P2002")
      return res.status(409).json({ message: "Email ja esta em uso" });
    return res.status(500).json({ message: error.mensage });
  }
};

export const deleteFuncionario = async (req: Request, res: Response) => {
  try {
    await funcionarioService.remove(Number(req.params.id));
    return res.status(204).send();
  } catch (error: any) {
    if (error?.code === "P2025") {
      return res.status(404).json({ message: "Funcionario nao encontrado" });
    }
    if (error?.code === "HAS_RELATED") {
      return res.status(409).json({ message: error.message });
    }
    console.error(error);
    return res.status(500).json({ message: error?.message || "Erro interno" });
  }
};

export const getByLogin = async (req: Request, res: Response) => {
  try {
    const { email, senha } = req.body;
    const funcionario = await funcionarioService.getByLogin(email, senha);
    if (!funcionario)
      return res.status(401).json({ message: "Credenciais inválidas" });    
      const { senha: _, ...safeData } = funcionario;
      return res.json(safeData);

  } catch (error: any) {
    return res.status(500).json({ message: error.mensage });
  }
};
