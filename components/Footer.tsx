
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 border border-white flex items-center justify-center font-bold text-xs font-mono">
              RW
            </div>
            <span className="text-sm font-mono tracking-tighter uppercase font-bold">Rob Wilkinson</span>
          </div>

          <div className="text-zinc-600 text-[10px] font-mono uppercase tracking-[0.2em]">
            © {currentYear} Rob Wilkinson. All rights reserved. // Strategic Technical Leadership.
          </div>

          <div className="flex space-x-6 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
