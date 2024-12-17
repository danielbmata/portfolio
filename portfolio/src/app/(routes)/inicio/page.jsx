export default function Inicio() {
  return (
    <div className="animate-fadeIn">
      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-8">
        Sobre mim
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Paragrafo sobre mim com uma descrição mais detalhada e profissional.
              Aqui você pode falar sobre sua experiência, objetivos e paixões na área
              de desenvolvimento. O texto deve ser envolvente e demonstrar suas
              habilidades e personalidade.
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300 mt-4">
              Você também pode adicionar mais parágrafos falando sobre seus projetos
              principais, conquistas e áreas de interesse. Isso ajuda os visitantes
              a terem uma ideia melhor sobre seu perfil profissional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 