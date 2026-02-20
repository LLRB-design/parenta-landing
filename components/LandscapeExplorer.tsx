
import React, { useState } from 'react';
import { exploreLandscape } from '../services/geminiService';
import { Loader2, Sparkles } from 'lucide-react';

export const LandscapeExplorer: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleExplore = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setLoading(true);
    try {
      const data = await exploreLandscape(query);
      setResult(data);
    } catch (err) {
      alert("Une erreur est survenue lors de l'exploration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/50 border border-slate-200 rounded-2xl p-8 mt-12 shadow-sm">
      <div className="flex items-center gap-2 mb-4 text-slate-500 text-sm uppercase tracking-widest font-medium">
        <Sparkles className="w-4 h-4" />
        <span>Aperçu de la méthode</span>
      </div>
      <h3 className="text-2xl mb-6">Explorez un territoire</h3>
      <p className="text-slate-600 mb-8 leading-relaxed">
        Entrez un sujet qui vous préoccupe (ex: <i>"le lieu d'accouchement"</i> ou <i>"le congé paternité"</i>) 
        pour voir comment Parenta aide à clarifier le paysage.
      </p>

      <form onSubmit={handleExplore} className="flex flex-col sm:flex-row gap-3 mb-8">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ex: Le rythme de sommeil du nouveau-né..."
          className="flex-1 px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-[#0D1321] text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Explorer le paysage"}
        </button>
      </form>

      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-slate-50 p-6 rounded-xl border border-slate-100">
          <h4 className="text-xl font-medium mb-3">{result.title}</h4>
          <p className="text-slate-700 mb-4 italic leading-relaxed">{result.overview}</p>
          <div className="space-y-3 mb-6">
            {result.dimensions.map((dim: string, i: number) => (
              <div key={i} className="flex gap-3 text-slate-600 text-sm">
                <span className="text-slate-300">—</span>
                <span>{dim}</span>
              </div>
            ))}
          </div>
          <div className="pt-4 border-t border-slate-200">
            <p className="text-slate-900 font-medium">Pour vous situer :</p>
            <p className="text-slate-600 text-sm">{result.question}</p>
          </div>
        </div>
      )}
    </div>
  );
};
