
import { motion } from 'motion/react';
import PatternCard from '../components/PatternCard';
import KnobControl from '../components/KnobControl';
import { patterns } from '../data';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleNavigate = (index: number) => {
    navigate(`/pattern/${patterns[index].id}`);
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans text-gray-900 flex flex-col">
      
      {/* A1: Top Theme Anchoring Area */}
      <header className="relative w-full py-16 px-6 md:px-12 bg-gradient-to-b from-[#E0E4E8] to-[#F5F5F5] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-300 via-gray-100 to-gray-300" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-gray-800 mb-4 font-serif italic"
          >
            WARDROBE AS <br className="md:hidden" /> SELF-REGULATOR
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-sm md:text-base font-medium tracking-[0.2em] text-[#C4A484] uppercase"
          >
            情绪 × 职业 × 城市的三重平衡术
          </motion.p>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />
      </header>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 flex flex-col">
        
        {/* B1-B3 & C1-C3: Core Patterns & Mechanisms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 flex-1 items-start">
          {patterns.map((pattern, index) => (
            <PatternCard 
              key={pattern.id}
              data={pattern}
              onClick={() => handleNavigate(index)}
            />
          ))}
        </div>

      </main>

      {/* D1: Comprehensive Conclusion Loop Area */}
      <KnobControl 
        labels={patterns.map(p => p.subtitle.split(' / ')[0])}
        activeIndex={null}
        onSelect={handleNavigate}
      />

    </div>
  );
}
