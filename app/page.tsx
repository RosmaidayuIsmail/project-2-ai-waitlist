import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Activity, Layers, Fingerprint } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] overflow-hidden flex items-center justify-center selection:bg-orange-500/30 selection:text-white">
      
      {/* 1. Cinematic Film Grain Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-50 mix-blend-overlay" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />

      {/* 2. Massive Spatial Typography */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <h1 className="text-[18vw] font-bold text-white/[0.02] tracking-tighter leading-none whitespace-nowrap select-none">
          AETHOS ENGINE
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* 3. Left Column: Editorial / Avant-Garde Copy */}
        <div className="pt-20 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/5 border border-white/10 text-xs font-mono text-zinc-400 mb-10 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            SYSTEM [ALPHA] IS ACTIVE
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-white mb-6 leading-[1.05]">
            Cognition, <br/>
            <span className="text-zinc-600 font-light italic tracking-tight">deconstructed.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-zinc-400 font-light max-w-md leading-relaxed mb-12">
            Forget generic chatbots. We are engineering a spatial intelligence layer that lives natively in your operating system.
          </p>
          
          <div className="flex gap-8 text-sm font-mono text-zinc-500 border-t border-white/10 pt-8 max-w-md">
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Layers className="w-4 h-4 text-orange-500" /> Native OS
            </span>
            <span className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
              <Fingerprint className="w-4 h-4 text-orange-500" /> Local LLM
            </span>
          </div>
        </div>

        {/* 4. Right Column: The Spatial Widget / Terminal */}
        <div className="relative group max-w-md w-full mx-auto lg:ml-auto">
          {/* Intense hover glow effect */}
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-rose-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative p-8 md:p-10 rounded-3xl bg-[#0a0a0c]/80 border border-white/10 backdrop-blur-2xl shadow-2xl">
            
            <div className="flex items-center justify-between mb-12">
              <Activity className="w-6 h-6 text-orange-500" />
              <span className="text-[10px] font-mono tracking-widest text-zinc-500 border border-zinc-800 px-2 py-1 rounded">SECURE TERMINAL</span>
            </div>

            <h3 className="text-2xl font-medium text-white mb-2">Request Access</h3>
            <p className="text-zinc-400 text-sm mb-8 font-light">Current wait time: ~3 weeks. Priority routing is strictly given to early developers.</p>

            <div className="space-y-4">
              <div className="relative group/input">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-14 bg-black/60 border-white/10 text-white placeholder:text-zinc-600 focus-visible:ring-orange-500/50 focus-visible:border-orange-500 rounded-xl pl-4 transition-all duration-300"
                />
              </div>
              <Button className="w-full h-14 rounded-xl bg-white text-black hover:bg-zinc-200 transition-all font-semibold text-base group/btn shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
                Authenticate <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-zinc-600 font-mono">
              <span>STATUS:</span>
              <span className="text-orange-500">ACCEPTING CREDENTIALS</span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
