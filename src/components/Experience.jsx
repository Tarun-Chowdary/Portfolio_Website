import React from 'react';

const Experience = () => {
  const experiences = [
  { 
    title: "Indian Institute of Technology (BHU), Varanasi", 
    role: "Research Intern (Machine Learning & Systems)", 
    year: "2026" 
  },
  { 
    title: "Independent Research Project", 
    role: "Phishing URL Detection — Robustness & Explainability Analysis", 
    year: "2026 (Under Review)" 
  }
];

  return (
    <section id="experience" className="bg-brand-dark-2 reveal-section border-b border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10">
          <div className="text-xs font-mono uppercase tracking-widest text-brand-accent sticky top-32">( 06 — Experience )</div>
        </div>

        <div className="md:col-span-9">
          {experiences.map((job, j) => (
            <div key={j} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-12 border-b border-white/10 hover:bg-brand-dark transition-colors duration-300 cursor-default">
              <div className="mb-2 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-gothic text-white group-hover:translate-x-4 transition-transform duration-500 tracking-wide">
                  {job.title}
                </h3>

              </div>
              <div className="flex items-center gap-10 font-mono text-xs uppercase text-gray-500 tracking-wider">
                <span>{job.role}</span>
                <span className="text-brand-accent">{job.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
