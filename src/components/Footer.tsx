import './Footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Ricardo Souza Bissaco. Todos os direitos reservados.</p>
    </footer>
  );
}
