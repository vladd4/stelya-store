import styles from "./Services.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Slider = ({ links }) => {
  return (
    <Splide
      options={{
        height: 50,
        type: "loop",
        focus: "center",
        drag: false,
        perPage: 1,
        gap: "0%",
        pagination: false,
        arrows: true,
      }}
      className={styles.slider}
    >
      {links
        ? links.map((link) => {
            return (
              <SplideSlide key={link.title}>
                <p>{link.title}</p>
              </SplideSlide>
            );
          })
        : null}
    </Splide>
  );
};
export default Slider;
