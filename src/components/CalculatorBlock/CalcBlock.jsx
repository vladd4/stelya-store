import styles from "./CalcBlock.module.scss";

const CalcBlock = () => {
  return (
    <section className={styles.root} id="contacts">
      <article className={styles.wrapper}>
        <h1>РОЗРАХУЙТЕ ВАРТІСТЬ ТА ТЕРМІНИ РЕМОНТУ ПРИМІЩЕННЯ</h1>
        <p>
          Наші експерти готові допомогти вам з будь-якими питаннями, надати
          необхідну інформацію та підтримку з вибором оптимальних рішень для
          вашої стелі.
        </p>
        <button className={styles.info_button}>
          Понеділок - Субота; 9:00 - 20:00
        </button>
        <button className={styles.tg_btn}>Telegram</button>
        <button className={styles.viber_btn}>Viber</button>
        <button className={styles.tel_btn}>Мобільний телефон</button>
      </article>
    </section>
  );
};
export default CalcBlock;
