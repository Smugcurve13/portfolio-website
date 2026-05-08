import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Code, Cpu, Monitor, Layers, Settings, BarChart3, ArrowRight, ExternalLink } from 'lucide-react';
import { projects, type ProjectStatus } from '../data/projects';

const categoryIcon: Record<string, React.ReactNode> = {
  Platform: <Layers className="w-5 h-5" />,
  'AI / Automation': <Cpu className="w-5 h-5" />,
  Automation: <Settings className="w-5 h-5" />,
  'Desktop Application': <Monitor className="w-5 h-5" />,
  IoT: <Code className="w-5 h-5" />,
  'Web Development': <Code className="w-5 h-5" />,
  'Data Analysis': <BarChart3 className="w-5 h-5" />,
};

const STATUS_CONFIG: Record<ProjectStatus, { label: string; className: string }> = {
  production: { label: 'Production', className: 'bg-green-600/20 text-green-400 border-green-600/30' },
  poc: { label: 'POC', className: 'bg-amber-600/20 text-amber-400 border-amber-600/30' },
  experimental: { label: 'Experimental', className: 'bg-purple-600/20 text-purple-400 border-purple-600/30' },
  archived: { label: 'Archived', className: 'bg-gray-600/20 text-gray-400 border-gray-600/30' },
};

const StatusBadge: React.FC<{ status: ProjectStatus }> = ({ status }) => {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`px-2 py-0.5 text-xs font-medium rounded-full border ${cfg.className}`}>
      {cfg.label}
    </span>
  );
};

const featuredProjects = projects.filter(p => p.featured);
const archivedProjects = projects.filter(p => !p.featured);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl px-6 mx-auto">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-left">My Projects</h2>
          <p className="text-gray-400 text-lg leading-relaxed text-left">
            Production systems, proofs of concept, and engineering explorations. Click any card for the full technical breakdown.
          </p>
        </div>

        {/* ── Featured Projects Grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {featuredProjects.map(project => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="flex flex-col bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30 transition-all duration-300 group border border-gray-700/50 hover:border-gray-600"
            >
              <div className="p-6 flex flex-col h-full">
                {/* Card top row: icon + status + arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-blue-400">
                    {categoryIcon[project.category] ?? <Code className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={project.status} />
                    <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-200" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">{project.title}</h3>

                {/* Summary */}
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">{project.summary}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-blue-600/15 text-blue-300 text-xs rounded-full border border-blue-600/25"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Archived / Older Work ─────────────────────────────────────── */}
        <div className="border-t border-gray-700/60 pt-12">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Older Work</h3>
            <div className="flex-1 h-px bg-gray-700/60" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {archivedProjects.map(project => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="flex flex-col bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800 transition-all duration-200 group border border-gray-700/40 hover:border-gray-600/60"
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h4 className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors leading-snug">
                      {project.title}
                    </h4>
                    {project.github && (
                      <span
                        onClick={e => {
                          e.preventDefault();
                          window.open(project.github, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-gray-600 hover:text-gray-300 transition-colors shrink-0 mt-0.5"
                        title="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </span>
                    )}
                    {project.demo && !project.github && (
                      <span
                        onClick={e => {
                          e.preventDefault();
                          window.open(project.demo, '_blank', 'noopener,noreferrer');
                        }}
                        className="text-gray-600 hover:text-gray-300 transition-colors shrink-0 mt-0.5"
                        title="Live Demo"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-3 flex-1">{project.summary}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map(t => (
                      <span
                        key={t}
                        className="px-1.5 py-0.5 bg-gray-700/60 text-gray-400 text-xs rounded"
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 text-gray-600 text-xs">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-left">
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
