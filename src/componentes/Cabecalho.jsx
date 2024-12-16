import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Importe o Link do React Router

export default function Cabecalho({ alternarModo, modoEscuro }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-azul-escuro text-branco shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo ou título */}
        <div className="text-3xl font-extrabold">
          <Link
            to="/"
            className="text-branco hover:text-amarelo-suave transition-colors duration-300"
          >
            Daniel Mata
          </Link>
        </div>

        {/* Menu de Navegação Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <Link
            to="/"
            className="text-branco hover:text-amarelo-suave transition-colors duration-300"
          >
            Apresentação
          </Link>
          <Link
            to="/projetos"
            className="text-branco hover:text-amarelo-suave transition-colors duration-300"
          >
            Projetos
          </Link>
          <Link
            to="/contato"
            className="text-branco hover:text-amarelo-suave transition-colors duration-300"
          >
            Contato
          </Link>
        </nav>

        {/* Botão para alternar entre modo claro e escuro */}
        <button
          className="md:flex text-xl text-branco focus:outline-none focus:ring-0 p-2 rounded-full bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out"
          onClick={alternarModo}
        >
          {modoEscuro ? '🌞' : '🌙'}
        </button>

        {/* Botão de Menu Hamburguer para Mobile */}
        <button
          className="md:hidden text-xl text-branco focus:outline-none focus:ring-0 p-2 rounded-full bg-transparent hover:bg-white hover:bg-opacity-10 transition duration-300 ease-in-out"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          &#9776;
        </button>
      </div>

      {/* Menu Responsivo - Quando o botão hamburguer é clicado */}
      {menuAberto && (
        <div className="md:hidden bg-azul-escuro text-branco p-4">
          <nav className="space-y-4">
            <Link
              to="/"
              className="block text-lg text-branco hover:text-amarelo-suave transition-colors duration-300"
            >
              Apresentação
            </Link>
            <Link
              to="/projetos"
              className="block text-lg text-branco hover:text-amarelo-suave transition-colors duration-300"
            >
              Projetos
            </Link>
            <Link
              to="/contato"
              className="block text-lg text-branco hover:text-amarelo-suave transition-colors duration-300"
            >
              Contato
            </Link>
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
