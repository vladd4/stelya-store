import styles from "./Services.module.scss";

import Arrow from "../../assets/arrowWhite.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setHeading,
  setImages,
  setText,
} from "../../redux/slices/productSlice";
import Slider from "./LinkSlider";
import { useContext } from "react";
import Context from "../../hooks/useContext";

import Image1 from "../../assets/service-illustration/1/1.jpg";
import Image1_2 from "../../assets/service-illustration/1/2.jpg";
import Image1_3 from "../../assets/service-illustration/1/3.jpg";
import Image1_4 from "../../assets/service-illustration/1/4.jpg";

import Image2 from "../../assets/service-illustration/2/1.jpg";
import Image2_2 from "../../assets/service-illustration/2/2.jpg";
import Image2_3 from "../../assets/service-illustration/2/3.jpg";
import Image2_4 from "../../assets/service-illustration/2/4.jpg";

import Image3 from "../../assets/service-illustration/3/1.jpg";
import Image3_2 from "../../assets/service-illustration/3/2.jpg";
import Image3_3 from "../../assets/service-illustration/3/3.jpg";
import Image3_4 from "../../assets/service-illustration/3/4.jpg";

import Image4 from "../../assets/service-illustration/4/1.jpg";
import Image4_2 from "../../assets/service-illustration/4/2.jpg";
import Image4_3 from "../../assets/service-illustration/4/3.jpg";

import Image5 from "../../assets/service-illustration/5/1.jpg";
import Image5_2 from "../../assets/service-illustration/5/2.jpg";
import Image5_3 from "../../assets/service-illustration/5/3.jpg";

import Image6 from "../../assets/service-illustration/6/1.jpg";
import Image6_2 from "../../assets/service-illustration/6/2.jpg";
import Image6_3 from "../../assets/service-illustration/6/3.jpg";

import Image7 from "../../assets/service-illustration/7/1.jpg";
import Image7_2 from "../../assets/service-illustration/7/2.jpg";
import Image7_3 from "../../assets/service-illustration/7/3.jpg";

import Image8 from "../../assets/service-illustration/8/1.jpg";
import Image8_2 from "../../assets/service-illustration/8/2.jpg";
import Image8_3 from "../../assets/service-illustration/8/3.jpg";

import Image9 from "../../assets/service-illustration/9/1.jpg";
import Image9_2 from "../../assets/service-illustration/9/2.jpg";
import Image9_3 from "../../assets/service-illustration/9/3.jpg";

import Image10 from "../../assets/service-illustration/10/1.jpg";
import Image10_2 from "../../assets/service-illustration/10/2.jpg";
import Image10_3 from "../../assets/service-illustration/10/3.jpg";

import Image11 from "../../assets/service-illustration/11/1.jpg";
import Image11_2 from "../../assets/service-illustration/11/2.jpg";
import Image11_3 from "../../assets/service-illustration/11/3.jpg";

import Image12 from "../../assets/service-illustration/12/1.jpg";
import Image12_2 from "../../assets/service-illustration/12/2.jpg";
import Image12_3 from "../../assets/service-illustration/12/3.jpg";

import Image13 from "../../assets/service-illustration/13/1.jpg";
import Image13_2 from "../../assets/service-illustration/13/2.jpg";
import Image13_3 from "../../assets/service-illustration/13/3.jpg";

import Image14 from "../../assets/service-illustration/14/1.jpg";
import Image14_2 from "../../assets/service-illustration/14/2.jpg";
import Image14_3 from "../../assets/service-illustration/14/3.jpg";

const service_links = [
  {
    title: "stelya_1_h",
    number: "01",
    text: "stelya_1_p",
    image: [Image1, Image1_2, Image1_3, Image1_4],
  },
  {
    title: "stelya_2_h",
    number: "02",
    text: "stelya_2_p",
    image: [Image2, Image2_2, Image2_3, Image2_4],
  },
  {
    title: "stelya_3_h",
    number: "03",
    text: "stelya_3_p",
    image: [Image3, Image3_2, Image3_3, Image3_4],
  },
  {
    title: "stelya_4_h",
    number: "04",
    text: "stelya_4_p",
    image: [Image4, Image4_2, Image4_3],
  },
  {
    title: "stelya_5_h",
    number: "05",
    text: "stelya_5_p",
    image: [Image5, Image5_2, Image5_3],
  },
  {
    title: "stelya_6_h",
    number: "06",
    text: "stelya_6_p",
    image: [Image6, Image6_2, Image6_3],
  },
  {
    title: "stelya_7_h",
    number: "07",
    text: "stelya_7_p",
    image: [Image7, Image7_2, Image7_3],
  },
  {
    title: "stelya_8_h",
    number: "08",
    text: "stelya_8_p",
    image: [Image8, Image8_2, Image8_3],
  },
  {
    title: "stelya_9_h",
    number: "09",
    text: "stelya_9_p",
    image: [Image9, Image9_2, Image9_3],
  },
  {
    title: "stelya_10_h",
    number: "10",
    text: "stelya_10_p",
    image: [Image10, Image10_2, Image10_3],
  },
  {
    title: "stelya_11_h",
    number: "11",
    text: "stelya_11_p",
    image: [Image11, Image11_2, Image11_3],
  },
  {
    title: "stelya_12_h",
    number: "12",
    text: "stelya_12_p",
    image: [Image12, Image12_2, Image12_3],
  },
  {
    title: "stelya_13_h",
    number: "13",
    text: "stelya_13_p",
    image: [Image13, Image13_2, Image13_3],
  },
  {
    title: "stelya_14_h",
    number: "14",
    text: "stelya_14_p",
    image: [Image14, Image14_2, Image14_3],
  },
];

const Services = () => {
  const t = useContext(Context);
  const product = useSelector((state) => state.product);
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const dispatch = useDispatch();
  const handleCLick = (title, text, image) => {
    dispatch(setHeading(title));
    dispatch(setText(text));
    dispatch(setImages(image));
  };
  return (
    <>
      <section className={styles.root} id="offers">
        <article className={styles.wrapper}>
          <h1>НАШІ ПОСЛУГИ</h1>
          <article className={styles.info_block}>
            <div
              className={styles.links_block}
              data-aos="fade-right"
              data-aos-duration="1500"
            >
              {service_links.map((link) => {
                return (
                  <p
                    key={link.title}
                    onClick={() =>
                      handleCLick(link.title, link.text, link.image)
                    }
                    className={
                      link.title === product.heading ? styles.current : ""
                    }
                  >
                    <b>{link.number}</b> &nbsp;{t(link.title)}
                  </p>
                );
              })}
            </div>
            <Slider links={service_links} />
            <div className={styles.image_block}>
              <p>{t(product.text)}</p>
              <Link to="/products" onClick={toTop}>
                <img alt="Arrow" src={Arrow} width={30} height={30} />
                Дізнатись більше
              </Link>
              <img
                alt="Stelya"
                src={product.images[0]}
                width={660}
                height={515}
              />
            </div>
          </article>
        </article>
      </section>
    </>
  );
};
export default Services;
