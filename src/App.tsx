import React from 'react';
import Proyectos from './components/proyectos';
import Skills from './components/Skills';
import Experiens from './components/Experiens';
import About from './components/About';
import Education from './components/Education';
import Contacto from './components/Contacto';




const App: React.FC = () => {

  return (
    <div className="selection:bg-primary selection:text-black">
      {/* --- TopNavBar --- */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-900/20">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <span className="text-2xl font-black tracking-tighter text-primary">Thomas Carreño</span>

          <div className="hidden md:flex gap-8 items-center">
            {['Sobre mi', 'Experiencia', 'Projectos', 'Habilidades', 'Educacion', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-400 font-medium pb-1 hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative ">
        {/* --- 1. Hero Section --- */}
        <About />

        {/* --- 3. Experiens Section --- */}
        <Experiens />

        {/* --- 3. Projectos Section --- */}
        <Proyectos />

        {/* --- 4. Habilidades Section --- */}
        <Skills />

        {/* --- 5. Educacion Section --- */}
        <Education />

        {/* --- 6. Contacto Section --- */}
        <Contacto/>
      </main>

      <footer className="bg-slate-950 w-full py-12 border-t border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-center px-8 gap-6 w-full max-w-7xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-500">© 2026 Thomas Carreño.</span>
        </div>
      </footer>
    </div>
  );
};

export default App;