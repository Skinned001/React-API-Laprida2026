import { useState } from "react";
import { useShips } from "../hooks/useShip";
import ShipForm from "../components/ShipForm";
import ShipList from "../components/ShipList";

export const HomePage = () => {
  const { ships, loading, createShip, deleteShip, updateShip } = useShips();
  
  // 1. Estado para el muelle de reparación
  const [shipToEdit, setShipToEdit] = useState(null);
  
  // 2. NUEVO: Estado para el término de búsqueda del radar
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (ship) => {
    setShipToEdit(ship);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (shipData) => {
    if (shipToEdit) {
      await updateShip(shipToEdit.id, shipData);
      setShipToEdit(null);
    } else {
      await createShip(shipData);
    }
  };

  const handleCancelEdit = () => {
    setShipToEdit(null);
  };

  // 3. NUEVO: Lógica de filtrado (Se ejecuta en tiempo real al escribir)
  const navesFiltradas = ships.filter((ship) => {
    const término = searchTerm.toLowerCase();
    return (
      ship.clasificacionNave.toLowerCase().includes(término) || 
      ship.id?.toString().includes(término) ||
      ship.tipoMotor.toLowerCase().includes(término) // También busca por tipo de motor
    );
  });

  return (
    <main className="max-w-7xl mx-auto space-y-12">
      {/* Sección de Diseño (Se mantiene igual) */}
      <section className={`p-6 border rounded-lg backdrop-blur-sm transition-all duration-500 ${shipToEdit ? 'bg-amber-900/20 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.1)]' : 'bg-slate-900/50 border-cyan-900/30'}`}>
        <div className="flex justify-between items-center mb-6">
            <h2 className={`text-xl font-semibold flex items-center gap-2 ${shipToEdit ? 'text-amber-400' : 'text-cyan-400'}`}>
            <span className={`w-2 h-2 rounded-full animate-pulse ${shipToEdit ? 'bg-amber-500' : 'bg-cyan-500'}`}></span>
            {shipToEdit ? `Modificando Diseño: ${shipToEdit.clasificacionNave}` : 'Diseñar Nueva Unidad'}
            </h2>
            
            {shipToEdit && (
                <button onClick={handleCancelEdit} className="text-xs bg-slate-800 text-slate-300 hover:text-white px-3 py-1 rounded">
                    Abortar Modificación
                </button>
            )}
        </div>
        
        <ShipForm 
            onSubmit={handleSubmit} 
            initialData={shipToEdit || {}} 
            isEditing={!!shipToEdit} 
        />
      </section>

      {/* Sección de Flota y Radar */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 border-b border-slate-800 pb-4 gap-4">
          <div>
            <h2 className="text-xl font-semibold text-blue-400 uppercase tracking-wider flex items-center gap-2">
              <span>📡</span> Registro de Flota Activa
            </h2>
            <span className="text-xs text-slate-500 mt-1 block">Unidades detectadas: {navesFiltradas.length} de {ships.length}</span>
          </div>

          {/* 4. NUEVO: Interfaz de la Barra de Búsqueda */}
          <div className="w-full md:w-72 relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-cyan-600 group-focus-within:text-cyan-400 transition-colors text-sm">🔍</span>
            </div>
            <input
              type="text"
              placeholder="Designación/motor/ID"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#0b121d] border border-slate-700 text-cyan-100 placeholder-slate-600 text-xs pl-10 pr-4 py-2 rounded-md focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-all shadow-inner uppercase tracking-wide"
            />
          </div>
        </div>

        {/* 5. NUEVO: Pasamos 'navesFiltradas' en lugar de 'ships' */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <ShipList ships={navesFiltradas} onDelete={deleteShip} onEdit={handleEdit} />
        )}
      </section>
    </main>
  );
};