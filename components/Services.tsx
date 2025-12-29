
import React from 'react';

interface Engagement {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

const engagements: Engagement[] = [
  {
    id: '01',
    title: 'Programme Rescue',
    subtitle: 'Restoring Confidence',
    description: 'When delivery is stuck, suppliers are misaligned, and boards need confidence restored. I step in to diagnose root causes and realign delivery with business goals.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'AI & Modernisation',
    subtitle: 'The Clear Path Forward',
    description: 'When executives need governance, capability assessment, and a clear AI roadmap. IBM certified in GenAI for executives and data ethics.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'Fractional CIO',
    subtitle: 'Strategic Leadership',
    description: 'Strategic technology leadership without the full-time cost. Covering IT strategy, team management, cybersecurity, and supplier oversight on a part-time basis.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const Services: React.FC = () => {
  return (
    <section id="engagements" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-4">High-Impact Engagements</h2>
          <p className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">Deploying executive logic where it matters most.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-900 border border-zinc-900">
          {engagements.map((eng) => (
            <div key={eng.id} className="bg-black p-10 group hover:bg-zinc-900 transition-all duration-500">
              <div className="text-zinc-500 font-mono text-xs mb-8">[{eng.id}]</div>
              <div className="mb-6 p-3 inline-block bg-zinc-900 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                {eng.icon}
              </div>
              <h3 className="text-2xl font-bold mb-1">{eng.title}</h3>
              <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6">{eng.subtitle}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{eng.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 border border-white/5 bg-black/50 backdrop-blur rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-white font-bold text-lg mb-1">Financial</div>
              <div className="text-zinc-500 text-[10px] font-mono uppercase">Payment Systems</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg mb-1">Social Care</div>
              <div className="text-zinc-500 text-[10px] font-mono uppercase">CQC Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg mb-1">Logistics</div>
              <div className="text-zinc-500 text-[10px] font-mono uppercase">Supply Chain</div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg mb-1">SaaS / CRM</div>
              <div className="text-zinc-500 text-[10px] font-mono uppercase">Custom Development</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
