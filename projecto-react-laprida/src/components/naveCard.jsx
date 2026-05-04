export const NaveCard = ({ nave }) => {
  return (
    <div className="group relative bg-slate-800/50 border border-slate-700 p-5 rounded hover:border-cyan-500/50 hover:bg-slate-800 transition-all duration-300 overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <h3 className="text-lg font-bold text-cyan-300 mb-3 uppercase tracking-wide">
        {nave.clasificacionNave}
      </h3>
      
      <ul className="space-y-1 text-sm text-slate-400">
        <li><strong className="text-slate-300">Escudos:</strong> {nave.tipoEscudo}</li>
        <li><strong className="text-slate-300">Blindaje:</strong> {nave.tipoArmadura}</li>
        <li><strong className="text-slate-300">Capacidad Armas:</strong> {nave.espaciosArmas} slots</li>
        <li><strong className="text-slate-300">Reactor:</strong> {nave.tipoReactor}</li>
        <li><strong className="text-slate-300">Propulsión:</strong> {nave.tipoMotor}</li>
      </ul>
    </div>
  );
};