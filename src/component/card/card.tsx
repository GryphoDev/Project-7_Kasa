import styles from "./card.module.scss";
interface CardProps {
  id: string;
  title: string;
  cover: string;
}

export function Card({ id, title, cover }: CardProps) {
  return (
    <div id={id} className={styles.card}>
      <img className={styles.card__picture} src={cover} alt={title} />
      <h2 className={styles.card__title}>{title}</h2>
    </div>
  );
}
