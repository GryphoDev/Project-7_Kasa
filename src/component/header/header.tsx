import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "../../utils/image/Logo.svg";

/**
 * Header component that displays the navigation menu.
 * @returns {JSX.Element} The header component.
 */
export function Header(): JSX.Element {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <img className={styles.header__logo} src={Logo} alt="Logo de Kasa" />
      <nav>
        <ul className={styles.header__navbar}>
          <li className={styles.header__navbar__links}>
            <Link
              className={location.pathname === "/" ? styles.active : ""}
              to="/"
            >
              Acceuil
            </Link>
          </li>
          <li className={styles.header__navbar__links}>
            <Link
              className={location.pathname === "/about" ? styles.active : ""}
              to="/about"
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
