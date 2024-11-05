import { useState } from "react";
import "./carousel.scss";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import arrowRight from "../../utils/image/arrowRight.svg";

interface CarouselProps {
  item:
    | {
        id: string;
        title: string;
        cover: string;
        pictures: string[];
        description: string;
        host: { name: string; picture: string };
        rating: string;
        location: string;
        equipments: string[];
        tags: string[];
      }
    | undefined;
}

export function Carousel({ item }: CarouselProps) {
  const [index, setIndex] = useState(0);

  return (
    item && (
      <div className="carouselContainer">
        <img
          className="carousel"
          src={item.pictures[index]}
          alt={`Photo de ${item.title}`}
        />
        {item.pictures.length > 1 && (
          <div>
            <img
              className="arrowLeft"
              src={arrowLeft}
              onClick={() =>
                setIndex(
                  (index - 1 + item.pictures.length) % item.pictures.length
                )
              }
            />
            <img
              className="arrowRight"
              src={arrowRight}
              onClick={() => setIndex((index + 1) % item.pictures.length)}
            />
            <span className="tagline">{`${index + 1}/${
              item.pictures.length
            }`}</span>
          </div>
        )}
      </div>
    )
  );
}
