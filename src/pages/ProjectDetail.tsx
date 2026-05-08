import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import Header from '../components/Header';
import { projects } from '../data/projects';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-xl font-bold text-white mb-4 pb-2 border-b border-gray-700">{children}</h2>
);

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projects.find(p => p.slug === slug);

  const handleBack = () => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate('/#projects');
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col">
        <Header />
        <div className="flex flex-1 items-center justify-center">
          <div className="text-center px-6">
            <h1 className="text-4xl font-extrabold text-white mb-4">Project Not Found</h1>
            <p className="text-gray-400 mb-8">The project you're looking for doesn't exist.</p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <div className="pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-6">

          {/* Back button */}
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span className="text-sm">Back to Projects</span>
          </button>

          {/* ── Project Header ── */}
          <div className="mb-8">
            <span className="inline-block text-xs font-medium text-blue-400 bg-blue-600/15 border border-blue-600/30 rounded-full px-3 py-1 mb-4">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-6 leading-tight">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-gray-200 px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live App
                </a>
              )}
            </div>
          </div>

          {/* Tech stack tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {project.tech.map(t => (
              <span
                key={t}
                className="px-3 py-1 bg-blue-600/20 text-blue-300 text-xs rounded-full border border-blue-600/30 font-medium"
              >
                {t}
              </span>
            ))}
          </div>

          {/* ── Overview ── */}
          <section className="mb-12">
            <SectionHeading>Overview</SectionHeading>
            <p className="text-gray-300 leading-relaxed">{project.overview}</p>
          </section>

          {/* ── Architecture / System Design ── */}
          <section className="mb-12">
            <SectionHeading>Architecture / System Design</SectionHeading>
            <ul className="space-y-3">
              {project.architecture.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-400 flex-shrink-0 mt-0.5 font-bold">→</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Key Features ── */}
          <section className="mb-12">
            <SectionHeading>Key Features</SectionHeading>
            <ul className="space-y-2">
              {project.keyFeatures.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-green-400 flex-shrink-0 mt-0.5">✓</span>
                  <span className="text-gray-300 text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ── Tech Stack ── */}
          <section className="mb-12">
            <SectionHeading>Tech Stack</SectionHeading>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {project.techDetails.map(t => (
                <div
                  key={t}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-gray-200 text-sm font-medium"
                >
                  {t}
                </div>
              ))}
            </div>
          </section>

          {/* ── Highlights / Engineering Decisions ── */}
          <section className="mb-12">
            <SectionHeading>Highlights / Engineering Decisions</SectionHeading>
            <ul className="space-y-3">
              {project.highlights.map((h, i) => (
                <li
                  key={i}
                  className="bg-gray-800 border border-gray-700 rounded-lg p-4 text-gray-300 text-sm leading-relaxed"
                >
                  {h}
                </li>
              ))}
            </ul>
          </section>

          {/* ── Challenges (optional) ── */}
          {project.challenges && project.challenges.length > 0 && (
            <section className="mb-12">
              <SectionHeading>Challenges</SectionHeading>
              <ul className="space-y-2">
                {project.challenges.map((c, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-yellow-400 flex-shrink-0 mt-0.5 font-bold">!</span>
                    <span className="text-gray-300 text-sm leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ── Deployment / Setup (optional) ── */}
          {project.deploymentNotes && (
            <section className="mb-12">
              <SectionHeading>Deployment / Setup</SectionHeading>
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                <p className="text-gray-300 text-sm leading-relaxed font-mono">{project.deploymentNotes}</p>
              </div>
            </section>
          )}

          {/* Back button — bottom */}
          <div className="pt-8 border-t border-gray-700">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="text-sm">Back to Projects</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
