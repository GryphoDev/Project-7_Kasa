import styles from "./host.module.scss";

interface HostProps {
  name: string;
  picture: string;
}

interface HostComponentProps {
  host: HostProps;
}

export function Host({ host }: HostComponentProps) {
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
