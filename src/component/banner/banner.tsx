import "./banner.scss";
import { ReactNode } from "react";

interface BannerProps {
  children?: ReactNode;
  backgroundImage: string;
  darken?: string;
}

export function Banner({ children, backgroundImage, darken }: BannerProps) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div
        className="overlay"
        style={{ backgroundColor: `rgba(0, 0, 0, ${darken})` }}
      >
        <p>{children}</p>
      </div>
    </div>
  );
}
