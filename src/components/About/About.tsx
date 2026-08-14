import './About.scss';
import { Code2, Terminal, GraduationCap, Workflow } from 'lucide-react';

export default function About() {
  const highlightItems = [
    {
      icon: <Terminal size={24} />,
      title: 'Backend com Java & Spring',
      description: 'Desenvolvimento de APIs RESTful, regras de negócio e arquitetura backend com Java e Spring Boot.'
    },
    {
      icon: <Code2 size={24} />,
      title: 'Frontend com Angular & React',
      description: 'Construção de interfaces dinâmicas, responsivas e orientadas a componentes com Angular e React.'
    },
    {
      icon: <GraduationCap size={24} />,
      title: 'Engenharia de Software',
      description: 'Formação acadêmica voltada à modelagem de dados, arquitetura de sistemas e boas práticas de código.'
    },
    {
      icon: <Workflow size={24} />,
      title: 'Metodologias Ágeis & Git',
      description: 'Vivência com Scrum, versionamento com Git/Bitbucket e gestão de tarefas no Jira.'
    }
  ];

  return (
    <section id="sobre" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Sobre Mim</span>
          <h2>Evolução constante e foco em entregas de alto impacto</h2>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Olá! Sou <strong>Ricardo Souza Bissaco</strong>, estudante de <strong>Engenharia de Software na Universidade de Mogi das Cruzes</strong> e desenvolvedor Fullstack.
            </p>
            <p>
              Tenho experiência prática na criação de funcionalidades e resolução de bugs em aplicações web utilizando <strong>Java Spring</strong> no backend e <strong>Angular / React</strong> no frontend. Sou dedicado a aprender continuamente, aprimorar minhas habilidades técnicas e contribuir diretamente para o sucesso de equipes de tecnologia.
            </p>
          </div>

          <div className="highlights-grid">
            {highlightItems.map((item, index) => (
              <div key={index} className="highlight-card">
                <div className="card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
