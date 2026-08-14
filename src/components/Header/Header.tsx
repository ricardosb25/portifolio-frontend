import { useState } from 'react';
import './Header.scss';
import { useTheme } from '../../ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(previousState => !previousState);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#hero" className="logo" onClick={closeMobileMenu}>
          <span>Ricardo</span>.dev
        </a>

        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <a href="#sobre" onClick={closeMobileMenu}>Sobre</a>
          <a href="#experiencia" onClick={closeMobileMenu}>Experiência</a>
          <a href="#habilidades" onClick={closeMobileMenu}>Habilidades</a>
          <a href="#projetos" onClick={closeMobileMenu}>Projetos</a>
          <a href="#contato" onClick={closeMobileMenu}>Contato</a>
        </nav>

        <div className="actions">
          <button
            className="theme-toggle-button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Abrir menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
