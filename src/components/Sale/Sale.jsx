import styles from "./Sale.module.scss";

import ArrowBlack from "../../assets/arrowUp.png";
import ArrowWhite from "../../assets/arrowWhite.png";

import Line1 from "../../assets/ЗНИЖКА -30%.png";
import Line2 from "../../assets/ЗНИЖКА -30% (1).png";
import Line1_1 from "../../assets/СКИДКА -30%.png";
import Line2_1 from "../../assets/СКИДКА -30% (1).png";

import Marquee from "react-fast-marquee";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";
import { useContext, useEffect } from "react";
import {
  fetchImage,
  fetchIsEmpty,
  fetchText,
  fetchTextRu,
  fetchTimer,
} from "../../redux/slices/saleSlice";
import Context from "../../hooks/useContext";

const Sale = ({ i18n }) => {
  const dispatch = useDispatch();
  const t = useContext(Context);
  const sale = useSelector((state) => state.sale);
  useEffect(() => {
    dispatch(fetchIsEmpty());
    dispatch(fetchImage());
    dispatch(fetchText());
    dispatch(fetchTextRu());
    dispatch(fetchTimer());
  }, []);
  return (
    <section className={styles.root} id="sale">
      <Marquee direction="right" className={styles.line2} autoFill={true}>
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line1 : Line1_1} />
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line2 : Line2_1} />
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line1 : Line1_1} />
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line2 : Line2_1} />
      </Marquee>
      <article className={styles.wrapper}>
        <div className={styles.cards_block}>
          <div
            className={styles.card_orange}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h3>{t("sale_h1")}</h3>
            <p>{t("sale_p1")}</p>
            <button onClick={() => dispatch(setClicked(true))}>
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
            <button onClick={() => dispatch(setClicked(true))}>
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
              onClick={() => dispatch(setClicked(true))}
            >
              <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
              {t("conslut_btn")}
            </button>
          </>
        ) : null}
      </article>
      <Marquee direction="left" className={styles.line3} autoFill={true}>
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line1 : Line1_1} />
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line2 : Line2_1} />
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line1 : Line1_1} />
        <img alt="Sale Amount" src={i18n.language === "ua" ? Line2 : Line2_1} />
      </Marquee>
    </section>
  );
};
export default Sale;
