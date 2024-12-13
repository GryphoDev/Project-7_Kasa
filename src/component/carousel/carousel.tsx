import { useState } from "react";
import styles from "./carousel.module.scss";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import arrowRight from "../../utils/image/arrowRight.svg";

export function Carousel({
  pictures,
  title,
}: {
  pictures: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  return (
    pictures && (
      <div className={styles.carousel}>
        <img
          className={styles.carousel__pictures}
          src={pictures[index]}
          alt={`Photo de ${title}`}
        />
        {pictures.length > 1 && (
          <div>
            <img
              className={styles.carousel__arrowLeft}
              alt="arrowLeft"
              src={arrowLeft}
              onClick={() =>
                setIndex((index - 1 + pictures.length) % pictures.length)
              }
            />
            <img
              className={styles.carousel__arrowRight}
              alt="arrowRight"
              src={arrowRight}
              onClick={() => setIndex((index + 1) % pictures.length)}
            />
            <span className={styles.carousel__tagline}>{`${index + 1}/${
              pictures.length
            }`}</span>
          </div>
        )}
      </div>
    )
  );
}
