import { useParams, Navigate } from "react-router-dom";
import styles from "./accommodation.module.scss";
import data from "../../utils/data/data.json";
import { Gallery } from "../../component/gallery/gallery";
import { Tag } from "../../component/tag/tag";
import { StarRating } from "../../component/starRating/starRating";
import { Host } from "../../component/host/host";
import { Collapse } from "../../component/collapse/collapse";

/**
 * Accommodation page component that displays detailed information about a specific accommodation.
 * If the accommodation is not found, redirects to the error page.
 * @returns {JSX.Element} The accommodation page component.
 */
export function Accomodation(): JSX.Element {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  if (!item) {
    return <Navigate to="/error" replace />;
  }
  const details = item
    ? [
        { key: "Description", value: item.description },
        { key: "Équipements", value: item.equipments },
      ]
    : [];

  return (
    <main className="mainContainer">
      {/**
       * Carousel displaying the accommodation's pictures.
       */}
      <Gallery pictures={item.pictures} title={item.title} />

      {/**
       * Accommodation details including title, location, tags, star rating, and host information.
       */}
      <div className={styles.accommodation}>
        <div>
          <h2 className={styles.accommodation__title}>{item.title}</h2>
          <p className={styles.accommodation__location}>{item.location}</p>
          <div className={styles.accommodation__tags}>
            {item.tags.map((tagItem) => (
              <Tag key={tagItem} tagItem={tagItem} />
            ))}
          </div>
        </div>
        <div className={styles.accommodation__stars}>
          <StarRating rating={parseFloat(item.rating ?? "0")} />
          {item.host && <Host host={item.host} />}
        </div>
      </div>

      {/**
       * Collapsible sections for additional details such as description and equipment.
       */}
      <div className={styles.collapses}>
        {details.map((detail) => (
          <Collapse
            key={detail.key}
            title={detail.key}
            content={detail.value}
          />
        ))}
      </div>
    </main>
  );
}
