import styles from "./Services.module.scss";

import { useContext } from "react";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

import { useDispatch } from "react-redux";

import {
  setHeading,
  setText,
  setImages,
} from "../../redux/slices/productSlice";

import Context from "../../hooks/useContext";

const Slider = ({ links, imageRef }) => {
  const dispatch = useDispatch();
  const t = useContext(Context);

  const handleSlideChange = (splide, ref) => {
    const newIndex = splide.index;
    const { title, text, image } = links[newIndex];
    dispatch(setHeading(title));
    dispatch(setText(text));
    dispatch(setImages(image));
    ref.current.classList.add(styles.animated);
    setTimeout(() => {
      ref.current.classList.remove(styles.animated);
    }, 1000);
  };

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
      onMoved={(splide) => handleSlideChange(splide, imageRef)}
      className={styles.slider}
    >
      {links
        ? links.map((link) => {
            return (
              <SplideSlide key={link.title}>
                <p>{t(link.title)}</p>
              </SplideSlide>
            );
          })
        : null}
    </Splide>
  );
};
export default Slider;
