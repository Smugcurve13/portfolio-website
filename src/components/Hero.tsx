import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const titles = [
    "Software Engineer",
    "Indie Developer",
    "AI Systems Builder",
    "Backend Specialist",
    "Automation Enthusiast",
    "Product-Focused Engineer",
  ];

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const i = currentTitleIndex % titles.length;
      const fullText = titles[i];

      setTypingSpeed(isDeleting ? 75 : 150);

      if (isDeleting) {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      } else {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex((prev) => prev + 1);
      }
    };

    const timeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTitleIndex, typingSpeed, titles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-blue-400">Sambhav Soni</span>
          </h1>
          <div className="min-h-[2.5rem] flex items-center justify-center mb-8">
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed text-center">
              <span className="text-blue-400" id="typewriter-text">{displayedText || '\u00A0'}</span>
            </p>
          </div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            I create innovative solutions through code, from AI-powered applications to automation tools. 
            Passionate about turning complex problems into elegant solutions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/Smugcurve13"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/sambhavsoni14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:sambhavsoni14@gmail.com"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-white transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-600/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-600/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-green-600/10 rounded-full blur-lg"></div>
    </section>
  );
};

export default Hero;
