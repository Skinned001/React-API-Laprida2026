import express from 'express';
import cors from "cors";
import { routes } from './servidor/routes/index.js';
import { connectDB } from "./servidor/config/database.js";

import "dotenv/config";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5174", // o la URL de tu frontend
    credentials: true,
  })
);

// Montamos las rutas en la aplicación. 
// Al poner '/api' como primer parámetro, todas las rutas de naveRoutes tendrán ese prefijo.
// Ejemplo: el GET a "/naves" ahora será accesible en "http://localhost:3000/api/naves"
app.use('/api', routes);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`¡Astillero espacial en línea en el puerto ${PORT}!`);
});