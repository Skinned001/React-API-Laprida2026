import { NaveModel } from "../models/ships.models.js"; // Ajusta la ruta según tu estructura

// 1. Obtener el listado de todas las naves (GET)
export const getNaves = async (req, res) => {
  try {
    const naves = await NaveModel.findAll();
    res.json(naves);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la flota", error: error.message });
  }
};

// 2. Obtener una sola nave por su ID (GET)
export const getNaveById = async (req, res) => {
  try {
    const { id } = req.params;
    const nave = await NaveModel.findByPk(id);
    
    if (!nave) {
      return res.status(404).json({ message: "Nave no encontrada en el astillero" });
    }
    
    res.json(nave);
  } catch (error) {
    res.status(500).json({ message: "Error al buscar la nave", error: error.message });
  }
};

// 3. Crear una nueva nave (POST)
export const createNave = async (req, res) => {
  try {
    // Sequelize toma automáticamente los campos del req.body que coincidan con el modelo
    const nuevaNave = await NaveModel.create(req.body);
    res.status(201).json(nuevaNave);
  } catch (error) {
    res.status(500).json({ message: "Error al ensamblar la nave", error: error.message });
  }
};

// 4. Actualizar una nave existente (PUT o PATCH)
export const updateNave = async (req, res) => {
  try {
    const { id } = req.params;
    const nave = await NaveModel.findByPk(id);

    if (!nave) {
      return res.status(404).json({ message: "Nave no encontrada" });
    }

    // Actualiza la nave con los datos enviados en el cuerpo de la petición
    await nave.update(req.body);
    res.json(nave);
  } catch (error) {
    res.status(500).json({ message: "Error al reacondicionar la nave", error: error.message });
  }
};

// 5. Eliminar una nave (DELETE)
export const deleteNave = async (req, res) => {
  try {
    const { id } = req.params;
    const nave = await NaveModel.findByPk(id);

    if (!nave) {
      return res.status(404).json({ message: "Nave no encontrada" });
    }

    // Como pusiste "paranoid: true" en el modelo, esto no la borra de la base de datos,
    // solo le agrega una fecha de eliminación (soft delete), lo cual es una gran práctica.
    await nave.destroy();
    res.json({ message: "Nave desmantelada con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la nave", error: error.message });
  }
};