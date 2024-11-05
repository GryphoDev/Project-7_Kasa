import { Banner } from "../component/banner/banner";
import imgHomePage from "../utils/image/imgHomePage.png";
import { useIsLargeScreen } from "../utils/hook/isLargeScreen";
export function Home() {
  const isLargeScreen = useIsLargeScreen();

  return (
    <>
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
    </>
  );
}
