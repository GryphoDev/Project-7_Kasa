import { Banner } from "../../component/banner/banner";
import imgApropos from "../../utils/image/imgApropos.png";
import "./about.scss";
import { aboutList } from "../../utils/data/aboutList";
import { Collapse } from "../../component/collapse/collapse";

export function About() {
  return (
    <>
      <Banner darken="0.3" backgroundImage={imgApropos}></Banner>
      <div className="collapseAbout">
        {aboutList.map((about) => (
          <Collapse
            key={about.title}
            title={about.title}
            content={about.content}
          />
        ))}
      </div>
    </>
  );
}
