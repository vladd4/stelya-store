import styles from "./Order.module.scss";
import OrderColumn from "./OrderColumn";
import Line from "../../assets/Line 2.png";

const Order = () => {
  return (
    <section className={styles.root} id="workingstages">
      <article className={styles.wrapper}>
        <h1>ЯК ПРОХОДИТЬ ПРОЦЕДУРА ЗАМОВЛЕННЯ</h1>
        <OrderColumn />
        <article className={styles.line_block}>
          <div className={styles.active_div}>1</div>
          <span></span>
          <div>2</div>
          <span></span>
          <div>3</div>
          <span></span>
          <div>4</div>
          <span></span>
          <div>5</div>
          <span></span>
          <div>6</div>
        </article>
      </article>
    </section>
  );
};
export default Order;
