import React, { useState, useEffect } from 'react';
import { LEGAL_CONTENT } from './constants/legalContent';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  const legalTabs = [
    { id: 'mentions_legales', label: 'Mentions Légales' },
    { id: 'confidentialite', label: 'Confidentialité' },
    { id: 'cgu', label: 'CGU' },
    { id: 'cgv', label: 'CGV' }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentRoute(window.location.hash);
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const getLegalKeyFromRoute = (route) => {
    switch (route) {
      case '#/mentions-legales':
        return 'mentions_legales';
      case '#/politique-de-confidentialite':
        return 'confidentialite';
      case '#/cgu':
        return 'cgu';
      case '#/cgv':
        return 'cgv';
      default:
        return null;
    }
  };

  const activeLegalKey = getLegalKeyFromRoute(currentRoute);


  return (
    <div className="bg-slate-50 text-gray-900 font-sans overflow-x-hidden min-h-screen flex flex-col justify-between">
      <div>
        {/* L'ENTÊTE */}
        <nav className="px-4 py-3 md:p-6 flex justify-between items-center max-w-6xl mx-auto w-full border-b border-gray-200">
          <div className="w-32 md:w-64">
            <a href="#/">
              <img
                src="/paddock_baniere_15.png"
                alt="Paddock Logo"
                className="w-full h-auto object-contain cursor-pointer"
              />
            </a>
          </div>
        </nav>

        {activeLegalKey ? (
          /* SECTION PAGE DÉDIÉE LÉGALE */
          <main className="max-w-4xl mx-auto px-5 py-8 md:py-16">
            {/* Fil d'ariane & Bouton retour */}
            <div className="mb-8 md:mb-12">
              <a 
                href="#/" 
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-orange-500 transition-colors"
              >
                ← Retour à l'accueil
              </a>
            </div>

            {/* Titre principal */}
            <div className="border-b border-gray-200 pb-6 mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight flex items-center gap-3">
                <span className="w-2.5 h-10 bg-orange-500 rounded-full"></span>
                {LEGAL_CONTENT[activeLegalKey]?.title}
              </h1>
            </div>

            {/* Navigation par onglets (facultative mais premium) */}
            <div className="mb-10 bg-gray-100 p-1.5 rounded-2xl flex gap-1 overflow-x-auto">
              {legalTabs.map((tab) => {
                const tabHash = {
                  mentions_legales: '#/mentions-legales',
                  confidentialite: '#/politique-de-confidentialite',
                  cgu: '#/cgu',
                  cgv: '#/cgv'
                }[tab.id];
                return (
                  <a
                    key={tab.id}
                    href={tabHash}
                    className={`px-5 py-2.5 text-xs md:text-sm font-bold rounded-xl transition-all whitespace-nowrap text-center flex-1 ${
                      activeLegalKey === tab.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {tab.label}
                  </a>
                );
              })}
            </div>

            {/* Contenu textuel */}
            <div className="bg-white border border-gray-200 rounded-3xl p-6 md:p-10 shadow-sm space-y-10">
              {LEGAL_CONTENT[activeLegalKey]?.sections.map((section, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-wide border-l-4 border-orange-500 pl-4 text-left">
                    {section.heading}
                  </h2>
                  <div className="space-y-3 text-gray-600 text-sm md:text-base leading-relaxed text-left">
                    {section.items.map((item, itemIdx) => {
                      if (item.startsWith('• ')) {
                        return (
                          <div key={itemIdx} className="flex gap-2 pl-4">
                            <span className="text-orange-500">•</span>
                            <p>{item.substring(2)}</p>
                          </div>
                        );
                      }
                      if (item.match(/^\d+\./)) {
                        const match = item.match(/^(\d+\.)\s*(.*)/);
                        return (
                          <div key={itemIdx} className="flex gap-2 pl-4">
                            <span className="text-orange-500 font-bold">{match[1]}</span>
                            <p>{match[2]}</p>
                          </div>
                        );
                      }
                      return <p key={itemIdx}>{item}</p>;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </main>
        ) : (
          /* HERO SECTION DE L'ACCUEIL */
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
                
                <div className="flex justify-center md:justify-start items-center w-full">
                  {/* App Store Button */}
                  <a
                    href="https://apps.apple.com/fr/app/paddock-auto/id6761768150"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 md:gap-4 bg-white p-2.5 md:p-4 rounded-2xl w-full max-w-[260px] md:w-fit border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer"
                  >
                    <img
                      src="/logo_premium.png"
                      alt="Paddock App Icon"
                      className="w-12 h-12 md:w-16 md:h-16 rounded-xl object-contain bg-white border border-gray-100 shadow-sm flex-shrink-0"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-sm md:text-lg font-bold text-gray-900">Paddock</span>
                      <span className="text-[10px] md:text-xs text-green-600 font-mono font-semibold">Disponible maintenant sur l'App Store</span>
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
        )}
      </div>

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

            {/* Bloc Légal */}
            <div className="text-center md:text-left flex-shrink-0">
              <h4 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase tracking-tight">Informations Légales</h4>
              <div className="flex flex-col gap-2 font-mono text-xs md:text-sm font-bold">
                <a
                  href="#/mentions-legales"
                  className="text-center md:text-left text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Mentions Légales
                </a>
                <a
                  href="#/politique-de-confidentialite"
                  className="text-center md:text-left text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  Politique de Confidentialité
                </a>
                <a
                  href="#/cgu"
                  className="text-center md:text-left text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  CGU
                </a>
                <a
                  href="#/cgv"
                  className="text-center md:text-left text-gray-400 hover:text-orange-500 transition-colors cursor-pointer"
                >
                  CGV
                </a>
              </div>
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