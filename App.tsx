
import React, { useState } from 'react';
import { Logo } from './components/Logo';
import { Section } from './components/Section';
import { AppPreview } from './components/AppPreview';
import { 
  ArrowRight, 
  CheckCircle2, 
  Info, 
  Mail,
  User,
  Sparkles
} from 'lucide-react';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    status: 'pregnant' // 'pregnant', 'partner', 'parent', 'other'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email) {
      setSubmitted(true);
      setFormData({ firstName: '', email: '', status: 'pregnant' });
    }
  };

  const steps = [
    {
      num: "01",
      emoji: "🧭",
      title: "Définir sa boussole",
      description: "Tu choisis tes valeurs : éco, petit budget, made in France, scientifique… Parenta filtre le bruit en conséquence."
    },
    {
      num: "02",
      emoji: "🔍",
      title: "Questionner librement",
      description: "Tape une question en langage naturel. L'IA identifie les ressources qui correspondent — sans décider à ta place."
    },
    {
      num: "03",
      emoji: "🗺",
      title: "Explorer le paysage",
      description: "9 territoires thématiques pour naviguer : Corps, Médical, Accouchement, Émotions, Matériel, et plus encore."
    },
    {
      num: "04",
      emoji: "👫",
      title: "Partager à deux",
      description: "Sauvegarde, partage et retrouve tes contenus avec ton·ta partenaire. Parenta vous envoie des rappels pour ne rien oublier."
    }
  ];

  const territories = [
    { label: 'Mon Corps', icon: '💖', sub: 'Ce qui se passe en toi' },
    { label: 'Suivi Médical', icon: '🩺', sub: 'Naviguer le parcours' },
    { label: 'Accouchement', icon: '🌸', sub: 'Ouvrir les possibles' },
    { label: 'Administratif', icon: '📋', sub: 'Libérer l’esprit' },
    { label: 'Matériel', icon: '🛒', sub: 'Choisir l’essentiel' },
    { label: 'Vie Émotionnelle', icon: '💛', sub: 'Accueillir le tumulte' },
    { label: 'Bébé', icon: '👶', sub: 'Rencontrer l’inconnu' },
    { label: 'Couple', icon: '👫', sub: 'Co-construire à deux' },
    { label: 'Vie Pro', icon: '💼', sub: 'Réinventer l’équilibre' },
  ];

  return (
    <div className="min-h-screen selection:bg-pink-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Logo className="h-8" />
          <div className="hidden md:flex gap-10 text-[10px] font-bold uppercase tracking-[0.2em] items-center text-[#161B30]">
            <a href="#beta" className="bg-[#161B30] text-white px-8 py-3.5 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300">
              Rejoindre la bêta
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Aligned and Powerful */}
      <header className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-6 overflow-hidden min-h-[90vh] flex items-center">
        {/* Decorative elements */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-200/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-[150px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center h-full">
          <div className="space-y-12 relative z-10">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#161B30]/5 border border-[#161B30]/10 text-[#161B30] text-[10px] font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-orange-500" /> 
                Bêta ouverte aux futurs parents
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-['Fraunces'] font-normal leading-[1] text-[#161B30] tracking-tight text-balance">
                La boussole des parents pour <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#C85A1A] to-pink-500">choisir en conscience.</span>
              </h1>
            </div>
            
            <div className="space-y-8 max-w-xl">
              <p className="text-xl md:text-2xl text-[#161B30]/70 font-serif leading-relaxed text-balance">
                Quand on devient parent, on entre dans un monde immense et rarement expliqué. Parenta vous aide à naviguer dans ce paysage.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <a 
                href="#beta" 
                className="w-full sm:w-auto bg-[#161B30] text-white px-12 py-6 rounded-full text-xl font-bold hover:translate-y-[-4px] transition-all duration-300 shadow-xl flex items-center justify-center gap-4"
              >
                Rejoindre la bêta <ArrowRight className="w-6 h-6" />
              </a>
              <div className="flex flex-col border-l border-[#161B30]/10 pl-8">
                <p className="text-xs font-bold text-[#161B30] uppercase tracking-[0.2em]">Accès gratuit</p>
                <p className="text-xs text-[#161B30]/40">Places limitées pour la bêta</p>
              </div>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            {/* Main Visual Container - Perfectly Aligned */}
            <div className="relative w-full max-w-lg aspect-[4/4] bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(22,27,48,0.12)] border border-white/60 p-16 flex items-center justify-center group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-br from-[#FBF8F4] to-transparent opacity-50"></div>
               <Logo hideText className="w-full max-w-[280px] drop-shadow-2xl animate-float" />
            </div>

            {/* Subtle path decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] border border-[#161B30]/5 rounded-full -z-10 animate-spin-slow"></div>
          </div>
        </div>
      </header>

      {/* Section Problème */}
      <Section id="propose" className="bg-[#161B30] text-white rounded-[5rem] mx-4 md:mx-10 mb-24 scroll-mt-24">
        <div className="max-w-5xl mx-auto space-y-24 py-12">
          <div className="space-y-8 text-center">
            <span className="text-pink-300 text-xs font-bold uppercase tracking-[0.5em]">Le constat</span>
            <h2 className="text-5xl md:text-8xl font-serif text-white leading-tight">Le problème n’est pas le manque d’informations.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-20 text-2xl font-light leading-relaxed text-white/70">
            <p>
              Pendant la grossesse, les réponses sont partout : articles, podcasts, IA, proches, réseaux sociaux.
            </p>
            <p className="text-white italic border-l-2 border-white/10 pl-10">
              Mais personne ne montre le paysage global. Résultat : on découvre les options trop tard ou on choisit sous pression.
            </p>
          </div>
        </div>
      </Section>

      {/* Section "Comment ça marche" */}
      <Section id="methode" className="py-32 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center mb-32 space-y-8">
          <div className="space-y-4">
            <span className="text-[#C85A1A] text-[10px] font-bold uppercase tracking-[0.4em]">Comment ça marche</span>
            <h2 className="text-6xl md:text-8xl font-['Fraunces'] font-normal text-[#161B30] leading-none">Une nouvelle façon <br/> d'explorer.</h2>
          </div>
          <p className="text-xl text-[#161B30]/50 font-light max-w-2xl mx-auto leading-relaxed">
            Quatre étapes pour passer du bruit de l'information à la clarté de la décision.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative p-10 rounded-[3rem] bg-white border border-[#161B30]/5 shadow-sm space-y-8 group hover:-translate-y-2 transition-all duration-500">
              <div className="flex justify-between items-start">
                <span className="text-4xl font-serif italic text-[#161B30]/10 font-bold tracking-tighter group-hover:text-[#C85A1A]/20 transition-colors">{step.num}</span>
                <div className="w-14 h-14 rounded-2xl bg-[#FBF8F4] flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {step.emoji}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-['Fraunces'] text-[#161B30]">{step.title}</h3>
                <p className="text-sm text-[#161B30]/50 leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Territoires Section - Compact */}
      <Section className="bg-[#FBF8F4] py-20 md:py-24 rounded-[4rem] mx-4 md:mx-10 mb-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#F5E6D8]/50 text-[#C85A1A] text-[9px] font-bold uppercase tracking-[0.2em] border border-[#F5E6D8]">
              <div className="w-1 h-1 rounded-full bg-[#C85A1A]"></div>
              Exploration Interactive
            </div>
            <h2 className="text-4xl md:text-6xl font-['Fraunces'] font-normal text-[#161B30] leading-tight tracking-tight">
              Explore les <span className="italic text-[#C85A1A]">territoires</span> <br className="hidden md:block"/> de la parentalité
            </h2>
            <p className="text-lg text-[#161B30]/40 font-light max-w-xl mx-auto leading-relaxed">
              9 espaces thématiques pour trouver les ressources qui te ressemblent.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {territories.map((t, i) => (
              <div 
                key={i} 
                className="group bg-white rounded-[1.5rem] p-6 text-left border border-transparent transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-[#C85A1A]/10"
              >
                <div className="w-8 h-8 bg-[#FBF8F4] rounded-lg flex items-center justify-center text-lg mb-4 shadow-[inset_0_1px_4px_rgba(0,0,0,0.02)] transition-transform duration-500 group-hover:rotate-12">
                  {t.icon}
                </div>
                <h3 className="text-lg font-['Fraunces'] text-[#161B30] mb-0.5 leading-tight">{t.label}</h3>
                <p className="text-[10px] text-[#161B30]/40 font-medium">{t.sub}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#beta" className="px-10 py-5 bg-[#161B30] text-white rounded-full font-bold text-base transition-all hover:translate-y-[-4px] hover:shadow-xl">
              Rejoindre la bêta
            </a>
          </div>
        </div>
      </Section>

      {/* App Preview Section */}
      <Section className="py-12 bg-white/40 border-y border-white">
        <div className="text-center mb-12">
          <span className="text-[#161B30]/30 text-xs font-bold uppercase tracking-widest">Aperçu de l'expérience</span>
        </div>
        <AppPreview />
      </Section>

      {/* CTA Section */}
      <Section id="beta" className="py-48 scroll-mt-24">
        <div className="max-w-5xl mx-auto bg-white p-12 md:p-24 rounded-[5rem] shadow-[0_64px_128px_-32px_rgba(22,27,48,0.1)] border border-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-40"></div>
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <span className="text-orange-600 text-xs font-bold uppercase tracking-widest">Rejoindre la bêta Parenta</span>
                <h2 className="text-5xl md:text-7xl font-serif text-[#161B30] leading-tight">Entrer dans la parentalité autrement.</h2>
              </div>
              <div className="space-y-6 text-xl text-[#161B30]/60 font-light leading-relaxed">
                <p>
                  Nous lançons une première version centrée sur la grossesse.
                </p>
                <p>
                  Les bêta-testeurs participent à la construction d’un nouvel espace de clarification, sans injonction.
                </p>
              </div>
              <div className="flex items-center gap-3 p-4 bg-[#161B30]/5 rounded-2xl border border-[#161B30]/5">
                <Info className="w-5 h-5 text-[#161B30]/30" />
                <p className="text-sm text-[#161B30]/40 font-medium italic">Accès gratuit — Places limitées pour cette première version.</p>
              </div>
            </div>

            <div className="bg-slate-50/50 p-8 md:p-12 rounded-[3rem] border border-white shadow-[0_8px_32px_rgba(0,0,0,0.02)]">
              {!submitted ? (
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#161B30]/40 ml-4">Prénom</label>
                    <div className="relative">
                      <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#161B30]/20" />
                      <input 
                        type="text" 
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        placeholder="Ex: Léa"
                        className="w-full pl-14 pr-6 py-5 rounded-full border-2 border-white focus:border-[#161B30] focus:outline-none transition-all text-lg font-medium shadow-sm bg-white text-[#161B30]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#161B30]/40 ml-4">Email</label>
                    <div className="relative">
                      <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#161B30]/20" />
                      <input 
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="lea@exemple.com"
                        className="w-full pl-14 pr-6 py-5 rounded-full border-2 border-white focus:border-[#161B30] focus:outline-none transition-all text-lg font-medium shadow-sm bg-white text-[#161B30]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[#161B30]/40 ml-4">Ta situation</label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'pregnant', label: 'Enceinte' },
                        { id: 'partner', label: 'Co-parent' },
                        { id: 'parent', label: 'Déjà parent' },
                        { id: 'other', label: 'Autre' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFormData({...formData, status: opt.id})}
                          className={`py-4 rounded-3xl border-2 transition-all text-sm font-bold ${formData.status === opt.id ? 'bg-[#161B30] text-white border-[#161B30] shadow-md' : 'bg-white border-white text-[#161B30]/40 hover:border-[#161B30]/10'}`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#161B30] text-white py-6 rounded-full text-xl font-bold hover:shadow-[0_20px_40px_rgba(22,27,48,0.3)] hover:-translate-y-1 transition-all active:scale-[0.98] mt-4"
                  >
                    S'inscrire à la bêta
                  </button>
                </form>
              ) : (
                <div className="py-20 text-center space-y-8 animate-in zoom-in duration-700">
                  <div className="w-24 h-24 bg-[#161B30] text-white rounded-full flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-serif text-[#161B30]">Merci, {formData.firstName || 'futur parent'}.</h3>
                    <p className="text-[#161B30]/50 text-xl font-light">Ton invitation à la bêta arrivera bientôt par email.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-48 px-6 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <p className="text-[12rem] md:text-[20rem] font-serif italic text-[#161B30] opacity-[0.03] select-none leading-none">Parenta.</p>
            <p className="text-4xl md:text-6xl text-[#161B30] font-serif italic">Choisir en conscience.</p>
          </div>
          <div className="pt-24 flex flex-col md:flex-row justify-between w-full text-[10px] font-bold uppercase tracking-[0.4em] text-[#161B30]/30 gap-12 border-t border-navy/5 pt-16">
            <div className="flex gap-16 justify-center md:justify-start">
              <span>© 2026 Parenta</span>
              <a href="#" className="hover:text-[#161B30] transition-colors">Mentions légales</a>
            </div>
            
            <div className="flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
              <span className="text-navy/20 font-medium">Made with love 🇫🇷</span>
            </div>

            <div className="flex gap-16 justify-center md:justify-end">
              <a href="https://www.instagram.com/parenta.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#161B30] transition-colors">Instagram</a>
              <a href="#beta" className="hover:text-[#161B30] transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Styles for custom animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
