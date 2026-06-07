import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Heart, Stars as StarsIcon, Award, Sparkles, Camera } from 'lucide-react';
import Background3D from './components/Background3D';
import CandleScreen from './components/CandleScreen';
import CakeScreen from './components/CakeScreen';

function FinalScreen() {
  useEffect(() => {
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 50 };

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random(), y: Math.random() - 0.2 } }));
    }, 250);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden shadow-2xl flex flex-col items-center justify-center font-sans"
    >
      <Background3D />
      
      <div className="relative z-10 w-full max-w-4xl px-4 flex flex-col items-center gap-12 lg:gap-16 py-12">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-2 drop-shadow-sm pb-2">
            Happy Birthday, Naincy!
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 font-light flex items-center justify-center gap-3">
            Wishing you the most amazing day! <StarsIcon className="w-6 h-6 text-yellow-400 animate-pulse" />
          </p>
        </motion.div>

        {/* Photo Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
           className="relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto rounded-3xl overflow-hidden border-2 border-white/20 bg-slate-800 shadow-2xl flex items-center justify-center">
            {/* When the user uploads "naincy.jpg" to the public folder, it will appear here */}
            <img 
              src="/naincy.jpg" 
              alt="Naincy" 
              className="w-full h-full object-cover z-10 relative"
              onError={(e) => {
                // Fallback UI if image isn't uploaded yet
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.querySelector('.fallback-ui')?.classList.remove('hidden');
              }}
            />
            <div className="fallback-ui hidden absolute inset-0 flex-col items-center justify-center text-slate-400 p-6 text-center z-0 bg-slate-900/80 backdrop-blur-sm">
              <Camera className="w-12 h-12 mb-3 text-slate-500" />
              <p className="text-sm font-medium">To see your photo here:</p>
              <p className="text-xs mt-1 text-slate-500">Upload it to the <strong>public</strong> folder and name it <strong>naincy.jpg</strong></p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="w-full max-w-2xl bg-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl shadow-indigo-500/10 grid gap-6 text-center relative overflow-hidden"
        >
          {/* Decorative background glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none rounded-t-3xl blur-2xl" />

          <div className="flex justify-center mb-2">
            <div className="p-4 bg-indigo-500/20 rounded-full border border-indigo-500/30 relative shadow-[0_0_20px_rgba(99,102,241,0.2)]">
              <Award className="w-10 h-10 text-indigo-300" />
              <StarsIcon className="w-4 h-4 text-yellow-400 absolute -top-1 -right-1" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white/95 leading-relaxed tracking-tight">
            Best Wishes for Your Future!
          </h2>
          
          <p className="text-lg md:text-xl text-pink-100/90 leading-relaxed font-normal">
            Wishing you a spectacular year ahead. And my biggest wish for you...
          </p>
          
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-6 md:p-8 rounded-2xl border border-white/10 relative overflow-hidden group shadow-inner">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Sparkles className="absolute top-3 left-3 w-5 h-5 text-indigo-300/40 group-hover:text-indigo-300/80 transition-colors" />
            <Sparkles className="absolute bottom-3 right-3 w-5 h-5 text-pink-300/40 group-hover:text-pink-300/80 transition-colors" />
            
            <p className="text-2xl md:text-3xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-emerald-300 drop-shadow-md mb-3">
              May you get selected in NDA this year! 🇮🇳
            </p>
            
            <p className="text-sm md:text-base text-slate-300 font-light max-w-md mx-auto">
              Your hard work and dedication will surely pay off. Future Officer Naincy, the uniforms await!
            </p>
          </div>
          
          <div className="flex justify-center gap-4 mt-6 text-pink-400">
            <Heart className="w-6 h-6 animate-pulse" />
            <Heart className="w-6 h-6 animate-pulse delay-75" />
            <Heart className="w-6 h-6 animate-pulse delay-150" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function App() {
  const [step, setStep] = useState(0);

  return (
    <AnimatePresence mode="wait">
      {step === 0 && <CandleScreen key="candle" onNext={() => setStep(1)} />}
      {step === 1 && <CakeScreen key="cake" onNext={() => setStep(2)} />}
      {step === 2 && <FinalScreen key="final" />}
    </AnimatePresence>
  );
}
