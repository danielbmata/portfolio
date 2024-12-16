export default function Projetos() {
  return (
    <section id="projetos" className="bg-branco text-azul-escuro p-8">
      <h2 className="text-3xl font-bold mb-4">Meus Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-cinza-claro p-4 rounded shadow hover:bg-azul-medio hover:text-branco transition">
          <h3 className="text-xl font-bold">Projeto 1</h3>
          <p>Descrição breve do projeto.</p>
        </div>
        <div className="bg-cinza-claro p-4 rounded shadow hover:bg-azul-medio hover:text-branco transition">
          <h3 className="text-xl font-bold">Projeto 2</h3>
          <p>Descrição breve do projeto.</p>
        </div>
      </div>
    </section>
  );
}
