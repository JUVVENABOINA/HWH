import { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold text-white">Space Detection AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('problem')} className="text-gray-300 hover:text-white transition-colors">
              Problem
            </button>
            <button onClick={() => scrollToSection('methodology')} className="text-gray-300 hover:text-white transition-colors">
              Methodology
            </button>
            <button onClick={() => scrollToSection('results')} className="text-gray-300 hover:text-white transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection('demo')} className="text-gray-300 hover:text-white transition-colors">
              Demo
            </button>
            <button onClick={() => scrollToSection('usecase')} className="text-gray-300 hover:text-white transition-colors">
              Use Case
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('problem')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
              Problem
            </button>
            <button onClick={() => scrollToSection('methodology')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
              Methodology
            </button>
            <button onClick={() => scrollToSection('results')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
              Results
            </button>
            <button onClick={() => scrollToSection('demo')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
              Demo
            </button>
            <button onClick={() => scrollToSection('usecase')} className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors">
              Use Case
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;