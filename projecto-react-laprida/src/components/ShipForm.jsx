import { useState, useEffect } from 'react';

const ShipForm = ({ onSubmit, initialData = {}, isEditing = false }) => {
    
    // Estado inicial del diseño
    const [ship, setShip] = useState({
        clasificacionNave: '',
        tipoEscudo: '',
        tipoArmadura: '',
        tipoReactor: '',
        tipoMotor: '',
        espaciosArmas: 0
    });

    // Sincronización: Cuando seleccionas una nave para editar, 
    // este efecto carga los datos en los campos del formulario.
    useEffect(() => {
        if (isEditing && initialData) {
            setShip({
                clasificacionNave: initialData.clasificacionNave || '',
                tipoEscudo: initialData.tipoEscudo || '',
                tipoArmadura: initialData.tipoArmadura || '',
                tipoReactor: initialData.tipoReactor || '',
                tipoMotor: initialData.tipoMotor || '',
                espaciosArmas: initialData.espaciosArmas || 0
            });
        } else {
            // Si no estamos editando, nos aseguramos de que esté limpio
            setShip({
                clasificacionNave: '',
                tipoEscudo: '',
                tipoArmadura: '',
                tipoReactor: '',
                tipoMotor: '',
                espaciosArmas: 0
            });
        }
    }, [initialData, isEditing]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShip({ ...ship, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Verificación de seguridad: No permitir naves vacías
        if (!ship.clasificacionNave) return;
        
        onSubmit(ship);
        
        // Solo limpiamos si es una creación nueva
        if (!isEditing) {
            setShip({
                clasificacionNave: '',
                tipoEscudo: '',
                tipoArmadura: '',
                tipoReactor: '',
                tipoMotor: '',
                espaciosArmas: 0
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Clasificación */}
                <div className="flex flex-col">
                    <label className="text-[10px] text-cyan-500 uppercase tracking-widest mb-1 ml-1">Clasificación</label>
                    <input 
                        name="clasificacionNave" 
                        placeholder="Ej: Corbeta" 
                        onChange={handleChange} 
                        value={ship.clasificacionNave} 
                        required 
                        className="bg-slate-950 border border-slate-800 p-3 rounded-md text-slate-200 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>

                {/* Escudos */}
                <div className="flex flex-col">
                    <label className="text-[10px] text-cyan-500 uppercase tracking-widest mb-1 ml-1">Escudos</label>
                    <input 
                        name="tipoEscudo" 
                        placeholder="Deflectores" 
                        onChange={handleChange} 
                        value={ship.tipoEscudo} 
                        required 
                        className="bg-slate-950 border border-slate-800 p-3 rounded-md text-slate-200 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>

                {/* Armadura */}
                <div className="flex flex-col">
                    <label className="text-[10px] text-cyan-500 uppercase tracking-widest mb-1 ml-1">Blindaje</label>
                    <input 
                        name="tipoArmadura" 
                        placeholder="Cerámica" 
                        onChange={handleChange} 
                        value={ship.tipoArmadura} 
                        required 
                        className="bg-slate-950 border border-slate-800 p-3 rounded-md text-slate-200 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>

                {/* Reactor */}
                <div className="flex flex-col">
                    <label className="text-[10px] text-cyan-500 uppercase tracking-widest mb-1 ml-1">Reactor</label>
                    <input 
                        name="tipoReactor" 
                        placeholder="Fisión" 
                        onChange={handleChange} 
                        value={ship.tipoReactor} 
                        required 
                        className="bg-slate-950 border border-slate-800 p-3 rounded-md text-slate-200 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>

                {/* Motor */}
                <div className="flex flex-col">
                    <label className="text-[10px] text-cyan-500 uppercase tracking-widest mb-1 ml-1">Propulsores</label>
                    <input 
                        name="tipoMotor" 
                        placeholder="Motor Hiper" 
                        onChange={handleChange} 
                        value={ship.tipoMotor} 
                        required 
                        className="bg-slate-950 border border-slate-800 p-3 rounded-md text-slate-200 focus:border-cyan-500 outline-none transition-all"
                    />
                </div>

                {/* Armas (Número Simplificado) */}
                <div className="flex flex-col">
                    <label className="text-[10px] text-rose-500 uppercase tracking-widest mb-1 ml-1 font-bold">Capacidad de Fuego</label>
                    <input 
                        name="espaciosArmas" 
                        type="number" 
                        min="0"
                        onChange={handleChange} 
                        value={ship.espaciosArmas} 
                        required 
                        className="bg-slate-950 border border-rose-900/50 p-3 rounded-md text-rose-200 focus:border-rose-500 outline-none transition-all font-mono text-center"
                    />
                </div>
            </div>

            {/* Botón Dinámico */}
            <button 
                type="submit" 
                className={`w-full py-4 text-white font-bold uppercase tracking-widest text-xs rounded transition-all shadow-lg ${
                    isEditing 
                    ? 'bg-amber-600 hover:bg-amber-500 shadow-amber-900/40 border border-amber-400/50' 
                    : 'bg-cyan-600 hover:bg-cyan-500 shadow-cyan-900/40 border border-cyan-400/50'
                }`}
            >
                {isEditing ? '⚡ Aplicar Reconfiguración' : '🏗️ Autorizar Construcción'}
            </button>
        </form>
    );
};

export default ShipForm;