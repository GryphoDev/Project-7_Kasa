import styles from "./host.module.scss";

interface HostProps {
  name: string; // The name of the host
  picture: string; // The URL of the host's picture
}

/**
 * Host component that displays the host's name and picture.
 * @param {Object} props - The component props.
 * @param {HostProps} props.host - The host object containing the name and picture.
 * @returns {JSX.Element} The host component.
 */
export function Host({ host }: { host: HostProps }): JSX.Element {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className={styles.host}>
      <p className={styles.host__name}>
        {firstName}
        <br />
        {lastName}
      </p>
      <img
        className={styles.host__picture}
        src={host.picture}
        alt={`${firstName} ${lastName}`}
      />
    </div>
  );
}
