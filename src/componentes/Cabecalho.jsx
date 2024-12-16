import { useState } from 'react';
import PropTypes from 'prop-types';

export default function Cabecalho({ alternarModo, modoEscuro }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className={`bg-azul-escuro text-branco shadow-lg`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo ou título */}
        <div className="text-3xl font-extrabold">
          <a href="#" className="text-branco hover:text-amarelo-suave transition-colors duration-300">
            Daniel Mata
          </a>
        </div>

        {/* Menu de Navegação Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="#apresentacao" className="text-branco hover:text-amarelo-suave transition-colors duration-300">Apresentação</a>
          <a href="#projetos" className="text-branco hover:text-amarelo-suave transition-colors duration-300">Projetos</a>
          <a href="#contato" className="text-branco hover:text-amarelo-suave transition-colors duration-300">Contato</a>
        </nav>

        {/* Botão para alternar entre modo claro e escuro, visível em todas as telas */}
        <button
          className="md:flex text-3xl text-branco focus:outline-none"
          onClick={alternarModo}
        >
          {modoEscuro ? '🌙' : '🌞'}
        </button>

        {/* Botão de Menu Hamburguer para Mobile */}
        <button
          className="md:hidden text-3xl text-branco focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          &#9776;
        </button>
      </div>

      {/* Menu Responsivo - Quando o botão hamburguer é clicado */}
      {menuAberto && (
        <div className="md:hidden bg-azul-escuro text-branco p-4">
          <nav className="space-y-4">
            <a href="#apresentacao" className="block text-lg text-branco hover:text-amarelo-suave transition-colors duration-300">Apresentação</a>
            <a href="#projetos" className="block text-lg text-branco hover:text-amarelo-suave transition-colors duration-300">Projetos</a>
            <a href="#contato" className="block text-lg text-branco hover:text-amarelo-suave transition-colors duration-300">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
}

Cabecalho.propTypes = {
  alternarModo: PropTypes.func.isRequired,
  modoEscuro: PropTypes.bool.isRequired,
};
