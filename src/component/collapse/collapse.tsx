import { ReactNode, useState } from "react";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import styles from "./collapse.module.scss";

/**
 * Props for the Collapse component.
 */
interface CollapseProps {
  title: ReactNode; // The title of the collapsible section
  content: ReactNode; // The content to be displayed inside the collapsible section
}

/**
 * Collapse component that displays a collapsible section with a title and content.
 * @param {CollapseProps} props - The properties passed to the component.
 * @param {ReactNode} props.title - The title to be displayed.
 * @param {ReactNode} props.content - The content to be shown within the collapsible section.
 * @returns {JSX.Element} The JSX code for the collapsible section.
 */
export function Collapse({ title, content }: CollapseProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const renderContent = () => {
    if (Array.isArray(content)) {
      return (
        <ul>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    }
    return <p>{content}</p>;
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
        {renderContent()}
      </div>
    </div>
  );
}
