
import React, { useState } from 'react';
import { Logo } from './Logo';

const TERRITORIES = {
  corps: { emoji: '🫀', name: 'Mon corps', sub: 'Ce qui se passe', formats: ['Articles', 'Podcasts', 'Vidéos'], specific: ['Symptômes', 'Trimestre 1', 'Kiné'] },
  medical: { emoji: '🩺', name: 'Suivi médical', sub: 'Le parcours de soin', formats: ['Articles', 'Professionnels'], specific: ['Écho', 'Prise de sang', 'Sage-femme'] },
  admin: { emoji: '📋', name: 'Administratif', sub: "Ce qu'il faut faire", formats: ['Sites officiels', 'Outils'], specific: ['CAF', 'Congé mat.', 'Déclaration'] },
  emotions: { emoji: '💛', name: 'Émotions', sub: "Ce qu'on ressent", formats: ['Podcasts', 'Livres', 'Professionnels'], specific: ['Baby blues', 'Anxiété', 'Confiance'] },
  accouchement: { emoji: '🌸', name: 'Accouchement', sub: 'Où et comment', formats: ['Podcasts', 'Articles', 'Livres'], specific: ['Sans péri', 'Maternité', 'Plan de naissance'] },
  materiel: { emoji: '🛒', name: 'Matériel', sub: "Préparer l'arrivée", formats: ['Marques', 'Comparatifs'], specific: ['Poussette', 'Chambre', 'Couches'] },
  bebe: { emoji: '👶', name: 'Bébé', sub: "L'arrivée", formats: ['Articles', 'Vidéos'], specific: ['Sommeil', 'Allaitement', 'Soins'] },
  travail: { emoji: '💼', name: 'Travail', sub: 'La vie pro', formats: ['Podcasts', 'Outils'], specific: ['Retour emploi', 'Freelance', 'Négociation'] },
  couple: { emoji: '👫', name: 'Couple', sub: 'La parentalité à 2', formats: ['Podcasts', 'Articles'], specific: ['Charge mentale', 'Sexualité', 'Communication'] },
};

const CARDS = [
  { emoji: '🎙', bg: 'bg-orange-50', type: 'Podcast', title: 'Accoucher sans péridurale : les vraies questions', tag: 'Témoignage', dur: '42 min' },
  { emoji: '📖', bg: 'bg-blue-50', type: 'Livre', title: "Le guide de l'accouchement naturel", tag: '🌿 Éco', dur: 'Ed. Marabout' },
  { emoji: '🎙', bg: 'bg-green-50', type: 'Podcast', title: 'Mon plan de naissance : comment le rédiger ?', tag: 'Pratique', dur: '28 min' },
];

export const AppPreview: React.FC = () => {
  const [view, setView] = useState<'desktop' | 'mobile'>('desktop');
  const [activeTerritory, setActiveTerritory] = useState<keyof typeof TERRITORIES>('accouchement');
  const [searchFocused, setSearchFocused] = useState(false);

  const territory = TERRITORIES[activeTerritory];

  return (
    <div className="w-full flex flex-col items-center gap-8 py-12">
      {/* Toggle View */}
      <div className="flex bg-navy/5 p-1 rounded-full border border-navy/10">
        <button 
          onClick={() => setView('desktop')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${view === 'desktop' ? 'bg-white shadow-sm text-navy' : 'text-navy/40'}`}
        >
          🖥 Desktop
        </button>
        <button 
          onClick={() => setView('mobile')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${view === 'mobile' ? 'bg-white shadow-sm text-navy' : 'text-navy/40'}`}
        >
          📱 Mobile
        </button>
      </div>

      {/* Frame Container */}
      <div className={`relative transition-all duration-500 ease-in-out ${view === 'desktop' ? 'w-full max-w-5xl h-[600px]' : 'w-full max-w-[375px] h-[667px]'} bg-[#F7F4F0] rounded-[2.5rem] overflow-hidden shadow-2xl border border-navy/5 flex`}>
        
        {view === 'desktop' ? (
          <>
            {/* Desktop Rail */}
            <aside className="w-64 bg-white border-r border-navy/5 flex flex-col h-full shrink-0">
              <div className="p-6 border-b border-navy/5">
                <Logo className="h-7" />
              </div>
              
              <div className="p-4 border-b border-navy/5 space-y-3">
                <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-navy/30">
                  🧭 Ma boussole
                  <button className="text-orange-600">Modifier</button>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <div className="px-2 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-[10px] font-bold">🏡 Indépendant</div>
                  <div className="px-2 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-[10px] font-bold">💛 Budget</div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-3 space-y-1">
                <div className="text-[10px] font-bold uppercase tracking-widest text-navy/30 px-3 py-2">Territoires</div>
                {(Object.entries(TERRITORIES) as [keyof typeof TERRITORIES, any][]).map(([id, t]) => (
                  <button 
                    key={id}
                    onClick={() => setActiveTerritory(id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl transition-all ${activeTerritory === id ? 'bg-orange-50 text-orange-600' : 'text-navy/60 hover:bg-navy/5'}`}
                  >
                    <span className="text-lg">{t.emoji}</span>
                    <div className="text-left">
                      <div className={`text-xs font-bold ${activeTerritory === id ? 'text-orange-600' : 'text-navy'}`}>{t.name}</div>
                      <div className="text-[9px] opacity-60">{t.sub}</div>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* Desktop Main Content */}
            <main className="flex-1 flex flex-col h-full overflow-hidden bg-[#F7F4F0]">
              <header className="h-16 bg-white border-b border-navy/5 flex items-center px-6 gap-4">
                <div className="relative flex-1">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/20">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Quelle poussette pour petit budget ?"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                    className="w-full h-10 bg-[#F0EDE8] rounded-full pl-10 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-orange-600/20"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-50 text-green-700 text-[9px] font-bold px-2 py-1 rounded-full uppercase">✦ IA</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-[#F0EDE8] rounded-full flex items-center justify-center text-sm">🔔</div>
                  <div className="w-8 h-8 bg-[#F0EDE8] rounded-full flex items-center justify-center text-sm">📚</div>
                </div>
              </header>

              <div className="flex-1 overflow-y-auto p-8 font-['Instrument_Sans']">
                <div className="mb-8">
                  <h2 className="text-2xl font-['Fraunces'] text-navy flex items-center gap-3">
                    {territory.emoji} {territory.name} — <em className="text-orange-600 opacity-60 font-light">Où et comment</em>
                  </h2>
                  <p className="text-xs text-navy/40 mt-1">34 contenus · filtrés selon ta boussole</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-navy/30 self-center">Format</span>
                  {territory.formats.map((f, i) => (
                    <span key={f} className={`px-4 py-1.5 rounded-full text-xs ${i === 0 ? 'bg-navy text-white' : 'bg-white border border-navy/10 text-navy'}`}>{f}</span>
                  ))}
                  <div className="w-px h-6 bg-navy/10 mx-2"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-navy/30 self-center">Spécifique</span>
                  {territory.specific.map((s, i) => (
                    <span key={s} className={`px-4 py-1.5 rounded-full text-xs ${i === 0 ? 'bg-orange-50 text-orange-600 border border-orange-100' : 'bg-white border border-navy/10 text-navy'}`}>{s}</span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {CARDS.map((card, i) => (
                    <div key={i} className="bg-white rounded-2xl overflow-hidden border border-navy/5 shadow-sm hover:-translate-y-1 transition-all cursor-pointer">
                      <div className={`h-24 ${card.bg} flex items-center justify-center text-3xl relative`}>
                        {card.emoji}
                        <span className="absolute top-2 left-2 bg-white/80 text-[8px] font-bold px-2 py-1 rounded-full uppercase text-navy/50">{card.type}</span>
                      </div>
                      <div className="p-4 space-y-2">
                        <div className="text-xs font-bold leading-tight">{card.title}</div>
                        <div className="flex justify-between items-center">
                          <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${card.tag.includes('🌿') ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-600'}`}>{card.tag}</span>
                          <span className="text-[9px] text-navy/40">{card.dur}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          </>
        ) : (
          /* Mobile View */
          <div className="flex flex-col w-full h-full bg-[#F7F4F0]">
            <header className="bg-white p-4 border-b border-navy/5 space-y-3 shrink-0">
              <div className="flex justify-between items-center">
                <Logo className="h-6" />
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-[#F0EDE8] rounded-full flex items-center justify-center text-xs">🔔</div>
                  <div className="w-8 h-8 bg-gradient-to-tr from-pink-200 to-blue-200 rounded-full flex items-center justify-center text-[10px] font-bold text-white shadow-sm">L</div>
                </div>
              </div>
              <div className="flex overflow-x-auto gap-2 scrollbar-hide">
                <span className="text-lg">🧭</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-[9px] font-bold whitespace-nowrap">🏡 Indépendant</span>
                <span className="px-3 py-1 bg-orange-50 text-orange-600 border border-orange-100 rounded-full text-[9px] font-bold whitespace-nowrap">💛 Budget</span>
              </div>
            </header>

            <div className="p-4 pb-0 shrink-0">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/20">🔍</span>
                <input 
                  type="text" 
                  placeholder="Que cherches-tu ?"
                  className="w-full h-11 bg-white border border-navy/10 rounded-full pl-10 text-sm shadow-sm"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 bg-green-50 text-green-700 text-[9px] font-bold px-2 py-1 rounded-full uppercase">✦ IA</span>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              <div>
                <h2 className="text-xl font-['Fraunces'] text-navy">Bonne nuit, <em className="text-orange-600 font-light">toi</em> 🌙</h2>
                <p className="text-[10px] text-navy/40">Des pépites t'attendent · 12 nouveautés</p>
              </div>

              <div className="space-y-3">
                <div className="text-[9px] font-bold uppercase tracking-widest text-navy/30">Territoires</div>
                <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide">
                  {(Object.entries(TERRITORIES) as [keyof typeof TERRITORIES, any][]).map(([id, t]) => (
                    <button 
                      key={id}
                      onClick={() => setActiveTerritory(id)}
                      className={`flex items-center gap-2 px-4 py-2 bg-white border rounded-2xl whitespace-nowrap shadow-sm transition-all ${activeTerritory === id ? 'border-orange-600 bg-orange-50' : 'border-navy/5'}`}
                    >
                      <span>{t.emoji}</span>
                      <span className={`text-[11px] font-bold ${activeTerritory === id ? 'text-orange-600' : 'text-navy'}`}>{t.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] font-bold font-['Fraunces']">Résultats <span className="text-navy/20 ml-1">· 34 contenus</span></span>
                </div>
                <div className="space-y-3">
                  {CARDS.map((card, i) => (
                    <div key={i} className="bg-white p-3 rounded-2xl border border-navy/5 shadow-sm flex gap-3">
                      <div className={`w-16 h-16 shrink-0 rounded-xl ${card.bg} flex items-center justify-center text-xl`}>{card.emoji}</div>
                      <div className="flex-1 min-w-0 py-1">
                        <div className="text-[8px] font-bold text-navy/30 uppercase tracking-widest mb-1">{card.type}</div>
                        <div className="text-[11px] font-bold text-navy leading-tight truncate">{card.title}</div>
                        <div className="flex justify-between items-center mt-2">
                          <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${card.tag.includes('🌿') ? 'bg-green-50 text-green-700' : 'bg-orange-50 text-orange-600'}`}>{card.tag}</span>
                          <span className="text-[8px] text-navy/30">{card.dur}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <nav className="h-16 bg-white border-t border-navy/5 flex items-center justify-around shrink-0 px-4">
              <div className="flex flex-col items-center text-orange-600 gap-1">
                <span className="text-lg">🔍</span>
                <span className="text-[8px] font-bold uppercase">Découvrir</span>
              </div>
              <div className="flex flex-col items-center text-navy/30 gap-1">
                <span className="text-lg">📚</span>
                <span className="text-[8px] font-bold uppercase">Playlists</span>
              </div>
              <div className="flex flex-col items-center text-navy/30 gap-1">
                <span className="text-lg">👥</span>
                <span className="text-[8px] font-bold uppercase">Partage</span>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};
