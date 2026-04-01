import express from 'express';
// Importamos el archivo de rutas que creaste (ajusta la ruta según tus carpetas, por ejemplo './routes/naves.routes.js')
import { naveRoutes } from './routes/ship.routes.js'; 

const app = express();
const PORT = 3000;

// Middleware fundamental para poder recibir información en formato JSON (necesario para POST y PUT)
app.use(express.json());

// Montamos las rutas en la aplicación. 
// Al poner '/api' como primer parámetro, todas las rutas de naveRoutes tendrán ese prefijo.
// Ejemplo: el GET a "/naves" ahora será accesible en "http://localhost:3000/api/naves"
app.use('/api', naveRoutes);

// Iniciamos el servidor
app.listen(PORT, () => {
  console.log(`¡Astillero espacial en línea en el puerto ${PORT}!`);
});