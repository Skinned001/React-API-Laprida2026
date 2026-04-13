import ShipCard from './ShipCard';

const ShipList = ({ ships, onDelete, onEdit }) => {
    // Si no hay naves, mostramos un mensaje inmersivo
    if (!ships || ships.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center p-12 bg-slate-900/30 border border-cyan-900/30 rounded-lg border-dashed">
                <span className="text-4xl mb-4 opacity-50 animate-pulse">📡</span>
                <p className="text-cyan-500/70 text-sm tracking-widest uppercase text-center">
                    No se detectan firmas de energía estelar en este sector.
                </p>
                <p className="text-slate-500 text-xs mt-2 text-center">
                    El registro de la base de datos está vacío o el puerto espacial no responde.
                </p>
            </div>
        );
    }

    // Si hay naves, renderizamos la grilla
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {ships.map((ship) => (
                <ShipCard 
                    key={ship.id} 
                    ship={ship} 
                    onDelete={onDelete} 
                    onEdit={onEdit} 
                />
            ))}
        </div>
    );
};

export default ShipList;