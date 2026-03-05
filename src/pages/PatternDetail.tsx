
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Sparkles, Info } from 'lucide-react';
import { patterns } from '../data';

export default function PatternDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pattern = patterns.find(p => p.id === id);
  const [activeKnobIndex, setActiveKnobIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!pattern) {
    return <div className="min-h-screen flex items-center justify-center">Pattern not found</div>;
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-gray-900">
      {/* Header / Nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium uppercase tracking-wider">Back to Collection</span>
          </button>
          <h1 className="text-lg font-serif italic text-gray-800">{pattern.title}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Visual & Core Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={pattern.illustration} 
                alt={pattern.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h2 className="text-4xl md:text-5xl font-serif italic mb-2">{pattern.title}</h2>
                <p className="text-lg font-medium tracking-wider uppercase opacity-90" style={{ color: pattern.colorTheme.accent }}>
                  {pattern.subtitle}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-4 text-sm font-bold" style={{ color: pattern.colorTheme.secondary }}>
                <Sparkles size={18} />
                <span>穿搭心理学 / Psychology</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg">
                {pattern.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                {pattern.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Mechanism & Guide */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Mechanism Card */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-100">
                <Info size={18} className="text-gray-400" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-800">{pattern.mechanism.title}</h3>
              </div>
              
              <div className="space-y-6">
                {pattern.mechanism.points.map((point, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: pattern.colorTheme.accent }} />
                    <div>
                      <span className="text-sm font-bold text-gray-800 block mb-1">{point.label}</span>
                      <span className="text-sm text-gray-600 leading-relaxed">{point.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {pattern.mechanism.dataGraph && (
                <div className="mt-8 bg-gray-50 rounded-xl p-6 flex items-center justify-between">
                  <span className="font-medium text-gray-500">{pattern.mechanism.dataGraph.label}</span>
                  <div className="flex items-end gap-2">
                    <div className="w-3 h-6 bg-gray-200 rounded-t-sm" />
                    <div className="w-3 h-8 bg-gray-300 rounded-t-sm" />
                    <div className="w-3 h-12 rounded-t-sm" style={{ backgroundColor: pattern.colorTheme.accent }} />
                    <span className="ml-3 text-2xl font-bold" style={{ color: pattern.colorTheme.secondary }}>
                      {pattern.mechanism.dataGraph.value}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Detailed Guide Section */}
            {pattern.detailedGuide && (
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ring-1 ring-black/5">
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen size={20} className="text-gray-400" />
                  <h3 className="text-lg font-bold uppercase tracking-wider text-gray-800">Style Guide</h3>
                </div>

                {/* Knob Tabs */}
                <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                  {pattern.detailedGuide.knobs.map((knob, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveKnobIndex(idx)}
                      className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all whitespace-nowrap flex-shrink-0 ${
                        activeKnobIndex === idx 
                          ? 'bg-gray-900 text-white shadow-md scale-105' 
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {knob.title}
                    </button>
                  ))}
                </div>

                {/* Active Knob Content */}
                <div className="space-y-8">
                  <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                    <p className="text-sm text-gray-600 italic leading-relaxed">
                      {pattern.detailedGuide.knobs[activeKnobIndex].description}
                    </p>
                  </div>
                  
                  {pattern.detailedGuide.knobs[activeKnobIndex].scenarios.map((scenario, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      <div className="flex items-baseline gap-3 border-b border-gray-100 pb-2">
                        <h4 className="text-base font-bold text-gray-800">{scenario.title}</h4>
                        <span className="text-sm text-gray-500">{scenario.description}</span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4">
                        {scenario.outfits.map((outfit) => (
                          <div key={outfit.id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300">
                            <div className="flex flex-col sm:flex-row">
                              {outfit.image && (
                                <div className="sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-gray-100 relative overflow-hidden">
                                  <img 
                                    src={outfit.image} 
                                    alt="outfit" 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                                  />
                                </div>
                              )}
                              <div className="flex-1 p-5">
                                <div className="flex justify-between items-start mb-2">
                                   <span className="text-sm font-bold text-gray-900">Outfit #{outfit.id.split('-').pop()}</span>
                                   <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium">{outfit.budget}</span>
                                </div>
                                <p className="text-sm text-gray-700 mb-3 leading-relaxed">{outfit.items}</p>
                                
                                <div className="flex flex-wrap gap-2 mb-4">
                                   <span className="text-xs px-2 py-0.5 border border-gray-200 rounded text-gray-500">{outfit.materials}</span>
                                   <span className="text-xs px-2 py-0.5 border border-gray-200 rounded text-gray-500">{outfit.colors}</span>
                                </div>
                                
                                <div className="flex gap-2 items-start bg-gray-50 p-3 rounded-lg">
                                  <Sparkles size={14} className="text-amber-500 mt-0.5 flex-shrink-0" />
                                  <p className="text-xs text-gray-600 italic">
                                    {outfit.reason}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
