import "./host.scss";

interface HostProps {
  name: string;
  picture: string;
}

interface HostComponentProps {
  host: HostProps;
}

export function Host({ host }: HostComponentProps): JSX.Element {
  return (
    <div className="hostNameContainer">
      <p className="hostName">{host.name}</p>
      <img className="hostImage" src={host.picture} alt="" />
    </div>
  );
}
