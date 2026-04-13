import { HomePage } from './pages/HomePage';

function App() {
  return (
    <div className="min-h-screen p-6 bg-[#050b14] text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase">
          Astillero Imperial: Stellaris
        </h1>
        <div className="h-[2px] w-64 mx-auto mt-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        <p className="mt-2 text-xs text-cyan-500/60 tracking-[0.2em] uppercase">Módulo de Gestión de Flota v1.0.4</p>
      </header>

      {/* Cambiamos <CentroMando /> por <HomePage /> */}
      <HomePage />
      
      <footer className="mt-20 text-center text-[10px] text-slate-600 uppercase tracking-widest">
        &copy; 2026 Registro Galáctico de Naves - IPF Software Dev
      </footer>
    </div>
  );
}

export default App;