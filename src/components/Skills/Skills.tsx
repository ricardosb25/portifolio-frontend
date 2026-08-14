import './Skills.scss';
import { Layout, Server, Wrench, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Backend & Banco de Dados',
      icon: <Server size={22} />,
      skills: [
        'Java',
        'Spring Boot',
        'Python',
        'SQL (Bancos Relacionais)',
        'APIs RESTful',
        'Estrutura de Dados'
      ]
    },
    {
      title: 'Frontend',
      icon: <Layout size={22} />,
      skills: [
        'Angular',
        'React',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5 & CSS3',
        'Design Responsivo'
      ]
    },
    {
      title: 'Ferramentas & Metodologias',
      icon: <Wrench size={22} />,
      skills: [
        'GitHub & Bitbucket',
        'Jira',
        'Scrum',
        'Linux / Windows',
        'Power BI',
        'Pacote Office (Excel)'
      ]
    }
  ];

  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Habilidades</span>
          <h2>Tecnologias e ferramentas em que atuo</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((categoryItem, categoryIndex) => (
            <div key={categoryIndex} className="category-card">
              <div className="category-header">
                <div className="category-icon">{categoryItem.icon}</div>
                <h3>{categoryItem.title}</h3>
              </div>

              <ul className="skill-list">
                {categoryItem.skills.map((skillItem, skillIndex) => (
                  <li key={skillIndex} className="skill-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span>{skillItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
