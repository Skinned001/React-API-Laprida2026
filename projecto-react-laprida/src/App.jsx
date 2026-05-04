import { ShipProvider, useShipContext } from './context/ShipContext';
import { HomePage } from './pages/HomePage';
import { ThemeToggle } from './components/componentToggle'; // <-- IMPORTANTE: Importamos el interruptor

function AppContent() {
  const { isDarkMode } = useShipContext();

  return (
    <div className={`min-h-screen p-6 transition-colors duration-500 font-sans selection:bg-cyan-500 selection:text-white ${
      isDarkMode 
      ? 'bg-[#050b14] text-slate-200' // Tema Oscuro (Espacial)
      : 'bg-slate-100 text-slate-900'    // Tema Claro (Laboratorio)
    }`}>
      <header className="mb-10 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-left">
          <h1 className={`text-4xl font-bold tracking-widest uppercase ${
            isDarkMode ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600' : 'text-blue-900'
          }`}>
            Astillero Imperial
          </h1>
          <p className="text-[10px] tracking-[0.2em] uppercase opacity-60">Módulo de Gestión de Flota</p>
        </div>

        {/* El interruptor táctico ahora está importado y operativo */}
        <ThemeToggle />
      </header>

      <HomePage />
      
      <footer className="mt-20 text-center text-[10px] text-slate-500 uppercase tracking-widest">
        &copy; 2026 Registro Galáctico - IPF Software Dev
      </footer>
    </div>
  );
}

// Nota: App envuelve a AppContent con el Provider para encender la red
function App() {
  return (
    <ShipProvider>
      <AppContent />
    </ShipProvider>
  );
}

export default App;