import { useShipContext } from '../context/ShipContext';

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useShipContext();

    return (
        <button 
            onClick={toggleTheme}
            className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-tighter ${
                isDarkMode 
                ? 'bg-slate-800 border-cyan-500/30 text-cyan-400 hover:bg-slate-700' 
                : 'bg-white border-blue-900/20 text-blue-900 shadow-md hover:bg-blue-50'
            }`}
        >
            {isDarkMode ? (
                <><span>🌙</span> Modo Estelar</>
            ) : (
                <><span>☀️</span> Modo Estación</>
            )}
        </button>
    );
};

