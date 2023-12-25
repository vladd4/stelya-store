import styles from "./CalcBlock.module.scss";

const CalcBlock = () => {
  return (
    <section className={styles.root} id="form">
      <article className={styles.wrapper}>
        <h1>РОЗРАХУЙТЕ ВАРТІСТЬ ТА ТЕРМІНИ РЕМОНТУ ПРИМІЩЕННЯ</h1>
        <p>
          Виникли питання? Залишай свій контактний номер і ми допоможемо вам з
          будь-якими питаннями, надамо необхідну інформацію та підтримку з
          вибором оптимальних рішень для вашої стелі.
        </p>
        <button
          data-aos="fade-left"
          data-aos-duration="1500"
          className={styles.tg_btn}
        >
          Telegram
        </button>
        <button
          data-aos="fade-right"
          data-aos-duration="1500"
          className={styles.viber_btn}
        >
          Viber
        </button>
        <button
          data-aos="fade-left"
          data-aos-duration="1500"
          className={styles.tel_btn}
        >
          Зателефонувати
        </button>
      </article>
    </section>
  );
};
export default CalcBlock;
