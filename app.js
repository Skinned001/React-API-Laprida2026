import express from 'express';
import cors from 'cors';
import { routes } from './servidor/routes/index.js';
import { sequelize } from './servidor/config/database.js';
import { NaveModel } from './servidor/models/ships.models.js';  

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', routes);

// --- SECUENCIA DE INICIO DEL ASTILLERO ---
const iniciarServidor = async () => {
    try {
        // Autenticar comprueba que la contraseña y el usuario de la DB estén bien
        await sequelize.authenticate();
        console.log('📡 Conexión a la red de datos estelar establecida.');

        // SYNC: Aquí es donde ocurre la magia de crear las tablas
        await sequelize.sync({ alter: true }); 
        console.log('🏗️ Tablas del Astillero sincronizadas y operativas.');

        // Recién cuando la DB está lista, encendemos el servidor de Express
        app.listen(PORT, () => {
            console.log(`🚀 Servidor central operando en el puerto ${PORT}`);
        });

    } catch (error) {
        console.error('💥 Fallo crítico en el núcleo de datos:', error);
    }
};

iniciarServidor();