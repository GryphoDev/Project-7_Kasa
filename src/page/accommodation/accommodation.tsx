import { useParams } from "react-router-dom";
import { Carousel } from "../../component/carousel/carousel";
import "./accommodation.scss";
import data from "../../utils/data/data.json";
import { Tag } from "../../component/tag/tag";
import { StarRating } from "../../component/starRating/starRating";
import { Host } from "../../component/host/host";

export function Logement() {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);
  console.log(item);

  return (
    <div>
      <Carousel item={item} />
      <div className="titleLocation">
        <p className="title">{item?.title}</p>
        <p className="location">{item?.location}</p>
        <div className="tagContainer">
          {item?.tags.map((tagItem) => (
            <Tag key={tagItem} tagItem={tagItem} />
          ))}
        </div>
        <div className="starHostContainer">
          <StarRating rating={parseFloat(item?.rating ?? "0")} />
          {item?.host && <Host host={item.host} />}
        </div>
      </div>
    </div>
  );
}
