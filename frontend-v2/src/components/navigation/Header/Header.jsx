import Button from "@/components/common/Button";
import Logo from "@/components/branding/Logo";
import Navbar from "@/components/navigation/Navbar";
import ThemeSwitch from "../ThemeSwitch";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Logo variant="icon" width={48} />

        <Navbar />

        <div className="header__controls">
          <ThemeSwitch />

          <Button variant="primary">
            Criar conta
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header;