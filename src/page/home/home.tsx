import { Banner } from "../../component/banner/banner";
import imgHomePage from "../../utils/image/imgHomePage.png";
import { useIsLargeScreen } from "../../utils/hook/isLargeScreen";
import data from "../../utils/data/data.json";
import { Card } from "../../component/card/card";
import "./home.scss";
import { Link } from "react-router-dom";
export function Home() {
  const isLargeScreen = useIsLargeScreen();
  console.log(data);

  return (
    <div className="mainContainer">
      <Banner darken="0.6" backgroundImage={imgHomePage}>
        {isLargeScreen ? (
          "Chez vous, partout et ailleurs"
        ) : (
          <>
            Chez vous,
            <br /> partout et ailleurs
          </>
        )}
      </Banner>
      <div className="mainContent">
        {data.map((item) => (
          <Link to={`/accommodation/${item.id}`} key={item.id}>
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              cover={item.cover}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
