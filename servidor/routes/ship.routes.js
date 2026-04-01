import { Router } from "express";
import { 
  getNaves, 
  getNaveById, 
  createNave, 
  updateNave, 
  deleteNave 
} from "../controllers/ship.controller.js";

// Si más adelante necesitas proteger estas rutas, puedes importar tu middleware aquí
// import { authMiddleware } from "../middlewares/auth.js";

export const naveRoutes = Router();

// Rutas para gestionar la flota
naveRoutes.get("/naves", getNaves); // Si usas authMiddleware, iría así: naveRoutes.get("/naves", authMiddleware, getNaves);
naveRoutes.get("/naves/:id", getNaveById);
naveRoutes.post("/naves", createNave);
naveRoutes.put("/naves/:id", updateNave);
naveRoutes.delete("/naves/:id", deleteNave);