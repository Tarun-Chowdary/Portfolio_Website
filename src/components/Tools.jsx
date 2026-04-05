import React from 'react';

const Tools = () => {
  const tools = [
  {
    category: "Machine Learning & Data",
    items: [
{
  name: "Python",
  type: "svg",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C9.243 0 9.412 1.199 9.412 1.199l.003 1.243h2.632v.373H8.356S6.545 2.64 6.545 5.13c0 2.49 1.581 2.41 1.581 2.41h.944v-1.32s-.051-1.581 1.56-1.581h2.61s1.467.024 1.467-1.422V1.422S15.44 0 12 0zM10.42 1.102c.263 0 .477.214.477.477 0 .263-.214.477-.477.477-.263 0-.477-.214-.477-.477 0-.263.214-.477.477-.477zM12 24c2.757 0 2.588-1.199 2.588-1.199l-.003-1.243h-2.632v-.373h3.691s1.811.175 1.811-2.315c0-2.49-1.581-2.41-1.581-2.41h-.944v1.32s.051 1.581-1.56 1.581h-2.61s-1.467-.024-1.467 1.422v1.795S8.56 24 12 24zM13.58 22.898c-.263 0-.477-.214-.477-.477 0-.263.214-.477.477-.477.263 0 .477.214.477.477 0 .263-.214.477-.477.477z"/>
    </svg>
  )
},     
      { name: "Pandas", icon: "ri-database-2-fill", type: "icon" },
      { name: "NumPy", icon: "ri-function-fill", type: "icon" },
      { name: "Scikit-learn", icon: "ri-bar-chart-fill", type: "icon" },
      { name: "XGBoost", icon: "ri-line-chart-fill", type: "icon" },
      { name: "SHAP", icon: "ri-focus-3-line", type: "icon" },
    ]
  },
  {
    category: "Web & Full Stack",
    items: [
      { name: "React", icon: "ri-reactjs-fill", type: "icon" },
      { name: "Node.js", icon: "ri-nodejs-fill", type: "icon" },
      { name: "Express", icon: "ri-server-fill", type: "icon" },
      { name: "MongoDB", icon: "ri-database-fill", type: "icon" },
      { name: "WebSockets", icon: "ri-exchange-line", type: "icon" },
      { name: "Firebase", icon: "ri-firebase-fill", type: "icon" },
    ]
  },
  {
    category: "Languages",
    items: [
{
  name: "Python",
  type: "svg",
  icon: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C9.243 0 9.412 1.199 9.412 1.199l.003 1.243h2.632v.373H8.356S6.545 2.64 6.545 5.13c0 2.49 1.581 2.41 1.581 2.41h.944v-1.32s-.051-1.581 1.56-1.581h2.61s1.467.024 1.467-1.422V1.422S15.44 0 12 0zM10.42 1.102c.263 0 .477.214.477.477 0 .263-.214.477-.477.477-.263 0-.477-.214-.477-.477 0-.263.214-.477.477-.477zM12 24c2.757 0 2.588-1.199 2.588-1.199l-.003-1.243h-2.632v-.373h3.691s1.811.175 1.811-2.315c0-2.49-1.581-2.41-1.581-2.41h-.944v1.32s.051 1.581-1.56 1.581h-2.61s-1.467-.024-1.467 1.422v1.795S8.56 24 12 24zM13.58 22.898c-.263 0-.477-.214-.477-.477 0-.263.214-.477.477-.477.263 0 .477.214.477.477 0 .263-.214.477-.477.477z"/>
    </svg>
  )
},  
      { name: "JavaScript", icon: "ri-javascript-fill", type: "icon" },
      { name: "C++", icon: "ri-code-s-slash-line", type: "icon" },
      { name: "C", icon: "ri-terminal-box-line", type: "icon" },
      { name: "SQL", icon: "ri-database-2-line", type: "icon" },
    ]
  },
  {
    category: "Tools & Workflow",
    items: [
      { name: "Git", icon: "ri-git-branch-fill", type: "icon" },
      { name: "GitHub", icon: "ri-github-fill", type: "icon" },
      { name: "VS Code", icon: "ri-code-box-fill", type: "icon" },
      { name: "Postman", icon: "ri-send-plane-fill", type: "icon" },
      { name: "Jupyter", icon: "ri-book-open-fill", type: "icon" },
      { name: "Google Colab", icon: "ri-cloud-fill", type: "icon" },
    ]
  }
];

  return (
    <section id="tools" className="bg-[#070707] reveal-section border-b border-white/10">
      <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-12 min-h-[40vh]">

        <div className="md:col-span-3 p-6 md:p-10 border-r border-white/10 flex items-start">
          <div className="text-xs font-mono text-brand-accent uppercase tracking-widest sticky top-32">
            ( 02 — What I Use )
          </div>
        </div>

        <div className="transition-colors duration-500 md:col-span-9 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-16 md:gap-x-12">
            {tools.map((group, index) => (
              <div key={index} className="flex flex-col gap-6">
                <h3 className="text-lg font-gothic text-brand-light/80 uppercase tracking-wide border-l-2 border-brand-accent pl-4">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-4 pl-4">
                  {group.items.map((tech, i) => (
                    <div
                      key={i}
                      className="group relative flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-brand-accent/50 transition-all duration-300 cursor-default"
                    >
                      {tech.type === 'icon' ? (
                        <i className={`${tech.icon} text-2xl md:text-3xl text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300`}></i>
                      ) : (
                        <div className={`text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300 ${tech.wide ? 'w-12 h-6 md:w-14 md:h-7' : 'w-6 h-6 md:w-8 md:h-8'}`}>
                          {tech.icon}
                        </div>
                      )}

                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-20">
                        <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider text-brand-accent bg-brand-dark px-2 py-1 border border-brand-accent/20 rounded">
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tools;
