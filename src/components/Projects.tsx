import React from 'react';
import { ExternalLink, Github, Code, Bot, Gamepad, BarChart3 } from 'lucide-react';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState<string>('All');

  const projects = [
    {
      title: "SAMGPT",
      description: "A powerful LLM Chat Software designed to facilitate seamless conversations using Large Language Models. Features an intuitive interface for AI-powered conversations.",
      tech: ["Python", "HTML", "AI/ML"],
      github: "https://github.com/Smugcurve13/SAMGPT-updated",
      demo: null,
      icon: <Bot className="w-6 h-6" />,
      category: "AI/ML"
    },
    {
      title: "Weather Forecast Data App",
      description: "A comprehensive weather application that provides accurate forecast data with an intuitive user interface. Built with Python for reliable weather predictions.",
      tech: ["Python", "API Integration", "Data Analysis"],
      github: "https://github.com/Smugcurve13/Weather-forecast-data-app",
      demo: null,
      icon: <BarChart3 className="w-6 h-6" />,
      category: "Data Analysis"
    },
    {
      title: "Steam Big Picture Controller",
      description: "An automation script that detects Xbox controller connections and automatically launches Steam Big Picture mode. Perfect for seamless gaming setup.",
      tech: ["Python", "Automation", "Windows"],
      github: "https://github.com/Smugcurve13/bluetooth-controller-turn-on-steam-bigpicture",
      demo: null,
      icon: <Gamepad className="w-6 h-6" />,
      category: "Automation"
    },
    {
      title: "Price-to-Performance Calculator",
      description: "A tool that provides price-to-performance metrics for comparing PC specifications. Helps users make informed decisions when building computers.",
      tech: ["Python", "Data Analysis", "Performance Metrics"],
      github: "https://github.com/Smugcurve13/price-to-performance-to-percentage",
      demo: null,
      icon: <BarChart3 className="w-6 h-6" />,
      category: "Data Analysis"
    },
    {
      title: "Wiz Control System",
      description: "A smart home control system for managing Wiz smart lights and devices. Provides automated control and scheduling capabilities.",
      tech: ["Python", "IoT", "Smart Home"],
      github: "https://github.com/Smugcurve13/wiz-control-by-SC13",
      demo: null,
      icon: <Code className="w-6 h-6" />,
      category: "IoT"
    },
    {
      title: "Portfolio Website",
      description: "This very portfolio website built with React, TypeScript, and Tailwind CSS. Features responsive design and modern web technologies.",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/Smugcurve13/portfolio-website",
      demo: "https://sambhavsoni.dev",
      icon: <Code className="w-6 h-6" />,
      category: "Web Development"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">My Projects</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in Python development, 
            automation, web development, and creative problem-solving.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {['All', ...Array.from(new Set(projects.map(p => p.category)))].map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => activeCategory === 'All' ? true : project.category === activeCategory).map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">
                    {project.icon}
                  </div>
                  <div className="flex space-x-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Smugcurve13"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
