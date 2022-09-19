import { Link } from 'react-router-dom';
import './Nav.css';

export function Nav() {
  return (
    <nav className="navbar">
      <div className="div-nav">
        <h1 className="brand">Abastece10</h1>
        <ul className="nav-links">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>Histórico de Preços</li>
          <li>Sobre</li>
          <li>Contato</li>
        </ul>
      </div>
    </nav>
  );
}
