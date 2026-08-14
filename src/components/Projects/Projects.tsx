import './Projects.scss';
import { ExternalLink, FolderGit2 } from 'lucide-react';
import { GithubIcon } from '../SocialIcons/SocialIcons';

export default function Projects() {
  const projectItems = [
    {
      title: 'Sonus',
      description: 'Aplicação web interativa para reprodução e experiência de áudio desenvolvida com TypeScript e JavaScript.',
      tags: ['TypeScript', 'JavaScript', 'Web App', 'Frontend'],
      githubUrl: 'https://github.com/ricardosb25/Sonus',
      liveUrl: 'https://github.com/ricardosb25/Sonus'
    },
    {
      title: 'duckStore-angular',
      description: 'Aplicação web de e-commerce e catálogo de produtos desenvolvida com o framework Angular, TypeScript e SCSS.',
      tags: ['Angular', 'TypeScript', 'HTML5', 'SCSS'],
      githubUrl: 'https://github.com/ricardosb25/duckStore-angular',
      liveUrl: 'https://github.com/ricardosb25/duckStore-angular'
    },
    {
      title: 'dio-api-java-spring',
      description: 'API RESTful construída em Java com Spring Boot, aplicando boas práticas de arquitetura backend e serviços HTTP.',
      tags: ['Java', 'Spring Boot', 'API REST', 'Backend'],
      githubUrl: 'https://github.com/ricardosb25/dio-api-java-spring',
      liveUrl: 'https://github.com/ricardosb25/dio-api-java-spring'
    },
    {
      title: 'dio-padroes-projeto-java',
      description: 'Implementação de Padrões de Projeto (Design Patterns) como Singleton, Strategy e Facade em Java com Spring.',
      tags: ['Java', 'Spring', 'Design Patterns', 'POO'],
      githubUrl: 'https://github.com/ricardosb25/dio-padroes-projeto-java',
      liveUrl: 'https://github.com/ricardosb25/dio-padroes-projeto-java'
    },
    {
      title: 'Automa32',
      description: 'Projeto focado em automação de tarefas, utilitários e processamento de rotinas utilizando Python.',
      tags: ['Python', 'Automação', 'Scripts'],
      githubUrl: 'https://github.com/ricardosb25/Automa32',
      liveUrl: 'https://github.com/ricardosb25/Automa32'
    },
    {
      title: 'desafio-dio-java-iphone',
      description: 'Modelagem de Orientação a Objetos em Java simulando componentes funcionais de um smartphone moderno.',
      tags: ['Java', 'POO', 'Abstração', 'Interfaces'],
      githubUrl: 'https://github.com/ricardosb25/desafio-dio-java-iphone',
      liveUrl: 'https://github.com/ricardosb25/desafio-dio-java-iphone'
    }
  ];

  return (
    <section id="projetos" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Projetos</span>
          <h2>Repositórios e projetos no GitHub</h2>
        </div>

        <div className="projects-grid">
          {projectItems.map((projectItem, projectIndex) => (
            <div key={projectIndex} className="project-card">
              <div className="card-header">
                <div className="folder-icon">
                  <FolderGit2 size={32} />
                </div>
                <div className="card-links">
                  <a
                    href={projectItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver código do repositório ${projectItem.title} no GitHub`}
                  >
                    <GithubIcon size={20} />
                  </a>
                  <a
                    href={projectItem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acessar projeto ${projectItem.title} online`}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="card-body">
                <h3>{projectItem.title}</h3>
                <p>{projectItem.description}</p>
              </div>

              <div className="card-tags">
                {projectItem.tags.map((techTag, tagIndex) => (
                  <span key={tagIndex} className="tag">
                    {techTag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
