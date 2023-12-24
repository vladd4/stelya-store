import styles from "./Sale.module.scss";

import ArrowBlack from "../../assets/arrowUp.png";
import ArrowWhite from "../../assets/arrowWhite.png";
import Line1 from "../../assets/ЗНИЖКА -30%.png";
import Line2 from "../../assets/ЗНИЖКА -30% (1).png";

import Marquee from "react-fast-marquee";
import Countdown from "react-countdown";
import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";
import { useEffect } from "react";
import {
  fetchImage,
  fetchIsEmpty,
  fetchText,
  fetchTimer,
} from "../../redux/slices/saleSlice";

const Sale = () => {
  const dispatch = useDispatch();
  const sale = useSelector((state) => state.sale);
  useEffect(() => {
    dispatch(fetchIsEmpty());
    dispatch(fetchImage());
    dispatch(fetchText());
    dispatch(fetchTimer());
  }, []);
  return (
    <section className={styles.root} id="sale">
      <Marquee direction="right" className={styles.line2} autoFill={true}>
        <img alt="Sale Amount" src={Line1} />
        <img alt="Sale Amount" src={Line2} />
        <img alt="Sale Amount" src={Line1} />
        <img alt="Sale Amount" src={Line2} />
      </Marquee>
      <article className={styles.wrapper}>
        <div className={styles.cards_block}>
          <div
            className={styles.card_orange}
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h3>Дякуємо за вірність</h3>
            <p>
              При повторному замовленні отримайте знижку 5% від вартості
              послуги.
            </p>
            <button onClick={() => dispatch(setClicked(true))}>
              <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
              Дізнатись більше
            </button>
          </div>
          <div
            className={styles.card_black}
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <h3>Швидке замовлення</h3>
            <p>
              Укладіть угоду в день виміру та отримайте знижку 10% від вартості
              послуги.
            </p>
            <button onClick={() => dispatch(setClicked(true))}>
              <img alt="Arrow" width={40} height={40} src={ArrowWhite} />
              Дізнатись більше
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
              {sale.saleText}
            </p>
            <Countdown date={String(sale.timerDate)} autoStart />
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              onClick={() => dispatch(setClicked(true))}
            >
              <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
              Дізнатись більше
            </button>
          </>
        ) : null}
      </article>
      <Marquee direction="left" className={styles.line3} autoFill={true}>
        <img alt="Sale Amount" src={Line1} />
        <img alt="Sale Amount" src={Line2} />
        <img alt="Sale Amount" src={Line1} />
        <img alt="Sale Amount" src={Line2} />
      </Marquee>
    </section>
  );
};
export default Sale;
