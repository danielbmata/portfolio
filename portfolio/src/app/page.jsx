
import { Home, Wrench, Contact } from 'lucide-react';


export default function Inicio() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">

        <aside className="w-64 bg-zinc-950 p-6">
          <nav className='space-y-5'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-100 '>
              <Home />
              Inicio
              </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-100'>
              <Wrench />
              Ferramentas
              </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-100'>
              <Contact />
              Contato
              </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          main
        </main>

      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
