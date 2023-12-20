import styles from "./Sale.module.scss";

import ArrowBlack from "../../assets/arrowUp.png";
import ArrowWhite from "../../assets/arrowWhite.png";
import Image from "../../assets/Rectangle-12.webp";
import Line1 from "../../assets/ЗНИЖКА -30%.png";
import Line2 from "../../assets/ЗНИЖКА -30% (1).png";

import Marquee from "react-fast-marquee";
import Countdown from "react-countdown";
import { useDispatch } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";

const Sale = () => {
  const dispatch = useDispatch();
  return (
    <section className={styles.root} id="sale">
      <Marquee direction="right" className={styles.line2}>
        <div>
          <img alt="Sale Amount" src={Line1} />
          <img alt="Sale Amount" src={Line2} />
          <img alt="Sale Amount" src={Line1} />
          <img alt="Sale Amount" src={Line2} />
        </div>
      </Marquee>
      <article className={styles.wrapper}>
        <div className={styles.cards_block}>
          <div className={styles.card_orange}>
            <h3>“Дякуємо за вірність”</h3>
            <p>
              При повторному замовленні отримайте знижку 3% від вартості
              послуги.
            </p>
            <button onClick={() => dispatch(setClicked(true))}>
              <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
              Дізнатись більше
            </button>
          </div>
          <div className={styles.card_black}>
            <h3>“Швидке замовлення”</h3>
            <p>
              Укладіть угоду в день виміру та отримайте знижку 3% від вартості
              послуги.
            </p>
            <button onClick={() => dispatch(setClicked(true))}>
              <img alt="Arrow" width={40} height={40} src={ArrowWhite} />
              Дізнатись більше
            </button>
          </div>
        </div>
        <div
          className={styles.sale_img}
          style={{ backgroundImage: `url(${Image})` }}
        ></div>
        <p>
          Беріть участь в акції, яка дозволяє Вам отримати знижку 30% на стелі
          “TEQTUM EURO” Поспішайте, залишилось 200 м².
        </p>
        <Countdown date={"2023-12-22"} autoStart />
        <div className={styles.timer_div}>
          <p>Дні</p>
          <p>Години</p>
          <p>Хвилини</p>
          <p>Секунди</p>
        </div>
        <button onClick={() => dispatch(setClicked(true))}>
          <img alt="Arrow" width={40} height={40} src={ArrowBlack} />
          Дізнатись більше
        </button>
      </article>
      <Marquee direction="left" className={styles.line3}>
        <div>
          <img alt="Sale Amount" src={Line1} />
          <img alt="Sale Amount" src={Line2} />
          <img alt="Sale Amount" src={Line1} />
          <img alt="Sale Amount" src={Line2} />
        </div>
      </Marquee>
    </section>
  );
};
export default Sale;
