import React, { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

const Hero: React.FC = () => {
  const rawTitles = [
    "Software Engineer",
    "Indie Developer",
    "AI Systems Builder",
    "Backend Specialist",
    "Automation Enthusiast",
    "Product-Focused Engineer",
  ];

  const titles = rawTitles.map(title => {
    const firstLetter = title.charAt(0).toLowerCase();
    if (['a', 'e', 'i', 'o', 'u'].includes(firstLetter)) {
      return `An ${title}`;
    }
    return `A ${title}`;
  });

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[currentTitleIndex % titles.length];
      
      setTypingSpeed(isDeleting ? 25 : 50);

      if (isDeleting) {
        // Delete one character
        setDisplayedText(prev => prev.slice(0, -1));
      } else {
        // Type one character
        setDisplayedText(currentTitle.substring(0, displayedText.length + 1));
      }

      // Check if we've finished typing the full title
      if (!isDeleting && displayedText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
      // Check if we've finished deleting everything
      else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTitleIndex(prev => (prev + 1) % titles.length);
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
    <section
      id="home"
      className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-start relative overflow-x-hidden"
    >
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 text-left">
        <div className="mb-6 sm:mb-8">
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white mb-4 sm:mb-6 leading-tight tracking-tight break-words"
          >
            Hi, I'm <br /> <span className="text-blue-400">Sambhav Soni</span>
          </h1>
          <div className="min-h-[2.5rem] flex items-center justify-start mb-6 sm:mb-8">
            <p className="text-base sm:text-xl md:text-3xl text-gray-300 leading-relaxed text-left font-mono break-words max-w-full">
              <span className="text-blue-400 typewriter-cursor" id="typewriter-text">{displayedText || '\u00A0'}</span>
            </p>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-full mb-8 sm:mb-12 leading-relaxed break-words">
            I'm a developer who loves building things that are a little clever and a lot reliable. <br />
            <span className="italic text-sm sm:text-base md:text-lg">
              I believe the best systems are like LEGOs: everything fits together, and you can always swap out a piece for a better one without the whole thing falling apart.
            </span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-start justify-start mb-8 sm:mb-12 w-full">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </button>
          <a
            href="/resume.pdf"
            download="Sambhav Soni Resume.pdf"
            className="border-2 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto text-center"
          >
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap justify-start space-x-6 mb-8 sm:mb-12 w-full">
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
          <a
            href="https://discord.com/users/786964843315986452"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faDiscord} className="w-6 h-6" />
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