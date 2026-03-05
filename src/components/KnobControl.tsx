
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Menu, X, Check } from 'lucide-react';

interface KnobControlProps {
  labels: string[];
  activeIndex: number | null;
  onSelect: (index: number) => void;
}

export default function KnobControl({ labels, activeIndex, onSelect }: KnobControlProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-2 min-w-[200px]"
          >
            <div className="flex flex-col gap-1">
              {labels.map((label, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={index}
                    onClick={() => {
                      onSelect(index);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between
                      ${isActive 
                        ? 'bg-gray-900 text-white shadow-md' 
                        : 'text-gray-600 hover:bg-gray-100'
                      }
                    `}
                  >
                    <span>{label}</span>
                    {isActive && <Check size={14} />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={toggleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          flex items-center gap-3 px-5 py-3 rounded-full shadow-2xl transition-all border
          ${activeIndex !== null 
            ? 'bg-gray-900 text-white border-gray-800' 
            : 'bg-white text-gray-800 border-gray-200'
          }
        `}
      >
        <span className="text-sm font-bold tracking-wide uppercase">
          {activeIndex !== null ? labels[activeIndex] : 'Select Pattern'}
        </span>
        <div className={`p-1 rounded-full ${activeIndex !== null ? 'bg-white/20' : 'bg-gray-100'}`}>
          {isOpen ? <X size={16} /> : <Menu size={16} />}
        </div>
      </motion.button>
    </div>
  );
}
