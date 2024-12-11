import { ReactNode, useState } from "react";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import styles from "./collapse.module.scss";
interface CollapseProps {
  title: ReactNode;
  content: ReactNode;
}

export function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.collapse}>
      <div className={styles.collapse__header} onClick={handleClick}>
        <h3 className={styles.collapse__header__title}>{title}</h3>
        <img
          src={arrowLeft}
          className={`${styles.collapse__header__icon} ${
            isOpen ? styles.open : ""
          }`}
          alt="Toggle collapse"
        />
      </div>
      <div
        className={`${styles.collapse__content} ${
          isOpen ? styles.openContent : ""
        }`}
      >
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}
