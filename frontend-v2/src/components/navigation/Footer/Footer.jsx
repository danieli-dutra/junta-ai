import Logo from "@/components/branding/Logo";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Logo />

        <p className="footer__copyright">
          © 2026 Junta.ai. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;