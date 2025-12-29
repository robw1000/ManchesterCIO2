
import React, { useState, useRef, useEffect } from 'react';
import { getCIOAdvice } from '../services/gemini';
import { ChatMessage } from '../types';

const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await getCIOAdvice(input);
    const aiMsg: ChatMessage = { role: 'assistant', content: advice };
    
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);
  };

  return (
    <section id="consultant" className="py-24 grid-pattern bg-black">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Strategic AI Advisor</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Get an immediate high-level perspective on your technical challenges. 
              Powered by custom logic trained on Rob Wilkinson's 20 years of executive experience.
            </p>
          </div>

          <div className="border border-white/10 bg-zinc-950/80 backdrop-blur rounded-lg overflow-hidden shadow-2xl flex flex-col h-[600px]">
            <div className="p-4 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">Wilkinson_Advisor_v3.1</span>
              </div>
              <button 
                onClick={() => setMessages([])} 
                className="text-[10px] font-mono text-zinc-600 hover:text-white transition-colors uppercase"
              >
                Reset_Session
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6">
              {messages.length === 0 && (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <p className="text-sm font-mono uppercase tracking-[0.2em]">Awaiting User Input</p>
                  <p className="text-xs text-zinc-500 mt-2">"How should we scale our infrastructure for Q4?"</p>
                </div>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded ${
                    msg.role === 'user' 
                      ? 'bg-white text-black font-medium' 
                      : 'bg-zinc-900 border border-white/5 text-zinc-300 prose prose-invert prose-sm'
                  }`}>
                    {msg.role === 'assistant' ? (
                      <div dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br/>') }} />
                    ) : (
                      msg.content
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 p-4 border border-white/5 text-zinc-400 font-mono text-xs italic">
                    Analyzing technical requirements...
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-zinc-950">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Rob's AI Advisor anything..."
                  className="w-full bg-black border border-white/20 px-4 py-3 text-sm focus:outline-none focus:border-white transition-colors pr-12 font-mono"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:text-zinc-400 disabled:opacity-50"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultant;
