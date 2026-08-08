import "./Header.css";
import { FaLink } from "react-icons/fa6";
import logo from "../../imagens/LogoEncurtadorDeLinks.png";

function Header() {
  return (
    <header className="header">
      <h1>Encurtador de Links</h1>
      <FaLink size={24} color="#ffffff" />
    </header>
  );
}

export default Header;
