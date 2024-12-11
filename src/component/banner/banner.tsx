import styles from "./banner.module.scss";
import { ReactNode } from "react";

interface BannerProps {
  children?: ReactNode;
  backgroundImage: string;
  darken?: string;
}

export function Banner({ children, backgroundImage, darken }: BannerProps) {
  return (
    <div
      className={styles.banner}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className={styles.banner__overlay}
        style={{ backgroundColor: `rgba(0, 0, 0, ${darken})` }}
      >
        <h1 className={styles.banner__overlay__title}>{children}</h1>
      </div>
    </div>
  );
}
