import "./card.scss";
interface CardProps {
  id: string;
  title: string;
  cover: string;
}

export function Card({ id, title, cover }: CardProps) {
  return (
    <div id={id} style={{ backgroundImage: `url(${cover})` }} className="card">
      <p>{title}</p>
    </div>
  );
}
