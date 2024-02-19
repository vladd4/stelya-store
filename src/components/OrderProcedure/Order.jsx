import styles from "./Order.module.scss";

import { useContext } from "react";

import OrderColumn from "./OrderColumn";

import Context from "../../hooks/useContext";

const order_numbers = [2, 3, 4, 5, 6];

const Order = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root} id="workingstages">
      <article className={styles.wrapper}>
        <h1>{t("etaps_h")}</h1>
        <OrderColumn />
        <article className={styles.line_block}>
          <div className={styles.active_div}>1</div>
          {order_numbers.map((number) => {
            return (
              <>
                <span></span>
                <div>{number}</div>
              </>
            );
          })}
        </article>
      </article>
    </section>
  );
};
export default Order;
