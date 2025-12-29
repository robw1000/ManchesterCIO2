
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center px-3 py-1 mb-6 border border-zinc-800 bg-zinc-900/50 text-xs font-mono uppercase tracking-[0.2em] text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
            Status: Available 3 days p/w // Manchester & North West
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-8 leading-none tracking-tighter">
            Strategic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-400 to-zinc-600">
              Tech Leadership.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl font-light leading-relaxed">
            Chartered IT Professional providing high-impact fractional IT leadership for businesses in Manchester or the North West. 
            Bridging the gap between business objectives and technical execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-sm hover:bg-zinc-200 transition-colors text-center"
            >
              Secure Consult
            </a>
            <a 
              href="#engagements" 
              className="px-8 py-4 border border-white/20 hover:border-white transition-colors uppercase tracking-widest text-sm text-center"
            >
              High-Impact Engagements
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 right-10 hidden lg:block opacity-20">
        <div className="font-mono text-[10px] space-y-1 text-zinc-500">
          <div>[LOC_STATUS]: Manchester Area active...</div>
          <div>[CERT_LOG]: CITP // MBCS verified.</div>
          <div>[AI_READY]: IBM GenAI Specialisation active.</div>
          <div>[STATUS]: Available for long-term engagements.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
