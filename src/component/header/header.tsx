import { Link, useLocation } from "react-router-dom";
import styles from "./header.module.scss";
import Logo from "../../utils/image/Logo.svg";
import { useIsLargeScreen } from "../../utils/hook/isLargeScreen";

/**
 * Header component that displays the navigation menu.
 * @returns {JSX.Element} The header component.
 */
export function Header(): JSX.Element {
  const isLargeScreen = useIsLargeScreen(768);
  const location = useLocation();

  const linksContent = isLargeScreen
    ? ["Accueil", "A Propos"]
    : ["ACCUEIL", "A PROPOS"];

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
              {linksContent[0]}
            </Link>
          </li>
          <li className={styles.header__navbar__links}>
            <Link
              className={location.pathname === "/about" ? styles.active : ""}
              to="/about"
            >
              {linksContent[1]}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
