import React from 'react';
const Methodology = () => {
const methodologies = [
  { 
    head: "Analyze", 
    desc: "I start by understanding the problem from both data and system perspectives — whether it’s user behavior, backend flow, or model performance." 
  },
  { 
    head: "Build", 
    desc: "I develop scalable web applications and intelligent systems, combining clean backend architecture with efficient, data-driven models." 
  },
  { 
    head: "Refine", 
    desc: "I iterate based on real-world performance — improving user experience, system reliability, and model robustness through continuous testing." 
  }
];

  return (
    <section id="methodology" className="bg-brand-dark-2 reveal-section border-b border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10">
          <div className="text-xs font-mono text-brand-accent uppercase tracking-widest sticky top-32">
            ( 04 — Approach )
          </div>
        </div>

        <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-3">
          {methodologies.map((item, i, arr) => (
            <div 
              key={i} 
              className={`p-10 hover:bg-brand-dark transition-colors duration-500 ${i < arr.length - 1 ? 'md:border-r md:border-white/10' : ''} border-b md:border-b-0 border-white/10 last:border-b-0`}
            >
              <h3 className="text-2xl font-gothic text-white mb-6 uppercase">{item.head}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-mono">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;
