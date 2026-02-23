import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-gray-900/0'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Sambhav<span className="text-blue-400">Soni</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-800 rounded-lg">
            <div className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-300 hover:text-white transition-colors text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
