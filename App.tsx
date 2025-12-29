
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import AIConsultant from './components/AIConsultant';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Ticker Section */}
      <section className="bg-white text-black py-4 border-y border-black overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee font-mono text-[10px] uppercase tracking-[0.3em] font-bold">
          <span className="mx-8 whitespace-nowrap">Programme Rescue //</span>
          <span className="mx-8 whitespace-nowrap">AI & Modernisation //</span>
          <span className="mx-8 whitespace-nowrap">Chartered IT Professional (CITP) //</span>
          <span className="mx-8 whitespace-nowrap">Fractional CIO //</span>
          <span className="mx-8 whitespace-nowrap">North West England //</span>
          <span className="mx-8 whitespace-nowrap">IBM GenAI Certified //</span>
          <span className="mx-8 whitespace-nowrap">Manchester Tech //</span>
          <span className="mx-8 whitespace-nowrap">M&A Technical Due Diligence //</span>
          <span className="mx-8 whitespace-nowrap">Cybersecurity Strategy //</span>
          <span className="mx-8 whitespace-nowrap">Cost Reduction //</span>
        </div>
        <style>
          {`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              display: inline-flex;
              animation: marquee 40s linear infinite;
            }
          `}
        </style>
      </section>

      <Services />

      {/* Background & Certs Section */}
      <section id="benefits" className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-12">Elite Credentials & Experience</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">The Manchester CIO Advantage</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  With over 20 years of experience transitioning from Developer to MD and now Fractional CIO, 
                  Rob brings a unique multi-dimensional perspective to Manchester's mid-market businesses.
                </p>
                <div className="pt-4 space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-zinc-300">Chartered IT Professional (CITP)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-zinc-300">Professional Member of the British Computer Society (MBCS)</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span className="text-zinc-300">7 Years Portfolio Leadership Experience</span>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold tracking-tight">Current Specialisations</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-4 border border-white/10 bg-zinc-900/30 rounded">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">IBM Certified</div>
                    <div className="text-sm font-bold">Generative AI for Executives</div>
                  </div>
                  <div className="p-4 border border-white/10 bg-zinc-900/30 rounded">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">Microsoft Certified</div>
                    <div className="text-sm font-bold">Cybersecurity Planning & Compliance</div>
                  </div>
                  <div className="p-4 border border-white/10 bg-zinc-900/30 rounded">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase mb-1">HKUST Certified</div>
                    <div className="text-sm font-bold">IS Auditing, Controls and Assurance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AIConsultant />
      
      {/* Testimonial Quote */}
      <section className="py-32 bg-zinc-950 flex items-center justify-center text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <span className="text-6xl font-serif text-zinc-700 leading-none">"</span>
          <blockquote className="text-3xl md:text-4xl font-light italic text-zinc-300 -mt-8 mb-8">
            Working with Rob Wilkinson was the single most impactful decision we made for our engineering culture and technical stability.
          </blockquote>
          <cite className="block not-italic">
            <span className="text-white font-bold uppercase tracking-widest text-sm">Technology Director</span>
            <span className="block text-zinc-500 font-mono text-[10px] mt-1 uppercase">Leading North West Financial Institution</span>
          </cite>
        </div>
      </section>

      <Contact />
      <Footer />
    </main>
  );
};

export default App;
