import styles from "./Slider.module.scss";
import { useState } from "react";
import useResize from "../../hooks/useResize";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Slider = ({ images }) => {
  const [slides, setSlides] = useState(5);
  useResize(setSlides);
  return (
    <Splide
      options={{
        height: 130,
        type: "loop",
        focus: "center",
        drag: true,
        perPage: slides,
        gap: "1%",
        autoplay: true,
        interval: 2500,
        pagination: false,
        arrows: false,
      }}
      className={styles.slider}
    >
      {images
        ? images.map((image, index) => {
            return (
              <SplideSlide
                key={index}
                id="slides"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            );
          })
        : null}
    </Splide>
  );
};
export default Slider;
