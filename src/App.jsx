import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-gray-900 font-sans overflow-x-hidden">

      {/* L'ENTÊTE */}
      <nav className="px-4 py-3 md:p-6 flex justify-between items-center max-w-6xl mx-auto w-full border-b border-gray-200">
        <div className="w-32 md:w-64">
          <img
            src="/banner5.png"
            alt="Paddock Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-5 py-6 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-12 flex-1">

        {/* TEXTE */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left w-full">

          {/* TITRE */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            PILOTEZ VOTRE <span className="text-orange-500">ENTRETIEN.</span>
          </h2>

          {/* SOUS-TITRE */}
          <p className="text-gray-600 text-sm md:text-lg max-w-md mx-auto md:mx-0 leading-relaxed">
            La solution numérique qui transforme votre historique de maintenance en un véritable atout de revente. Complet, à jour, partout avec vous.
          </p>

          {/* ARGUMENTS CLÉS */}
          <div className="flex flex-col gap-2 md:gap-3 items-center md:items-start">
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-700 text-left">
              <span className="flex items-center justify-center min-w-[22px] w-[22px] h-[22px] rounded-full bg-blue-100 text-blue-600 text-xs">⚡</span>
              Ajout instantané via Plaque d'immatriculation
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-700 text-left">
              <span className="flex items-center justify-center min-w-[22px] w-[22px] h-[22px] rounded-full bg-green-100 text-green-600 text-xs">🔒</span>
              Données privées sécurisées en Local-First
            </div>
            <div className="flex items-center gap-3 text-xs md:text-sm font-bold text-gray-700 text-left">
              <span className="flex items-center justify-center min-w-[22px] w-[22px] h-[22px] rounded-full bg-orange-100 text-orange-600 text-xs">🤝</span>
              Transfert de l'historique au futur acheteur
            </div>
          </div>

          {/* TÉLÉCHARGEMENT IOS */}
          <div className="pt-4 md:pt-8 mt-2 md:mt-8 border-t border-gray-200 flex flex-col items-center md:items-start w-full">
            <p className="text-[10px] md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4 text-center md:text-left">Téléchargez votre app IOS</p>
            <div className="flex items-center gap-3 md:gap-4 bg-white p-2.5 md:p-4 rounded-2xl w-full max-w-[260px] md:w-fit border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <img
                src="/logo.png"
                alt="Paddock App Icon"
                className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-contain bg-white border border-gray-100 shadow-sm flex-shrink-0"
              />
              <div className="flex flex-col text-left">
                <span className="text-sm md:text-lg font-bold text-gray-900">Paddock</span>
                <span className="text-[10px] md:text-xs text-orange-500 font-mono font-semibold">Bientôt sur l'App Store</span>
              </div>
            </div>
          </div>

        </div>

        {/* IPHONE MOCKUP — plus petit sur mobile */}
        <div className="relative w-48 h-[390px] sm:w-56 sm:h-[450px] md:w-72 md:h-[580px] mx-auto md:mx-0 bg-black rounded-[2rem] md:rounded-[3rem] border-[5px] md:border-[8px] border-gray-800 shadow-2xl shadow-gray-300 overflow-hidden flex-shrink-0 z-10">
          <div className="absolute top-0 w-full h-5 md:h-8 bg-gray-800 rounded-b-2xl z-20"></div>
          <video src="/video_presentation.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem] pt-1 md:pt-2" />
        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gray-900 text-white py-10 md:py-16 mt-6 md:mt-12 border-t-[6px] border-orange-500">
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-12">

          {/* Bloc Email */}
          <div className="text-center md:text-left flex-shrink-0">
            <h4 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tight">Contactez-nous</h4>
            <a
              href="mailto:contact@paddock-auto.fr"
              className="inline-block bg-gray-800 hover:bg-orange-500 text-orange-400 hover:text-white px-4 md:px-6 py-3 md:py-4 rounded-xl font-mono text-xs md:text-base font-bold transition-all border border-gray-700 hover:border-orange-400 shadow-lg"
            >
              contact@paddock-auto.fr
            </a>
          </div>

          {/* Bloc Les Dirigeants */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-8 text-center md:text-left w-full md:w-auto">
            <div className="space-y-1 md:space-y-2 bg-gray-800/50 px-5 py-4 md:p-6 rounded-2xl border border-gray-800 flex-1 md:flex-none">
              <p className="font-bold text-base md:text-xl">Mr Pontvianne Willy</p>
              <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-widest font-semibold leading-relaxed">
                Co-Dirigeant<br />Responsable Développement
              </p>
            </div>
            <div className="space-y-1 md:space-y-2 bg-gray-800/50 px-5 py-4 md:p-6 rounded-2xl border border-gray-800 flex-1 md:flex-none">
              <p className="font-bold text-base md:text-xl">Mr Cucchi Jean-Charles</p>
              <p className="text-gray-400 text-[10px] md:text-sm uppercase tracking-widest font-semibold leading-relaxed">
                Co-Dirigeant<br />Responsable Opérationnel
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STACK TECH SECTION */}
      <section className="bg-white py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-5 text-center">
          <h3 className="text-[10px] md:text-sm font-mono text-orange-500 mb-6 md:mb-8 tracking-widest uppercase font-bold">Stack Technique</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-3xl font-bold text-gray-900">React Native</span>
              <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold mt-1">Core Engine</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-3xl font-bold text-gray-900">Expo</span>
              <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold mt-1">Ecosystem</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-3xl font-bold text-gray-900">SQLite</span>
              <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold mt-1">Local-First DB</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-3xl font-bold text-gray-900">Tailwind</span>
              <span className="text-[10px] uppercase tracking-tighter text-gray-500 font-bold mt-1">Styling</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}