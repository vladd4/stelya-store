import styles from "./Sale.module.scss";

import { useContext, useEffect } from "react";

import Countdown from "react-countdown";

import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";
import {
  fetchImage,
  fetchIsEmpty,
  fetchText,
  fetchTextRu,
  fetchTimer,
} from "../../redux/slices/saleSlice";

import Context from "../../hooks/useContext";

// eslint-disable-next-line
import ReactPixel from "react-facebook-pixel";

import ArrowBlack from "../../assets/arrowUp.png";
import ArrowWhite from "../../assets/arrowWhite.png";
import MarqueeLine from "./Marquee";

const Sale = ({ i18n }) => {
  const dispatch = useDispatch();
  const t = useContext(Context);
  const sale = useSelector((state) => state.sale);

  const showForm = () => {
    dispatch(setClicked(true));
    ReactPixel.track("InitiateCheckout");
  };

  useEffect(() => {
    dispatch(fetchIsEmpty());
    dispatch(fetchImage());
    dispatch(fetchText());
    dispatch(fetchTextRu());
    dispatch(fetchTimer());
  }, [dispatch]);
  return (
    <section className={styles.root} id="sale">
      <MarqueeLine direction="right" i18n={i18n} />
      <article className={styles.wrapper}>
        <div className={styles.cards_block}>
          <div
            className={styles.card_orange}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h3>{t("sale_h1")}</h3>
            <p>{t("sale_p1")}</p>
            <button onClick={showForm}>
              <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
              {t("sale_btn")}
            </button>
          </div>
          <div
            className={styles.card_black}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h3>{t("sale_h2")}</h3>
            <p>{t("sale_p2")}</p>
            <button onClick={showForm}>
              <img alt="Arrow" width={40} height={40} src={ArrowWhite} />
              {t("sale_btn")}
            </button>
          </div>
        </div>
        {sale && sale.showSale ? (
          <>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className={styles.sale_img}
              style={{ backgroundImage: `url(${sale.saleImage})` }}
            ></div>
            <p data-aos="fade-up" data-aos-duration="1500">
              {sale.isRu
                ? sale.saleTextRu?.split(".").join("\n")
                : sale.saleText?.split(".").join("\n")}
            </p>
            <Countdown date={String(sale.timerDate)} autoStart />
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={showForm}
            >
              <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
              {t("conslut_btn")}
            </button>
          </>
        ) : null}
      </article>
      <MarqueeLine direction="left" i18n={i18n} />
    </section>
  );
};
export default Sale;
