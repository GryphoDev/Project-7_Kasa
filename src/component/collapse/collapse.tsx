import { ReactNode, useState } from "react";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import "./collapse.scss";
interface CollapseProps {
  title: ReactNode;
  content: ReactNode;
}

export function Collapse({ title, content }: CollapseProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapseHeader" onClick={handleClick}>
        <p className="collapseTitle">{title}</p>
        <img
          src={arrowLeft}
          className={`icon ${isOpen ? "open" : ""}`}
          alt="Toggle collapse"
        />
      </div>
      <div className={`collapseContent ${isOpen ? "openContent" : ""}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="content">{content}</p>
        )}
      </div>
    </div>
  );
}
