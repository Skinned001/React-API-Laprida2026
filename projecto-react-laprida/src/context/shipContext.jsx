import { createContext, useContext, useState } from 'react';
import { useShips } from '../hooks/useShip';

const ShipContext = createContext();

export const ShipProvider = ({ children }) => {
    const { ships, loading, createShip, updateShip, deleteShip } = useShips();
    const [shipToEdit, setShipToEdit] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    // --- NUEVO: Estado del Tema ---
    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleTheme = () => {
        setIsDarkMode(prev => !prev);
    };

    const value = {
        ships, loading, createShip, updateShip, deleteShip,
        shipToEdit, setShipToEdit, searchTerm, setSearchTerm,
        // Exponemos el tema y la función
        isDarkMode, toggleTheme 
    };

    return (
        <ShipContext.Provider value={value}>
            {children}
        </ShipContext.Provider>
    );
};

// Hook de acceso rápido para los componentes
export const useShipContext = () => {
    const context = useContext(ShipContext);
    if (!context) {
        throw new Error("useShipContext debe usarse dentro de un ShipProvider");
    }
    return context;
};