import Logo from "../../utils/image/LogoFooter.svg";
import "./footer.scss";
export function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
