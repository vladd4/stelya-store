import styles from "./ProductPage.module.scss";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

const ProductSlider = ({ images }) => {
  return (
    <Splide
      options={{
        heightRatio: 1.2,
        focus: "center",
        drag: true,
        perPage: 1,
        gap: "0%",
        pagination: true,
        arrows: true,
      }}
      className={styles.slider}
    >
      {images.length > 1 ? (
        images.map((image) => {
          return (
            <SplideSlide key={image}>
              <div
                style={{
                  height: "100%",
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </SplideSlide>
          );
        })
      ) : (
        <SplideSlide key={images}>
          <div
            style={{
              height: "100%",
              backgroundImage: `url(${images})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </SplideSlide>
      )}
    </Splide>
  );
};
export default ProductSlider;
