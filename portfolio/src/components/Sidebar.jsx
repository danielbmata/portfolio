"use client"

import { Home, Wrench, Contact, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  // Fecha o menu quando mudar de página em telas pequenas
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Previne scroll quando menu mobile está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const NavLink = ({ href, icon: Icon, children }) => (
    <Link
      href={href}
      className={`flex items-center gap-3 text-sm font-semibold transition-colors duration-200 ${
        pathname === href ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </Link>
  );

  return (
    <>
      {/* Botão do menu mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 right-4 z-50 p-2 bg-zinc-800 rounded-md"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay para quando o menu mobile estiver aberto */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-40
          w-64 bg-zinc-950 p-6
          transform transition-transform duration-300 ease-in-out
          lg:transform-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <nav className="space-y-5">
          <NavLink href="/inicio" icon={Home}>
            Inicio
          </NavLink>
          <NavLink href="/ferramentas" icon={Wrench}>
            Ferramentas
          </NavLink>
          <NavLink href="/contato" icon={Contact}>
            Contato
          </NavLink>
        </nav>
      </aside>
    </>
  );
}
