import { useState } from "react";
import styles from "./carousel.module.scss";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import arrowRight from "../../utils/image/arrowRight.svg";

/**
 * Props for the Carousel component.
 */
interface CarouselProps {
  pictures: string[]; // Array of image URLs to display in the carousel
  title: string; // Carousel title
}

/**
 * Carousel component to display a set of pictures in a sliding format with navigation.
 * @param {CarouselProps} props - Props containing the array of picture URLs and the title.
 * @returns {JSX.Element} The carousel component.
 */
export function Carousel({ pictures, title }: CarouselProps): JSX.Element {
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
