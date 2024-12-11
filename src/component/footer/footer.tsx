import Logo from "../../utils/image/LogoFooter.svg";
import styles from "./footer.module.scss";
export function Footer() {
  return (
    <footer className={styles.footer}>
      <img className={styles.footer__logo} src={Logo} alt="Logo de Kasa" />
      <p className={styles.footer__copyright}>
        © 2020 Kasa. All rights reserved
      </p>
    </footer>
  );
}
