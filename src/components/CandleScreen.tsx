import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Wind } from 'lucide-react';

export default function CandleScreen({ onNext }: { onNext: () => void }) {
  const [blown, setBlown] = useState(false);

  const handleBlow = () => {
    setBlown(true);
    setTimeout(() => {
      onNext();
    }, 3000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 transition-opacity duration-1000" style={{ opacity: blown ? 0 : 1 }} />
      
      <div className="relative z-10 flex flex-col items-center">
        {/* Candle */}
        <div className="relative mt-32">
          {/* Flame */}
          {!blown && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: [1, 1.1, 0.9, 1.05, 1],
                rotate: [0, -2, 3, -1, 0],
                opacity: 1
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "mirror"
              }}
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-8 h-24 bg-gradient-to-t from-orange-400 via-yellow-200 to-transparent rounded-full blur-[2px] origin-bottom drop-shadow-[0_0_40px_rgba(251,191,36,0.8)] z-20"
              style={{ borderRadius: '50% 50% 20% 20% / 60% 60% 40% 40%' }}
            />
          )}

          {/* Wick */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-6 bg-slate-800 rounded-full z-10" />

          {/* Smoke (after blown) */}
          {blown && (
            <motion.div
              initial={{ opacity: 0, y: 0, scale: 0.5 }}
              animate={{ opacity: [0, 0.5, 0], y: -100, scale: 2 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-4 bg-slate-400 rounded-full blur-md"
            />
          )}

          {/* Wax body */}
          <div className="w-24 h-64 bg-gradient-to-r from-red-200 via-white to-red-100 rounded-t-xl rounded-b-md shadow-2xl relative border-b-8 border-slate-900 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-b from-red-300 to-transparent opacity-50 rounded-t-xl" />
            {/* Melting wax drips */}
            <div className="absolute top-0 left-2 w-3 h-12 bg-white rounded-full opacity-80" />
            <div className="absolute top-0 left-8 w-2 h-16 bg-white rounded-full opacity-60" />
            <div className="absolute top-0 right-4 w-4 h-10 bg-white rounded-full opacity-90" />
          </div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={handleBlow}
          disabled={blown}
          className={`mt-16 px-8 py-4 rounded-full font-display font-bold text-lg md:text-xl flex items-center gap-3 transition-all duration-500 max-w-xs w-full justify-center ${
            blown 
              ? 'bg-slate-800 text-slate-500 scale-95 opacity-0 cursor-not-allowed' 
              : 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 hover:scale-105 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)]'
          }`}
        >
          <Wind className="w-6 h-6" />
          {blown ? 'Making a wish...' : 'Tap to blow candle'}
        </motion.button>
      </div>
    </motion.div>
  );
}
