import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cabecalho from './componentes/Cabecalho';
import Apresentacao from './paginas/Apresentacao';
import Projetos from './paginas/Projetos';
import Contato from './paginas/Contato';
import Rodape from './componentes/Rodape';

function App() {
  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    const preferenciaModoEscuro = localStorage.getItem('modoEscuro') === 'true';
    setModoEscuro(preferenciaModoEscuro);
  }, []);

  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
    localStorage.setItem('modoEscuro', !modoEscuro);
  };

  return (
    <div
      className={`${
        modoEscuro
          ? "bg-gray-800 text-cor_texto_claro"
          : "bg-fundo_claro text-cor_texto_escuro"
      } min-h-screen flex flex-col`}
    >
      <Router>
        {/* Cabeçalho */}
        <Cabecalho alternarModo={alternarModo} modoEscuro={modoEscuro} />

        {/* Conteúdo principal */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Apresentacao />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>

        {/* Rodapé */}
        <Rodape />
      </Router>
    </div>
  );
}

export default App;