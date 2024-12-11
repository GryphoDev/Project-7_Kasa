import styles from "./tag.module.scss";

export function Tag({ tagItem }: { tagItem: string }) {
  return <span className={styles.tag}>{tagItem}</span>;
}
