import './Experience.scss';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Experience() {
  const professionalExperiences = [
    {
      companyName: 'Power Staff',
      roleTitle: 'Desenvolvedor Analista Backend (Estágio)',
      periodText: '09/2025 - Presente',
      descriptionText: 'Atuação no desenvolvimento de soluções backend, construção e manutenção de APIs e análise estrutural de banco de dados.'
    },
    {
      companyName: 'Cittamobi',
      roleTitle: 'Desenvolvedor Fullstack (Estágio)',
      periodText: '03/2025 - 06/2025',
      descriptionText: 'Trabalhei na correção de bugs e criação de novas funcionalidades para ecossistemas web utilizando Angular e Java Spring.'
    }
  ];

  const academicEducation = [
    {
      institutionName: 'Universidade de Mogi das Cruzes (UMC)',
      degreeTitle: 'Engenharia de Software (Bacharelado)',
      periodText: 'Em andamento',
      descriptionText: 'Formação superior focada em desenvolvimento de software, arquitetura de sistemas, algoritmos, estrutura de dados e gerenciamento de projetos.'
    }
  ];

  return (
    <section id="experiencia" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Trajetória</span>
          <h2>Experiência Profissional & Formação</h2>
        </div>

        <div className="experience-grid">
          <div className="experience-column">
            <div className="column-title">
              <Briefcase size={22} />
              <h3>Experiência Profissional</h3>
            </div>

            <div className="timeline">
              {professionalExperiences.map((experienceItem, itemIndex) => (
                <div key={itemIndex} className="timeline-card">
                  <div className="card-header">
                    <h4>{experienceItem.roleTitle}</h4>
                    <span className="company">{experienceItem.companyName}</span>
                  </div>
                  <div className="card-period">
                    <Calendar size={14} />
                    <span>{experienceItem.periodText}</span>
                  </div>
                  <p>{experienceItem.descriptionText}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="experience-column">
            <div className="column-title">
              <GraduationCap size={22} />
              <h3>Formação Acadêmica</h3>
            </div>

            <div className="timeline">
              {academicEducation.map((educationItem, itemIndex) => (
                <div key={itemIndex} className="timeline-card">
                  <div className="card-header">
                    <h4>{educationItem.degreeTitle}</h4>
                    <span className="company">{educationItem.institutionName}</span>
                  </div>
                  <div className="card-period">
                    <Calendar size={14} />
                    <span>{educationItem.periodText}</span>
                  </div>
                  <p>{educationItem.descriptionText}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
