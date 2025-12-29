
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', challenge: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-bold mb-8 tracking-tighter uppercase">Initiate Diagnostic</h2>
            <p className="text-xl mb-12 text-zinc-600 font-light">
              Available for projects and long-term engagements across Manchester, the North West, and London.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-black flex items-center justify-center font-bold font-mono text-sm">RATE</div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Standard Pricing</h4>
                  <p className="text-zinc-500 font-mono text-sm">£1,250 - £1,500 / Day</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-black flex items-center justify-center font-bold font-mono text-sm">LOC</div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">HQ Command</h4>
                  <p className="text-zinc-500 font-mono text-sm">Manchester, UK / North West</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 border border-black flex items-center justify-center font-bold font-mono text-sm">MAIL</div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-1">Direct Secure Line</h4>
                  <a href="mailto:robw@west30.com" className="text-zinc-500 font-mono text-sm hover:text-black underline">robw@west30.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-zinc-50 p-8 border border-zinc-200">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2">Transmission Received</h3>
                <p className="text-zinc-600">Reviewing your case file. Response within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">Executive Name</label>
                  <input 
                    required
                    type="text" 
                    className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-black transition-colors"
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">Company / Engagement Email</label>
                  <input 
                    required
                    type="email" 
                    className="w-full bg-transparent border-b border-zinc-300 py-3 focus:outline-none focus:border-black transition-colors"
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-500 mb-2">Engagement Details</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border border-zinc-300 p-3 mt-2 focus:outline-none focus:border-black transition-colors resize-none text-sm"
                    placeholder="Briefly describe the bottleneck (e.g., Programme Rescue, AI Roadmap...)"
                    value={formState.challenge}
                    onChange={e => setFormState({...formState, challenge: e.target.value})}
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-black text-white py-4 font-bold uppercase tracking-[0.2em] text-xs hover:bg-zinc-800 transition-colors"
                >
                  Deploy Diagnostic Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
