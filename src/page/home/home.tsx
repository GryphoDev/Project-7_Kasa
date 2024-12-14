import { Banner } from "../../component/banner/banner";
import imgHomePage from "../../utils/image/imgHomePage.webp";
import { useIsLargeScreen } from "../../utils/hook/isLargeScreen";
import data from "../../utils/data/data.json";
import { Card } from "../../component/card/card";
import styles from "./home.module.scss";
import { Link } from "react-router-dom";

/**
 * Home page component that displays a banner and a gallery of accommodations.
 * @returns {JSX.Element} The home page component.
 */
export function Home(): JSX.Element {
  const isLargeScreen = useIsLargeScreen();

  return (
    <main className="mainContainer">
      {/**
       * Banner with a dynamic message that changes based on screen size.
       */}
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
      {/**
       * Gallery of accommodation cards.
       * Each card links to a detailed page for the respective accommodation.
       */}
      <div className={styles.gallery}>
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
    </main>
  );
}
