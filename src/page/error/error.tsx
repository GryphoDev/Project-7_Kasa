import { Link } from "react-router-dom";
import { useIsLargeScreen } from "../../utils/hook/isLargeScreen.tsx";
import styles from "./error.module.scss";

export function Error() {
  const isLargeScreen = useIsLargeScreen();
  return (
    <main className="mainContainer">
      <div className={styles.error}>
        <h1 className={styles.error__code}>404</h1>
        <p className={styles.error__message}>
          {isLargeScreen ? (
            "Oups! La page que vous demandez n'existe pas."
          ) : (
            <>
              Oups! La page que <br /> vous demandez n'existe pas.
            </>
          )}
        </p>
        <Link className={styles.error__linkToHome} to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
}
