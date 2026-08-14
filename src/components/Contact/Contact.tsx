import { useState } from 'react';
import './Contact.scss';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons/SocialIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    senderName: '',
    senderEmail: '',
    subjectText: '',
    messageText: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(previousData => ({
      ...previousData,
      [name]: value
    }));
  };

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSubmissionStatus('success');
    setFormData({
      senderName: '',
      senderEmail: '',
      subjectText: '',
      messageText: ''
    });

    setTimeout(() => {
      setSubmissionStatus(null);
    }, 5000);
  };

  const contactMethods = [
    {
      icon: <Mail size={22} />,
      title: 'Email',
      value: 'ricardosbissaco@gmail.com',
      actionUrl: 'mailto:ricardosbissaco@gmail.com'
    },
    {
      icon: <LinkedinIcon size={22} />,
      title: 'LinkedIn',
      value: 'ricardo-souza-bissaco',
      actionUrl: 'https://www.linkedin.com/in/ricardo-souza-bissaco/'
    },
    {
      icon: <GithubIcon size={22} />,
      title: 'GitHub',
      value: 'ricardosb25',
      actionUrl: 'https://github.com/ricardosb25'
    }
  ];

  return (
    <section id="contato" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Contato</span>
          <h2>Vamos construir algo incrível juntos?</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Entre em contato</h3>
            <p>
              Estou aberto a novas oportunidades profissionais, projetos interessantes e conexões na área de tecnologia. Envie uma mensagem!
            </p>

            <div className="contact-cards">
              {contactMethods.map((methodItem, methodIndex) => (
                <a
                  key={methodIndex}
                  href={methodItem.actionUrl}
                  target={methodItem.actionUrl.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="info-card"
                >
                  <div className="info-icon">{methodItem.icon}</div>
                  <div>
                    <h4>{methodItem.title}</h4>
                    <span>{methodItem.value}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleFormSubmit}>
            {submissionStatus === 'success' && (
              <div className="form-feedback success">
                <CheckCircle2 size={20} />
                <span>Mensagem enviada com sucesso! Em breve entrarei em contato.</span>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="senderName">Nome completo</label>
              <input
                type="text"
                id="senderName"
                name="senderName"
                required
                value={formData.senderName}
                onChange={handleInputChange}
                placeholder="Seu nome"
              />
            </div>

            <div className="form-group">
              <label htmlFor="senderEmail">Email</label>
              <input
                type="email"
                id="senderEmail"
                name="senderEmail"
                required
                value={formData.senderEmail}
                onChange={handleInputChange}
                placeholder="seu.email@exemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subjectText">Assunto</label>
              <input
                type="text"
                id="subjectText"
                name="subjectText"
                required
                value={formData.subjectText}
                onChange={handleInputChange}
                placeholder="Assunto da mensagem"
              />
            </div>

            <div className="form-group">
              <label htmlFor="messageText">Mensagem</label>
              <textarea
                id="messageText"
                name="messageText"
                rows={5}
                required
                value={formData.messageText}
                onChange={handleInputChange}
                placeholder="Escreva sua mensagem aqui..."
              />
            </div>

            <button type="submit" className="submit-button">
              <Send size={18} />
              <span>Enviar Mensagem</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
