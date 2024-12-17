export default function Ferramentas() {
  return (
    <div className="animate-fadeIn">
      <h1 className="font-bold text-3xl sm:text-4xl text-center mb-8">
        Ferramentas
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          {
            title: "Desenvolvimento Frontend",
            skills: ["React.js", "Next.js", "TailwindCSS", "TypeScript", "HTML5/CSS3"]
          },
          {
            title: "Desenvolvimento Backend",
            skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"]
          },
          {
            title: "Ferramentas & DevOps",
            skills: ["Git", "Docker", "VS Code", "GitHub Actions", "AWS"]
          }
        ].map((category, index) => (
          <div
            key={index}
            className="bg-zinc-800/50 backdrop-blur-sm p-6 rounded-lg shadow-lg 
                     hover:bg-zinc-800/70 transition-all duration-300
                     transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-4 text-zinc-100">
              {category.title}
            </h2>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="text-zinc-300 hover:text-zinc-100 transition-colors duration-200
                           flex items-center space-x-2"
                >
                  <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
} 