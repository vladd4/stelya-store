import styles from "./Slider.module.scss";
import { useState } from "react";
import useResize from "../../hooks/useResize";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const Slider = ({ images }) => {
  const [slides, setSlides] = useState(7);
  const [mobile, setMobile] = useState(false);
  useResize(setSlides, setMobile);
  return (
    <Splide
      options={{
        height: mobile ? 80 : 130,
        type: "loop",
        focus: "center",
        drag: true,
        perPage: slides,
        gap: "5%",
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
                  backgroundSize: "contain",
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
