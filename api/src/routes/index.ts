import { Router } from "express";
import funcionarioRoutes from "./funcionarioRoutes";
import hospedeRoutes from "./hospedeRoutes";
import tipoQuartoRoutes from "./tipoQuartoRoutes";
import quartoRoutes from "./quartoRoutes";
import reservaRoutes from "./reservaRoutes";
import autenticacaoRoutes from "./autenticacaoRoutes";

const routes = Router();

routes.use(funcionarioRoutes);
routes.use(hospedeRoutes);
routes.use(tipoQuartoRoutes);
routes.use(quartoRoutes);
routes.use(reservaRoutes);
routes.use(autenticacaoRoutes);

export default routes;
