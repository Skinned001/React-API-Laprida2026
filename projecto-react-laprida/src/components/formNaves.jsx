import { useState } from 'react';

export const FormularioNave = () => {
  const [formData, setFormData] = useState({
    clasificacionNave: '',
    tipoEscudo: '',
    tipoArmadura: '',
    espaciosArmas: 0,
    tipoReactor: '',
    tipoMotor: ''
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'espaciosArmas' ? parseInt(value) || 0 : value
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/api/naves', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    .then(respuesta => {
      if (respuesta.ok) alert('¡Planos registrados en la base de datos!');
    })
    .catch(error => console.error("Error:", error));
  };

  return (
    <div className="bg-slate-900/50 border border-slate-700 p-6 rounded-lg backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <h2 className="text-xl font-semibold mb-6 text-cyan-400 flex items-center gap-2">
        <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
        Terminal de Ensamblaje
      </h2>

      <form onSubmit={enviarFormulario} className="flex flex-col gap-4">
        {['clasificacionNave', 'tipoEscudo', 'tipoArmadura', 'espaciosArmas', 'tipoReactor', 'tipoMotor'].map((campo, index) => (
          <input
            key={index}
            name={campo}
            type={campo === 'espaciosArmas' ? 'number' : 'text'}
            placeholder={campo.replace(/([A-Z])/g, ' $1').trim().toUpperCase()}
            onChange={manejarCambio}
            required
            className="w-full bg-slate-800/80 border border-slate-600 rounded px-4 py-2 text-cyan-100 placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
          />
        ))}
        
        <button 
          type="submit" 
          className="mt-4 px-6 py-2 bg-slate-800 border border-cyan-500 text-cyan-400 font-medium rounded hover:bg-cyan-950 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95 uppercase tracking-wider"
        >
          Iniciar Protocolo
        </button>
      </form>
    </div>
  );
};