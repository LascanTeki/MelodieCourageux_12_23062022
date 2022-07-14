import '../Style/Header.css';
import logo from '../Assets/logo.png'

/**
 Component for generating the header.
 * @component
 */
function header() {
  return (
    <header>
      <img src={logo} alt="SportSee Logo" className="logo" />
      <nav>
        <a href='#'>Acceuil</a>
        <a href='#'>Profil</a>
        <a href='#'>Réglage</a>
        <a href='#'>Communauté</a>
      </nav>
    </header>
  );
}

export default header;