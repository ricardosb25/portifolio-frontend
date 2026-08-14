import './Home.scss';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import Contact from '../../components/Contact/Contact';
import { ArrowDown, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/SocialIcons/SocialIcons';

export default function Home() {
  return (
    <main className="home">
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">Engenharia de Software • Fullstack</span>
          <h1>
            Olá, eu sou <span>Ricardo Souza Bissaco</span>
          </h1>
          <p>
            Desenvolvedor Fullstack com experiência prática em <strong>Angular</strong>, <strong>React</strong> e <strong>Java Spring Boot</strong>. Apaixonado por tecnologia, evolução constante e soluções de alto impacto.
          </p>

          <div className="hero-actions">
            <a href="#projetos" className="primary-btn">
              Ver Projetos
            </a>
            <a href="#contato" className="secondary-btn">
              Falar Comigo
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/ricardosb25"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/ricardo-souza-bissaco/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil do LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a href="mailto:ricardosbissaco@gmail.com" aria-label="Enviar Email">
              <Mail size={22} />
            </a>
          </div>
        </div>

        <a href="#sobre" className="scroll-indicator" aria-label="Rolar para a seção sobre">
          <ArrowDown size={20} />
        </a>
      </section>

      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
