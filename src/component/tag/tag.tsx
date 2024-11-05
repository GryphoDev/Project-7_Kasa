import "./tag.scss";

export function Tag({ tagItem }: { tagItem: string }) {
  return <span className="tag">{tagItem}</span>;
}
