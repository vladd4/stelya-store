import styles from "./Services.module.scss";

import { useEffect, useRef, useContext } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  setHeading,
  setImages,
  setText,
} from "../../redux/slices/productSlice";

import Slider from "./LinkSlider";

import Context from "../../hooks/useContext";

import Arrow from "../../assets/arrowWhite.png";

import { service_links } from "../../static_store/services";

const Services = () => {
  const t = useContext(Context);
  const imageRef = useRef(null);
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const handleCLick = (title, text, image, ref) => {
    dispatch(setHeading(title));
    dispatch(setText(text));
    dispatch(setImages(image));
    ref.current.classList.add(styles.animated);
    setTimeout(() => {
      ref.current.classList.remove(styles.animated);
    }, 1000);
  };

  useEffect(() => {
    service_links.forEach((item) => {
      new Image().src = item.image[0];
    });
  }, []);
  return (
    <>
      <section className={styles.root} id="offers">
        <article className={styles.wrapper}>
          <h1>{t("serv_h")}</h1>
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
                      handleCLick(link.title, link.text, link.image, imageRef)
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
            <Slider links={service_links} imageRef={imageRef} />
            <div ref={imageRef} className={styles.image_block}>
              <p>{t(product.text)}</p>
              <Link to="/products" onClick={toTop}>
                <img alt="Arrow" src={Arrow} width={30} height={30} />
                {t("more_btn")}
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
