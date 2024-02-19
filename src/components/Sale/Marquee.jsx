import styles from "./Sale.module.scss";

import Marquee from "react-fast-marquee";

import { marquee_images } from "../../static_store/marquee_images";

const MarqueeLine = ({ direction, i18n }) => {
  return (
    <Marquee
      direction={direction}
      className={`${direction === "left" ? styles.line3 : styles.line2}`}
      autoFill={true}
    >
      {marquee_images.map((marquee) => {
        return (
          <img
            alt="Sale Amount"
            src={i18n.language === "ua" ? marquee.image_1 : marquee.image_2}
          />
        );
      })}
    </Marquee>
  );
};

export default MarqueeLine;
