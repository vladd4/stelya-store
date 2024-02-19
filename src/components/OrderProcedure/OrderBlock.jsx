import styles from "./OrderBlock.module.scss";

import { useContext } from "react";

import Context from "../../hooks/useContext";

const OrderBlock = ({ icon, h, title, right, fade }) => {
  const t = useContext(Context);
  return (
    <article
      data-aos={fade}
      data-aos-duration="1500"
      className={`${styles.root} ${right ? styles.right_block : ""}`}
    >
      <img alt="Order Icon" src={icon} width={106} height={100} />
      <h5>{t(h)}</h5>
      <p>{t(title)}</p>
    </article>
  );
};
export default OrderBlock;
