import { useState, useEffect } from 'react';
import './Header.scss';
import { useTheme } from '../../ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = document.querySelectorAll('section[id]');
      const currentScrollPosition = window.scrollY + 120;

      sectionElements.forEach(sectionItem => {
        const htmlSection = sectionItem as HTMLElement;
        const sectionTop = htmlSection.offsetTop;
        const sectionHeight = htmlSection.offsetHeight;
        const currentId = htmlSection.getAttribute('id') || '';

        if (currentScrollPosition >= sectionTop && currentScrollPosition < sectionTop + sectionHeight) {
          setActiveSectionId(currentId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMenuOpen(previousState => !previousState);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavigationClick = (event: React.MouseEvent<HTMLAnchorElement>, targetSectionId: string) => {
    event.preventDefault();
    closeMobileMenu();
    const targetElement = document.getElementById(targetSectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <a href="#hero" className="logo" onClick={(event) => handleNavigationClick(event, 'hero')}>
          <span>Ricardo</span>.dev
        </a>

        <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <a
            href="#sobre"
            className={activeSectionId === 'sobre' ? 'active' : ''}
            onClick={(event) => handleNavigationClick(event, 'sobre')}
          >
            Sobre
          </a>
          <a
            href="#experiencia"
            className={activeSectionId === 'experiencia' ? 'active' : ''}
            onClick={(event) => handleNavigationClick(event, 'experiencia')}
          >
            Experiência
          </a>
          <a
            href="#habilidades"
            className={activeSectionId === 'habilidades' ? 'active' : ''}
            onClick={(event) => handleNavigationClick(event, 'habilidades')}
          >
            Habilidades
          </a>
          <a
            href="#projetos"
            className={activeSectionId === 'projetos' ? 'active' : ''}
            onClick={(event) => handleNavigationClick(event, 'projetos')}
          >
            Projetos
          </a>
          <a
            href="#contato"
            className={activeSectionId === 'contato' ? 'active' : ''}
            onClick={(event) => handleNavigationClick(event, 'contato')}
          >
            Contato
          </a>
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
