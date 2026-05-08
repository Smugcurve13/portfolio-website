import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Github,
  Globe,
  ExternalLink,
  Download,
  ChevronRight,
} from 'lucide-react';
import { projects, type ProjectStatus } from '../data/projects';

// ── Helpers ────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<ProjectStatus, { label: string; className: string }> = {
  production: { label: 'Production', className: 'bg-green-600/20 text-green-400 border-green-600/30' },
  poc: { label: 'POC', className: 'bg-amber-600/20 text-amber-400 border-amber-600/30' },
  experimental: { label: 'Experimental', className: 'bg-purple-600/20 text-purple-400 border-purple-600/30' },
  archived: { label: 'Archived', className: 'bg-gray-600/20 text-gray-400 border-gray-600/30' },
};

const StatusBadge: React.FC<{ status: ProjectStatus }> = ({ status }) => {
  const cfg = STATUS_CONFIG[status];
  return (
    <span className={`inline-flex px-2.5 py-0.5 text-xs font-semibold rounded-full border ${cfg.className}`}>
      {cfg.label}
    </span>
  );
};

interface LinkButtonProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg border border-gray-700 hover:border-gray-600 transition-all text-sm font-medium"
  >
    {icon}
    {label}
  </a>
);

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <div className="mb-12">
    <h2 className="text-xl font-bold text-white mb-5 pb-3 border-b border-gray-700/80">{title}</h2>
    {children}
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);

  const handleBackToProjects = () => {
    navigate('/', { state: { scrollTo: 'projects' } });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl font-bold text-white mb-3">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* ── Sticky top bar ─────────────────────────────────────────────── */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </button>

          {/* Breadcrumb */}
          <nav className="hidden sm:flex items-center gap-1.5 text-xs text-gray-600">
            <Link to="/" className="hover:text-gray-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <button onClick={handleBackToProjects} className="hover:text-gray-400 transition-colors">Projects</button>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-400">{project.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Page content ───────────────────────────────────────────────── */}
      <div className="pt-24 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* ── Project header ──────────────────────────────────────────── */}
          <header className="mb-14">
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <StatusBadge status={project.status} />
              <span className="text-gray-500 text-sm">{project.category}</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              {project.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
              {project.summary}
            </p>

            {/* External links */}
            {(project.github || project.website || project.app || project.download || project.demo) && (
              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <LinkButton href={project.github} icon={<Github className="w-4 h-4" />} label="GitHub" />
                )}
                {project.website && (
                  <LinkButton href={project.website} icon={<Globe className="w-4 h-4" />} label="Website" />
                )}
                {project.app && (
                  <LinkButton href={project.app} icon={<ExternalLink className="w-4 h-4" />} label="Live App" />
                )}
                {project.download && (
                  <LinkButton href={project.download} icon={<Download className="w-4 h-4" />} label="Download" />
                )}
                {project.demo && !project.app && (
                  <LinkButton href={project.demo} icon={<ExternalLink className="w-4 h-4" />} label="Live Demo" />
                )}
              </div>
            )}
          </header>

          {/* ── Overview ────────────────────────────────────────────────── */}
          <Section title="Overview">
            <p className="text-gray-300 text-base leading-relaxed">{project.overview}</p>
          </Section>

          {/* ── Architecture & Data Flow ─────────────────────────────────── */}
          <Section title="Architecture & Data Flow">
            <ul className="space-y-4">
              {project.architecture.map((item, i) => (
                <li key={i} className="flex gap-4 text-gray-300 text-sm leading-relaxed">
                  <span className="text-blue-400 font-bold shrink-0 mt-0.5">→</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ── Key Features ────────────────────────────────────────────── */}
          <Section title="Key Features">
            <ul className="space-y-3">
              {project.keyFeatures.map((feature, i) => (
                <li key={i} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                  <span className="text-green-400 shrink-0 mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ── Tech Stack ──────────────────────────────────────────────── */}
          <Section title="Tech Stack">
            <div className="flex flex-wrap gap-2.5">
              {project.techDetails.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-blue-600/15 text-blue-300 text-sm rounded-lg border border-blue-600/25 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* ── Engineering Highlights ──────────────────────────────────── */}
          <Section title="Engineering Highlights">
            <ul className="space-y-5">
              {project.highlights.map((h, i) => (
                <li key={i} className="flex gap-4 text-gray-300 text-sm leading-relaxed">
                  <span className="text-blue-400 font-bold text-base shrink-0 w-5 text-center mt-0.5">
                    {i + 1}.
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </Section>

          {/* ── Challenges Faced (conditional) ──────────────────────────── */}
          {project.challenges && project.challenges.length > 0 && (
            <Section title="Challenges Faced">
              <ul className="space-y-4">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-4 text-gray-300 text-sm leading-relaxed">
                    <span className="text-amber-400 shrink-0 mt-0.5">△</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          {/* ── Deployment Notes (conditional) ──────────────────────────── */}
          {project.deploymentNotes && (
            <Section title="Deployment Notes">
              <p className="text-gray-300 text-sm leading-relaxed bg-gray-800/60 rounded-lg p-4 border border-gray-700/60">
                {project.deploymentNotes}
              </p>
            </Section>
          )}

          {/* ── Footer nav ──────────────────────────────────────────────── */}
          <div className="mt-16 pt-8 border-t border-gray-700/60">
            <button
              onClick={handleBackToProjects}
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
