import styles from "./Order.module.scss";
import OrderColumn from "./OrderColumn";
import { useContext } from "react";
import Context from "../../hooks/useContext";

const Order = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root} id="workingstages">
      <article className={styles.wrapper}>
        <h1>{t("etaps_h")}</h1>
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
