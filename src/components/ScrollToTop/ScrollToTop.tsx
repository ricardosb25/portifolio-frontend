import { useState, useEffect } from 'react';
import './ScrollToTop.scss';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const handleScrollPosition = () => {
      if (window.scrollY > 300) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener('scroll', handleScrollPosition);

    return () => {
      window.removeEventListener('scroll', handleScrollPosition);
    };
  }, []);

  const scrollToPageTop = () => {
    const heroElement = document.getElementById('hero');
    if (heroElement) {
      heroElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  return (
    <button
      className={`scroll-to-top-button ${isButtonVisible ? 'visible' : ''}`}
      onClick={scrollToPageTop}
      aria-label="Voltar ao topo da página"
    >
      <ArrowUp size={20} />
    </button>
  );
}
