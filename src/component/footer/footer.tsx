import Logo from "../../utils/image/LogoFooter.svg";
import styles from "./footer.module.scss";

/**
 * Footer component that displays the logo and copyright information.
 * @returns {JSX.Element} The footer component.
 */

export function Footer(): JSX.Element {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src={Logo} alt="Logo de Kasa" />
      <p className={styles.footer__copyright}>
        © {currentYear} Kasa. All rights reserved.
      </p>
    </footer>
  );
}
