import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} Encurtador de Link. Todos os direitos
        reservados.
      </p>
      <p>Desenvolvido por Ryan Falcão</p>
    </footer>
  );
}

export default Footer;
