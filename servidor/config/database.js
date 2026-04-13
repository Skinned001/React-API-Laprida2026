import { Sequelize } from "sequelize";
import mysql from "mysql2/promise"; 
import "dotenv/config";

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
  }
);

export const connectDB = async () => {
  try {
    // 1. Creamos una conexión temporal al servidor MySQL (sin especificar la base de datos)
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    });

    // 2. Ejecutamos la consulta para crear la base de datos si no existe
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME}\`;`);
    
    // 3. Cerramos la conexión temporal
    await connection.end(); 

    // 4. Ahora sí, inicializamos Sequelize sabiendo que la BD existe al 100%
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    
    await sequelize.sync({ force: false });
    console.log("Database synchronized.");
    
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};