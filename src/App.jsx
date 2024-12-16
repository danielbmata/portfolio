import { useState, useEffect } from 'react';
import Cabecalho from './componentes/Cabecalho';
import Apresentacao from './componentes/Apresentacao';
import Projetos from './componentes/Projetos';
import Rodape from './componentes/Rodape';

function App() {
  const [modoEscuro, setModoEscuro] = useState(false);

  useEffect(() => {
    // Verificar a preferência do usuário armazenada
    const preferenciaModoEscuro = localStorage.getItem('modoEscuro') === 'true';
    setModoEscuro(preferenciaModoEscuro);
  }, []);

  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
    localStorage.setItem('modoEscuro', !modoEscuro);
  };

  return (
    <div className={`${modoEscuro ? 'bg-fundo_escuro text-cor_texto_claro' : 'bg-fundo_claro text-cor_texto_escuro'} min-h-screen transition-colors duration-300`}>
      {/* Cabeçalho */}
      <Cabecalho alternarModo={alternarModo} modoEscuro={modoEscuro} />

      {/* Seção de Apresentação */}
      <section id="apresentacao" className="px-4 py-8">
        <Apresentacao />
      </section>

      {/* Seção de Projetos */}
      <section id="projetos" className="px-4 py-8">
        <Projetos />
      </section>

      {/* Rodapé */}
      <Rodape />
    </div>
  );
}

export default App;
