import { Router } from "express";
import { naveRoutes } from "./ship.routes.js";

export const routes = Router();

routes.use(naveRoutes);