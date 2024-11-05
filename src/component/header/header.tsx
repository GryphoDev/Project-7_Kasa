import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import Logo from "../../utils/image/Logo.svg";

export function Header() {
  const location = useLocation();
  return (
    <header>
      <img src={Logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link className={location.pathname === "/" ? "active" : ""} to="/">
              Acceuil
            </Link>
          </li>
          <li>
            <Link
              className={location.pathname === "/a-propos" ? "active" : ""}
              to="/a-propos"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
