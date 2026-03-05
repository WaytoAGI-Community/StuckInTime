
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { PatternData } from '../data';

interface PatternCardProps {
  data: PatternData;
  onClick: () => void;
}

const PatternCard: React.FC<PatternCardProps> = ({ data, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative flex flex-col h-full group cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Main Visual Area */}
      <div 
        className="relative flex-1 overflow-hidden rounded-2xl border border-white/20 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        style={{ borderColor: isHovered ? data.colorTheme.accent : 'rgba(255,255,255,0.2)' }}
      >
        {/* Image/Illustration Placeholder */}
        <div className="aspect-[3/4] relative bg-gray-200 overflow-hidden">
           <img 
            src={data.illustration} 
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
           />
           {/* Overlay Gradient */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        </div>

        {/* Floating Tags (Visible on Hover) */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
          {data.tags.map((tag, idx) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="px-3 py-1 text-xs font-medium text-white bg-black/40 backdrop-blur-md rounded-full border border-white/10"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* Hover Info Pop-up */}
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: 0 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/50 pointer-events-none z-10"
        >
            <div className="flex items-center gap-2 mb-2 text-sm font-bold" style={{ color: data.colorTheme.secondary }}>
                <Sparkles size={16} />
                <span>穿搭心理学</span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
                {data.description}
            </p>
        </motion.div>

        {/* Bottom Label */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-light tracking-wide font-serif italic mb-1">{data.title}</h3>
              <p className="text-sm font-medium tracking-wider uppercase opacity-80" style={{ color: data.colorTheme.accent }}>
                {data.subtitle}
              </p>
            </div>
            <motion.div
              animate={{ x: isHovered ? 5 : 0 }}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 group-hover:bg-white/20 transition-colors"
            >
              <ArrowRight size={20} />
            </motion.div>
          </div>
          
          {/* Explore Text */}
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
            className="overflow-hidden"
          >
            <p className="text-xs font-medium tracking-widest uppercase mt-4 text-white/60 flex items-center gap-2">
              Explore Guide <span className="w-8 h-px bg-white/40" />
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatternCard;
