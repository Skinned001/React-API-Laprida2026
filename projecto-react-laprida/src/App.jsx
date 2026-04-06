import { CentroMando } from './pages/CentroMando';

function App() {
  return (
    <div className="min-h-screen p-6 font-sans selection:bg-cyan-500 selection:text-white">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase">
          Base de Datos de Naves
        </h1>
        <div className="h-[2px] w-64 mx-auto mt-2 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
      </header>

      {/* Aquí cargamos toda la página que armamos en el Paso 4 */}
      <CentroMando />
    </div>
  );
}

export default App;