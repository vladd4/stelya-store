import styles from "./CalcBlock.module.scss";

import { useContext } from "react";

import Context from "../../hooks/useContext";

const CalcBlock = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root} id="form">
      <article className={styles.wrapper}>
        <h1>{t("calc_h")}</h1>
        <p>{t("calc_p")}</p>
        <a
          href="https://t.me/+380967772697"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-left"
          data-aos-duration="1500"
          className={styles.tg_btn}
        >
          Telegram
        </a>
        <a
          href="viber://chat?number=+380967772697"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-right"
          data-aos-duration="1500"
          className={styles.viber_btn}
        >
          Viber
        </a>
        <a
          href="tel:+380967772697"
          data-aos="fade-left"
          data-aos-duration="1500"
          className={styles.tel_btn}
        >
          {t("calc_phone")}
        </a>
      </article>
    </section>
  );
};
export default CalcBlock;
