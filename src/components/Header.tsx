import { Button } from "@/components/ui/button";
import { List, X } from "phosphor-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-brand-navy z-50 shadow-lg backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24 animate-in fade-in duration-700"> {/* Altura aumentada para h-24 */}
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2 group">
            <img 
              src="/logo_header.png" 
              alt="Conciarge" 
              className="h-20 w-auto transition-all duration-500 group-hover:scale-105" // Altura do logo aumentada para h-20
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solucao" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Solução
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#recursos" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Recursos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#planos" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              Planos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#faq" className="text-white/90 hover:text-white transition-all duration-300 font-medium relative group">
              FAQ
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="outline" className="bg-white text-primary hover:bg-white/90 hover:text-primary border-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Demonstração Gratuita
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden transition-all duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <List className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/20 animate-in slide-in-from-top duration-300" id="mobile-menu">
            <nav className="flex flex-col space-y-4 p-4">
              <a 
                href="#solucao" 
                className="text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solução
              </a>
              <a 
                href="#recursos" 
                className="text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Recursos
              </a>
              <a 
                href="#planos" 
                className="text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Planos
              </a>
              <a 
                href="#faq" 
                className="text-white/90 hover:text-white transition-all duration-300 hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <Button variant="outline" className="w-fit bg-white text-primary hover:bg-white/90 hover:text-primary mt-2 border-white transition-all duration-300 hover:scale-105">
                Demonstração Gratuita
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;