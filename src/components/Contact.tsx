import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Contact Me</h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Feel free to reach out if you have any questions or would like to
            collaborate on a project. I'm always open to new opportunities and
            connections!
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          <a
            href="mailto:sambhavsoni14@gmail.com"
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Smugcurve13"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <Github className="w-6 h-6" />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/sambhavsoni14"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

