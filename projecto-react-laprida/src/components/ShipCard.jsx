import { useState } from 'react';

const ShipCard = ({ ship, onDelete, onEdit }) => {
    // Estado para controlar si estamos en la fase de confirmación de borrado
    const [isConfirming, setIsConfirming] = useState(false);

    return (
        <div className="flex flex-col justify-between h-full group animate-holo bg-[#0b121d] border border-cyan-900/40 rounded-xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-300 relative overflow-hidden">
            
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10">
                <div className="border-b border-cyan-900/50 pb-3 mb-4 flex justify-between items-start group-hover:border-cyan-400 transition-colors duration-500">
                    <div>
                        <h3 className="text-cyan-500 font-bold tracking-widest uppercase text-xl drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] group-hover:text-white transition-colors duration-300">
                            {ship.clasificacionNave}
                        </h3>
                        <span className="text-[10px] text-cyan-700 font-mono tracking-widest uppercase">
                            Designación Alfa-{ship.id?.toString().padStart(4, '0')}
                        </span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse mt-2 shadow-[0_0_10px_#22d3ee]"></div>
                </div>

                <div className="space-y-3 text-sm text-slate-300">
                    <p className="flex justify-between items-center border-b border-slate-800/30 pb-1">
                        <span className="text-slate-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-cyan-600">🛡️</span> Escudos
                        </span> 
                        <span className="text-right font-medium text-slate-200">{ship.tipoEscudo}</span>
                    </p>
                    <p className="flex justify-between items-center border-b border-slate-800/30 pb-1">
                        <span className="text-slate-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-slate-600">🧱</span> Blindaje
                        </span> 
                        <span className="text-right font-medium text-slate-200">{ship.tipoArmadura}</span>
                    </p>
                    <p className="flex justify-between items-center border-b border-slate-800/30 pb-1">
                        <span className="text-slate-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-amber-500">⚡</span> Reactor
                        </span> 
                        <span className="text-amber-400/90 text-right font-mono text-xs">{ship.tipoReactor}</span>
                    </p>
                    <p className="flex justify-between items-center border-b border-slate-800/30 pb-1">
                        <span className="text-slate-500 text-[10px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-blue-500">🚀</span> Motor
                        </span> 
                        <span className="text-right font-medium text-slate-200">{ship.tipoMotor}</span>
                    </p>
                    <p className="flex justify-between items-center border-b border-slate-800/30 pb-1 bg-rose-950/20 p-1 rounded">
                        <span className="text-rose-500/80 text-[10px] uppercase tracking-wider flex items-center gap-2">
                            <span className="text-rose-500">⚔️</span> Capacidad de Fuego
                        </span> 
                        <span className="text-right font-mono font-bold text-rose-400">{ship.espaciosArmas} Módulos</span>
                    </p>
                </div>
            </div>

            {/* SECCIÓN DE BOTONES TÁCTICOS (Con altura fija h-10 para evitar saltos) */}
            <div className="relative z-10 flex gap-2 mt-6 h-10 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                
                {/* Botón Reconfigurar */}
                <button 
                    className="flex-1 bg-cyan-950/40 border border-cyan-500/50 text-cyan-400 text-[10px] font-bold uppercase tracking-tighter hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300 rounded"
                    onClick={() => onEdit(ship)}
                >
                    🔧 Reconfigurar
                </button>

                {/* Lógica Condicional del Botón Desguazar */}
                {!isConfirming ? (
                    <button 
                        className="flex-1 bg-rose-950/20 border border-rose-900/50 text-rose-600 text-[10px] font-bold uppercase tracking-tighter hover:bg-rose-600 hover:text-white hover:border-rose-400 transition-all duration-300 rounded"
                        onClick={() => setIsConfirming(true)}
                    >
                        🗑️ Desguazar
                    </button>
                ) : (
                    <div className="flex flex-1 gap-1 animate-pulse">
                        <button 
                            className="flex-[2] bg-rose-600 text-white text-[9px] font-black uppercase rounded shadow-[0_0_10px_rgba(225,29,72,0.6)]"
                            onClick={() => onDelete(ship.id)}
                        >
                            ¿CONFIRMAR?
                        </button>
                        <button 
                            className="flex-1 bg-slate-800 text-slate-400 text-[9px] rounded hover:bg-slate-700 font-bold"
                            onClick={() => setIsConfirming(false)}
                        >
                            X
                        </button>
                    </div>
                )}
            </div>
            
        </div>
    );
};

export default ShipCard;