import { Banner } from "../../component/banner/banner";
import imgApropos from "../../utils/image/imgApropos.webp";
import aboutList from "../../utils/data/aboutList.json";
import { Collapse } from "../../component/collapse/collapse";
import styles from "./about.module.scss";

export function About() {
  return (
    <main className="mainContainer">
      <Banner darken="0.3" backgroundImage={imgApropos}></Banner>
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
