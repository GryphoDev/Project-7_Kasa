import styles from "./card.module.scss";

/**
 * Props for the Card component.
 */
interface CardProps {
  id: string; // Unique identifier for the card
  title: string; // Title of the card
  cover: string; // URL of the card's cover image
}

/**
 * Card component to display a card with an image and a title.
 * @param {CardProps} props - The properties of the card.
 * @returns {JSX.Element} The Card component.
 */
export function Card({ id, title, cover }: CardProps): JSX.Element {
  return (
    <div id={id} className={styles.card}>
      <img className={styles.card__picture} src={cover} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
    </div>
  );
}
