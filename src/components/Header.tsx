import './Header.scss';
import { useTheme } from '../ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">MeuPortfólio</h1>
        <nav>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>
        <label className="switch">
            <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme}/>
            <span className="slider"></span>
        </label>
      </div>
    </header>
  );
}
