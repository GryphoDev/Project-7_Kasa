import "./host.scss";

interface HostProps {
  name: string;
  picture: string;
}

interface HostComponentProps {
  host: HostProps;
}

export function Host({ host }: HostComponentProps): JSX.Element {
  const [firstName, lastName] = host.name.split(" ");

  return (
    <div className="hostNameContainer">
      <p className="hostName">
        {firstName}
        <br />
        {lastName}
      </p>
      <img className="hostImage" src={host.picture} alt="" />
    </div>
  );
}
