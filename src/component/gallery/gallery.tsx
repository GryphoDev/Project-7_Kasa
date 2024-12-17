import { useState } from "react";
import styles from "./gallery.module.scss";
import arrowLeft from "../../utils/image/arrowLeft.svg";
import arrowRight from "../../utils/image/arrowRight.svg";

/**
 * Props for the Gallery component.
 */
interface GalleryProps {
  pictures: string[]; // Array of image URLs to display in the gallery
  title: string; // Gallery title
}

/**
 * Gallery component to display a set of pictures in a sliding format with navigation.
 * @param {GalleryProps} props - Props containing the array of picture URLs and the title.
 * @returns {JSX.Element} The gallery component.
 */
export function Gallery({ pictures, title }: GalleryProps): JSX.Element {
  const [index, setIndex] = useState(0);

  return (
    pictures && (
      <div className={styles.gallery}>
        <img
          className={styles.gallery__pictures}
          src={pictures[index]}
          alt={`Photo de ${title}`}
        />
        {pictures.length > 1 && (
          <div>
            <img
              className={styles.gallery__arrowLeft}
              alt="arrowLeft"
              src={arrowLeft}
              onClick={() =>
                setIndex((index - 1 + pictures.length) % pictures.length)
              }
            />
            <img
              className={styles.gallery__arrowRight}
              alt="arrowRight"
              src={arrowRight}
              onClick={() => setIndex((index + 1) % pictures.length)}
            />
            <span className={styles.gallery__tagline}>{`${index + 1}/${
              pictures.length
            }`}</span>
          </div>
        )}
      </div>
    )
  );
}
