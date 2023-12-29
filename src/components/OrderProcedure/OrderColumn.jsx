import styles from "./Order.module.scss";

import OrderBlock from "./OrderBlock";

import { groups } from "../../static_store/order_info";

const OrderColumn = () => {
  return (
    <article className={styles.order_column}>
      {groups.map((group) => {
        return (
          <OrderBlock
            key={group.h}
            h={group.h}
            icon={group.icon}
            title={group.title}
            right={group.right}
            fade={group.fade}
          />
        );
      })}
    </article>
  );
};
export default OrderColumn;
