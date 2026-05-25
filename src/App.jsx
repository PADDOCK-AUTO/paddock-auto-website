import React from 'react';

export default function App() {
  return (
    <div className="bg-slate-50 text-gray-900 font-sans overflow-x-hidden">

      {/* L'ENTÊTE */}
      <nav className="px-4 py-3 md:p-6 flex justify-between items-center max-w-6xl mx-auto w-full border-b border-gray-200">
        <div className="w-32 md:w-64">
          <img
            src="/paddock_baniere_15.png"
            alt="Paddock Logo"
            className="w-full h-auto object-contain"
          />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-5 py-6 md:py-20 flex flex-col md:flex-row items-center gap-6 md:gap-12">

        {/* TEXTE */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left w-full">

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
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start items-center md:items-start">
              {/* App Store Button */}
              <div className="flex items-center gap-3 md:gap-4 bg-white p-2.5 md:p-4 rounded-2xl w-full max-w-[260px] md:w-fit border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer">
                <img
                  src="/logo_premium.png"
                  alt="Paddock App Icon"
                  className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-contain bg-white border border-gray-100 shadow-sm flex-shrink-0"
                />
                <div className="flex flex-col text-left">
                  <span className="text-sm md:text-lg font-bold text-gray-900">Paddock</span>
                  <span className="text-[10px] md:text-xs text-orange-500 font-mono font-semibold">Bientôt sur l'App Store</span>
                </div>
              </div>

              {/* Pre-inscription Button */}
              <a
                href="https://05a8e8be.sibforms.com/serve/MUIFALYtz79yfJ19PscGLo4xAoKLvrD3AhpLvP3WXqyPu-IQDCj4ZcAYaJ6AawdprvPbxGtafAcD1ogDFAs0ZfqlSViTOH3x2b1bIS-nS6AmJzUhe8Zq1qb2G5cRgzTl8edrPMIzz2-3yysfb-frvy3XrqVS5WVnlvPWdJ89-nbfdbL6TnO3R_hFIlUlNL-wFSNpgAaQ-shy1i3Q0g=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 md:gap-4 bg-orange-50 p-2.5 md:p-4 rounded-2xl w-full max-w-[260px] md:w-fit border border-orange-300 hover:bg-orange-500 hover:border-orange-500 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-orange-100 group-hover:bg-orange-400 border border-orange-200 group-hover:border-orange-300 flex items-center justify-center shadow-inner flex-shrink-0 transition-all">
                  <span className="text-xl md:text-2xl">✉️</span>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-sm md:text-lg font-bold text-orange-600 group-hover:text-white transition-colors">BETA TEST Pré-inscription</span>
                  <span className="text-[10px] md:text-xs text-orange-400 group-hover:text-orange-100 font-mono font-semibold transition-colors">Soyez les premiers informés</span>
                </div>
              </a>
            </div>
            
          </div>

        </div>

        {/* IPHONE MOCKUP — plus petit sur mobile */}
        <div className="relative w-48 h-[390px] sm:w-56 sm:h-[450px] md:w-72 md:h-[580px] mx-auto md:mx-0 bg-black rounded-[2rem] md:rounded-[3rem] border-[5px] md:border-[8px] border-gray-800 shadow-2xl shadow-gray-300 overflow-hidden flex-shrink-0 z-10">
          <div className="absolute top-0 w-full h-5 md:h-8 bg-gray-800 rounded-b-2xl z-20"></div>
          <video src="/video_presentation.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[1.5rem] md:rounded-[2.5rem] pt-1 md:pt-2" />
        </div>

      </section>

      {/* FOOTER SECTION */}
      <footer className="bg-gray-900 text-white py-6 md:py-8 mt-10 border-t-[6px] border-orange-500">
        <div className="max-w-6xl mx-auto px-5">
          
          {/* SOCIAL MEDIA */}
          <div className="flex flex-col items-center md:items-start gap-4 mb-6 border-b border-gray-800 pb-6">
            <h3 className="text-[10px] md:text-xs font-mono text-orange-500 tracking-widest uppercase font-bold">SUIVEZ-NOUS</h3>
            <div className="flex justify-center md:justify-start gap-6 md:gap-10 items-center">
              
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/paddock_auto/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gray-800 group-hover:bg-gray-700 transition-all shadow-lg border border-gray-700 group-hover:border-pink-500 p-2">
                  <img src="/instagram.png" alt="Instagram" className="w-full h-full object-contain" />
                </div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">Instagram</span>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/paddockauto" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gray-800 group-hover:bg-gray-700 transition-all shadow-lg border border-gray-700 group-hover:border-blue-500 p-2">
                  <img src="/linkedin.png" alt="LinkedIn" className="w-full h-full object-contain" />
                </div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">LinkedIn</span>
              </a>

              {/* Facebook */}
              <a 
                href="https://www.facebook.com/profile.php?id=61563645310902" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex flex-col items-center gap-2 transition-transform hover:scale-110"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl bg-gray-800 group-hover:bg-gray-700 transition-all shadow-lg border border-gray-700 group-hover:border-indigo-500 p-2">
                  <img src="/facebook.png" alt="Facebook" className="w-full h-full object-contain" />
                </div>
                <span className="text-[9px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-white transition-colors">Facebook</span>
              </a>

            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-10">

            {/* Bloc Email */}
            <div className="text-center md:text-left flex-shrink-0">
              <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase tracking-tight">Contactez-nous</h4>
              <a
                href="mailto:contact@paddock-auto.fr"
                className="inline-block bg-gray-800 hover:bg-orange-500 text-orange-500 hover:text-white px-4 md:px-5 py-2 md:py-3 rounded-xl font-mono text-xs md:text-sm font-bold transition-all border border-gray-700 hover:border-orange-500 shadow-lg"
              >
                contact@paddock-auto.fr
              </a>
            </div>

            {/* Bloc Les Dirigeants */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-6 text-center md:text-left w-full md:w-auto">
              <div className="space-y-1 bg-gray-800/50 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-gray-800 flex-1 md:flex-none">
                <p className="font-bold text-sm md:text-base">Mr Pontvianne Willy</p>
                <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-widest font-semibold leading-relaxed">
                  Co-Dirigeant<br />Responsable Développement
                </p>
              </div>
              <div className="space-y-1 bg-gray-800/50 px-4 py-3 md:px-5 md:py-4 rounded-xl border border-gray-800 flex-1 md:flex-none">
                <p className="font-bold text-sm md:text-base">Mr Cucchi Jean-Charles</p>
                <p className="text-gray-400 text-[9px] md:text-xs uppercase tracking-widest font-semibold leading-relaxed">
                  Co-Dirigeant<br />Responsable Opérationnel
                </p>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}