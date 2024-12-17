import { Link } from "react-router-dom";
import { useIsLargeScreen } from "../../utils/hook/isLargeScreen.tsx";
import styles from "./error.module.scss";

/**
 * Error page component that displays a 404 error message.
 * @returns {JSX.Element} The error page component.
 */

export function Error(): JSX.Element {
  const isLargeScreen = useIsLargeScreen();

  const renderContent = () => {
    if (isLargeScreen) {
      return "Oups! La page que vous demandez n'existe pas.";
    } else {
      return (
        <>
          Oups! La page que <br /> vous demandez n'existe pas.
        </>
      );
    }
  };

  return (
    <main className="mainContainer">
      <div className={styles.error}>
        <h1 className={styles.error__code}>404</h1>
        {/**
         * Displays the error message, dynamically formatted based on screen size.
         */}
        <p className={styles.error__message}> {renderContent()}</p>
        {/**
         * Link to navigate back to the home page.
         */}
        <Link className={styles.error__linkToHome} to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  );
}
