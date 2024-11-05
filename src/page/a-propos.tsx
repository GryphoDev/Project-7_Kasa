import { Banner } from "../component/banner/banner";
import imgApropos from "../utils/image/imgApropos.png";

export function APropos() {
  return (
    <>
      <Banner darken="0.3" backgroundImage={imgApropos}></Banner>
    </>
  );
}
