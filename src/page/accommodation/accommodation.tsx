import { useParams, Navigate } from "react-router-dom";
import styles from "./accommodation.module.scss";
import data from "../../utils/data/data.json";
import { Carousel } from "../../component/carousel/carousel";
import { Tag } from "../../component/tag/tag";
import { StarRating } from "../../component/starRating/starRating";
import { Host } from "../../component/host/host";
import { Collapse } from "../../component/collapse/collapse";

export function Logement() {
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
    item && (
      <main className="mainContainer">
        <Carousel pictures={item.pictures} title={item.title} />
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
    )
  );
}
