import Image from 'next/image';

export default function Inicio() {
  return (
    <div className="animate-fadeIn">
      <div className="flex flex-col items-center mb-8">
        <div className="relative w-48 h-48 mb-6">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
          <Image
            src="/profile.jpg"
            alt="Foto de perfil"
            width={192}
            height={192}
            className="rounded-full object-cover border-4 border-zinc-800 relative z-10"
            priority
          />
        </div>
        <h1 className="font-bold text-3xl sm:text-4xl text-center">
          Sobre mim
        </h1>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl shadow-lg p-6 sm:p-8">
          <div className="prose prose-invert prose-zinc max-w-none">
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300">
              Paragrafo sobre mim...
            </p>
            
            <p className="text-base sm:text-lg leading-relaxed text-zinc-300 mt-4">
              Paragrafo sobre mim...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 