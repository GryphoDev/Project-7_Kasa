import styles from "./banner.module.scss";
import { ReactNode } from "react";

/**
 * Props for the Banner component.
 */
interface BannerProps {
  children?: ReactNode; // Optional children to be displayed inside the banner
  backgroundImage: string; // URL for the background image of the banner
  darken?: string; // Optional value to adjust the darkness level of the overlay
}

/**
 * Banner component to display a banner with a background image and optional darkened overlay.
 * @param {BannerProps} props - The properties for the banner component.
 * @returns {JSX.Element} The Banner component.
 */
export function Banner({
  children,
  backgroundImage,
  darken,
}: BannerProps): JSX.Element {
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
