import { Request, Response } from "express";
import * as hospedeService from "../services/hospedeService.js";

export const createHospede = async (req: Request, res: Response) => {
    try {
        const novoHospede = await hospedeService.create(req.body);
        res.status(201).json(novoHospede);
} catch (error: any){
    if (error.code === "P2002"){
        return res.status(409).json({message: 'Hospede ja cadastrado: ${error.meta.target}'});
    }
    return res.status(500).json({message: error.message});
    };
};

export const getAllHospedes = async (req: Request, res: Response) => {
    try {
        const hospedes = await hospedeService.getAll();
        return res.json(hospedes);
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const getHospedeByDocumento = async (req: Request, res: Response) => {
    try {
        const hospede = await hospedeService.getByDocumento(req.params.documento);
        if(!hospede){
            return res.status(500).json({message: 'Hospede não encontrado'});
        }
    } catch (error: any) {
        return res.status(500).json({ message: error.message });
    }
};

export const updateHospede = async (req: Request, res: Response) => {
    try {
        const hospede = await hospedeService.update(Number(req.params.id), req.body);
        return res.json(hospede);
    } catch (error: any) {
        if (error.code === "P2025"){
            return res.status(404).json({message: 'Hospede ja cadastrado: ${error.meta.target}'});
        }
        return res.status(500).json({ message: error.message });
    }
};

export const deleteHospede = async (req: Request, res: Response) => {
    try {
        await hospedeService.remove(Number(req.params.id));
        return res.status(204).send();
    } catch (error: any) {
        if(error.code === "P2025"){
            res.status(404).json({ message: "Hospede não encontrado" });
        }
        return res.status(500).json({ message: error.message });
    }
};