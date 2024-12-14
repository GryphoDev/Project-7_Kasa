import { Banner } from "../../component/banner/banner";
import imgApropos from "../../utils/image/imgApropos.webp";
import aboutList from "../../utils/data/aboutList.json";
import { Collapse } from "../../component/collapse/collapse";
import styles from "./about.module.scss";

/**
 * About page component that displays a banner and a list of collapsible sections with information.
 * @returns {JSX.Element} The about page component.
 */

export function About(): JSX.Element {
  return (
    <main className="mainContainer">
      {/**
       * Banner displaying an image for the About page.
       */}
      <Banner darken="0.3" backgroundImage={imgApropos}></Banner>
      {/**
       * Collapsible sections containing informational content.
       */}
      <div className={styles.collapsesContainer}>
        {aboutList.map((about) => (
          <Collapse
            key={about.title}
            title={about.title}
            content={about.content}
          />
        ))}
      </div>
    </main>
  );
}
