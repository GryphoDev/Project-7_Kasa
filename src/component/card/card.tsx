import "./card.scss";
interface CardProps {
  id: string;
  title: string;
  cover: string;
}

export function Card({ id, title, cover }: CardProps) {
  return (
    <div id={id} className="card">
      <img src={cover} alt="" />
      <p>{title}</p>
    </div>
  );
}
