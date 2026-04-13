import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/naves';

export const useShips = () => {
    const [ships, setShips] = useState([]);
    const [loading, setLoading] = useState(false);

    const getShips = async () => {
        setLoading(true);
        try {
            const res = await axios.get(API_URL);
            setShips(res.data);
        } catch (error) {
            console.error("Error obteniendo naves", error);
        } finally {
            setLoading(false);
        }
    };

    const createShip = async (shipData) => {
        try {
            await axios.post(API_URL, shipData);
            getShips();
        } catch (error) {
            console.error("Error al crear nave", error);
        }
    };

    const deleteShip = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setShips(ships.filter(s => s.id !== id));
        } catch (error) {
            console.error("Error al eliminar", error);
        }
    };

    // --- NUEVA FUNCIÓN DE ACTUALIZACIÓN ---
    const updateShip = async (id, shipData) => {
        try {
            await axios.put(`${API_URL}/${id}`, shipData);
            getShips(); // Recargamos la flota para ver los cambios
        } catch (error) {
            console.error("Error al actualizar", error);
        }
    };

    useEffect(() => { getShips(); }, []);

    return { ships, loading, createShip, deleteShip, updateShip, getShips };
};