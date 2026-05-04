import { useState, useEffect } from 'react';
import { NaveCard } from './naveCard'; // <-- Importamos la pieza

export const ListaNaves = () => {
  const [naves, setNaves] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/naves')
      .then(respuesta => respuesta.json())
      .then(datos => setNaves(datos))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-slate-900/30 border border-slate-800 p-6 rounded-lg">
      <h2 className="text-xl font-semibold mb-6 text-slate-200 border-b border-slate-700 pb-2">
        Registro de Flota Activa
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Usamos el componente map para repetir la tarjeta */}
        {naves.map((nave) => (
          <NaveCard key={nave.id} nave={nave} />
        ))}
      </div>
    </div>
  );
};