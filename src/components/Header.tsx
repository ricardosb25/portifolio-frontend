import './Header.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">MeuPortfólio</h1>
        <nav>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
      </div>
    </header>
  );
}
