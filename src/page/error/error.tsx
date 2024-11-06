import { Link } from "react-router-dom";
import "./error.scss";

export function Error() {
  return (
    <div className="errorContainer">
      <h1 className="codeError">404</h1>
      <p className="messageError">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link className="linkHome" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}
