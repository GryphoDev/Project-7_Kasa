import styles from "./tag.module.scss";

/**
 * Tag component that displays a single tag item as a styled span element.
 * @param {Object} props - Component props.
 * @param {string} props.tagItem - The tag text to display.
 * @returns {JSX.Element} The tag component.
 */

export function Tag({ tagItem }: { tagItem: string }): JSX.Element {
  return <span className={styles.tag}>{tagItem}</span>;
}
