
import React, { useState, useEffect } from 'react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-white flex items-center justify-center font-bold text-lg font-mono">
            RW
          </div>
          <span className="text-xl font-bold tracking-tighter font-mono uppercase">Rob Wilkinson</span>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center text-sm font-medium tracking-widest uppercase">
          <a href="#services" className="hover:text-zinc-400 transition-colors">Services</a>
          <a href="#benefits" className="hover:text-zinc-400 transition-colors">Why Fractional</a>
          <a href="#consultant" className="hover:text-zinc-400 transition-colors">AI Advisor</a>
          <a href="#contact" className="px-4 py-2 border border-white hover:bg-white hover:text-black transition-all">
            Secure Consult
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
