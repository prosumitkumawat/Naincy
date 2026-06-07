import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart } from 'lucide-react';

function Balloon({ color, delay, left }: { color: string, delay: number, left: string }) {
  return (
    <motion.div
      initial={{ y: "120vh", opacity: 0 }}
      animate={{ y: "-120vh", opacity: 0.8 }}
      transition={{ 
        duration: 10 + Math.random() * 5, 
        delay: delay,
        repeat: Infinity,
        ease: "linear" 
      }}
      className="absolute z-0 w-16 h-20 rounded-[50%] blur-[1px]"
      style={{ 
        left, 
        backgroundColor: color,
        boxShadow: `inset -5px -5px 15px rgba(0,0,0,0.2), inset 5px 5px 15px rgba(255,255,255,0.4)`
      }}
    >
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-3 bg-[color] opacity-50" style={{backgroundColor: color}}></div>
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-px h-16 bg-white/20"></div>
    </motion.div>
  );
}

export default function CakeScreen({ onNext }: { onNext: () => void }) {
  const [cut, setCut] = useState(false);

  const handleCut = () => {
    setCut(true);
    
    // Confetti burst
    const duration = 2500;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-900/40 via-purple-950/40 to-slate-950" />
      
      {/* Balloons */}
      <Balloon color="#f472b6" delay={0} left="10%" />
      <Balloon color="#a78bfa" delay={2} left="80%" />
      <Balloon color="#60a5fa" delay={5} left="25%" />
      <Balloon color="#fbbf24" delay={1} left="70%" />
      <Balloon color="#34d399" delay={4} left="40%" />
      <Balloon color="#fb7185" delay={6} left="85%" />

      <div className="relative z-10 flex flex-col items-center">
        
        <motion.div
           initial={{ y: -30, opacity: 0, scale: 0.8 }}
           animate={{ y: 0, opacity: 1, scale: 1 }}
           transition={{ duration: 1, ease: "easeOut", type: "spring" }}
           className="mb-12 text-center"
        >
          <h2 className="text-5xl md:text-7xl font-display font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-amber-300 drop-shadow-lg">
            Time to Cut the Cake!
          </h2>
          <p className="text-xl text-pink-200/80 mt-4 font-light">Make a wish, Naincy</p>
        </motion.div>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mt-8"
        >
          {/* Decorative Sparks */}
          <Sparkles className="absolute -left-12 top-0 w-8 h-8 text-yellow-300 animate-pulse" />
          <Sparkles className="absolute -right-8 top-12 w-6 h-6 text-pink-300 animate-pulse delay-100" />
          <Heart className="absolute -left-8 bottom-12 w-5 h-5 text-red-400 animate-bounce" />

          {/* Cake Stand */}
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-80 h-10 bg-slate-800 rounded-[50%] shadow-2xl border-b-8 border-slate-900" />
          <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-12 h-16 bg-gradient-to-b from-slate-700 to-slate-900 rounded-lg shadow-2xl" />
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-56 h-8 bg-slate-800 rounded-[50%] shadow-2xl border-b-4 border-slate-900" />
          {/* Plate Details */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-72 h-6 bg-slate-600 rounded-[50%] opacity-50" />

          {/* The Cake */}
          <div className="relative w-64 h-48">
            
            {/* Top Tier (Slides away on cut) */}
            <motion.div 
              className="absolute bottom-24 left-1/2 -translate-x-1/2 w-40 h-28 z-20"
              animate={cut ? { x: "-70%", y: 20, rotate: -15, opacity: 0 } : {}}
              transition={{ duration: 1.5, type: "spring" }}
            >
              {/* Cylinder Base */}
              <div className="absolute bottom-0 w-full h-24 bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 rounded-b-xl shadow-inner border-t border-pink-200">
                {/* Sprinkles */}
                <div className="absolute top-4 left-6 w-2 h-1 bg-yellow-300 rounded-full rotate-45" />
                <div className="absolute top-12 left-10 w-2 h-1 bg-green-300 rounded-full -rotate-12" />
                <div className="absolute top-8 right-8 w-2 h-1 bg-blue-300 rounded-full rotate-90" />
                <div className="absolute top-16 right-12 w-2 h-1 bg-purple-300 rounded-full rotate-12" />
              </div>
              {/* Top Surface */}
              <div className="absolute top-0 w-full h-12 bg-pink-200 rounded-[50%] shadow-inner flex items-center justify-center">
                 <div className="w-[90%] h-[80%] border border-pink-300/50 rounded-[50%]" />
              </div>
              {/* Icing Drips */}
              <div className="absolute top-6 left-0 w-full h-12">
                 <div className="absolute top-0 left-2 w-6 h-10 bg-white rounded-full shadow-sm" />
                 <div className="absolute top-0 left-12 w-5 h-8 bg-white rounded-full shadow-sm" />
                 <div className="absolute top-0 left-20 w-8 h-12 bg-white rounded-full shadow-sm" />
                 <div className="absolute top-0 right-4 w-6 h-9 bg-white rounded-full shadow-sm" />
              </div>
            </motion.div>

            {/* Bottom Tier (Left half) */}
            <motion.div 
              className="absolute bottom-0 left-0 w-1/2 h-32 bg-gradient-to-r from-purple-500 to-purple-400 rounded-bl-xl z-10 overflow-hidden shadow-xl"
              animate={cut ? { x: -30, rotate: -5, opacity: 0.9, scale: 0.95 } : {}}
              transition={{ duration: 1.5, type: "spring" }}
              style={{ transformOrigin: 'bottom left' }}
            >
              {/* Top curved surface of bottom tier */}
              <div className="absolute top-0 left-0 w-[200%] h-16 bg-purple-300 rounded-[50%] shadow-inner" />
              
              {/* Decor lines */}
              <div className="absolute bottom-4 left-0 w-[200%] h-4 bg-purple-600/30 rounded-[50%]" />
              <div className="absolute bottom-10 left-0 w-[200%] h-2 bg-purple-600/20 rounded-[50%]" />

              {/* Inside texture (visible only when cut) */}
              {cut && (
                <div className="absolute right-0 top-1/4 w-8 h-[120%] bg-amber-100 flex flex-col gap-2 pt-6 pl-2 shadow-inner border-r border-amber-200/50 -rotate-1">
                   {/* Cake layers */}
                   <div className="w-6 h-2 bg-pink-400 rounded-sm mb-4" />
                   <div className="w-6 h-2 bg-pink-400 rounded-sm mb-4" />
                   <div className="w-4 h-1 bg-blue-400 rounded-full" />
                </div>
              )}
            </motion.div>

            {/* Bottom Tier (Right half) */}
            <motion.div 
              className="absolute bottom-0 right-0 w-1/2 h-32 bg-gradient-to-r from-purple-400 to-purple-600 rounded-br-xl z-10 overflow-hidden shadow-xl"
              animate={cut ? { x: 30, rotate: 5, scale: 0.95 } : {}}
              transition={{ duration: 1.5, type: "spring" }}
              style={{ transformOrigin: 'bottom right' }}
            >
               {/* Top curved surface of bottom tier */}
               <div className="absolute top-0 right-0 w-[200%] h-16 bg-purple-300 rounded-[50%] shadow-inner" />
               
               {/* Decor lines */}
               <div className="absolute bottom-4 right-0 w-[200%] h-4 bg-purple-800/30 rounded-[50%]" />
               <div className="absolute bottom-10 right-0 w-[200%] h-2 bg-purple-800/20 rounded-[50%]" />
            </motion.div>
            
            {/* Knife line animation */}
            {cut && (
              <motion.div 
                initial={{ height: 0, opacity: 1, top: -60 }}
                animate={{ height: 250, opacity: [1, 1, 0], top: 60 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                className="absolute left-1/2 -translate-x-1/2 w-1.5 bg-white shadow-[0_0_15px_white] z-30 rounded-full"
              />
            )}
          </div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={handleCut}
          disabled={cut}
          className={`mt-24 z-30 px-10 py-5 rounded-full font-display font-bold text-xl flex items-center justify-center gap-3 transition-all duration-500 max-w-sm w-full relative overflow-hidden group ${
            cut 
              ? 'bg-slate-800/80 text-slate-500 scale-95 opacity-0 cursor-not-allowed border border-slate-700' 
              : 'bg-white text-pink-600 hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(236,72,153,0.6)]'
          }`}
        >
          {!cut && (
            <div className="absolute inset-0 bg-gradient-to-r from-pink-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          )}
          <span className="relative z-10">{cut ? 'Cutting...' : 'Cut the Cake'}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
