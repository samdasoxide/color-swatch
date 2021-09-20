import logo from '../color-swatch.gif';
import './header.css';

export default function Header() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <p>
          A Cool Random Swatch Generator
        </p>
      </header>
    </div>
  );
}
