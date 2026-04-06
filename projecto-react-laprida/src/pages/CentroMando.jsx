import { ListaNaves } from '../components/ListaNaves';
import { FormularioNave } from '../components/formNaves';

export const CentroMando = ({ modo }) => {
  return (
    <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative">
      
      {/* Columna Izquierda: El Panel de Acción */}
      <div className="md:col-span-1 transition-all duration-500">
        {modo === 'agregar' && (
          <FormularioNave />
        )}
        
        {modo === 'editar' && (
          <div className="bg-yellow-950/20 border border-yellow-700/50 p-6 rounded-lg text-center backdrop-blur-sm animate-pulse">
            <p className="text-yellow-400 font-medium tracking-wide">
              Selecciona una nave de la flota para modificar sus planos...
            </p>
          </div>
        )}

        {modo === 'eliminar' && (
          <div className="bg-red-950/20 border border-red-700/50 p-6 rounded-lg text-center backdrop-blur-sm animate-pulse">
            <p className="text-red-400 font-medium tracking-wide">
              Selecciona una nave para iniciar protocolo de desmantelamiento...
            </p>
          </div>
        )}
      </div>

      {/* Columna Derecha: La Flota */}
      <div className="md:col-span-2">
        {/* Le pasamos el modo a la lista para que las tarjetas sepan si deben mostrar botones de editar/eliminar */}
        <ListaNaves modoActual={modo} />
      </div>
      
    </main>
  );
};