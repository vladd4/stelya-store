import styles from "./OrderBlock.module.scss";

const OrderBlock = ({ icon, h, title, right }) => {
  return (
    <article className={`${styles.root} ${right ? styles.right_block : ""}`}>
      <img alt="Order Icon" src={icon} width={106} height={100} />
      <h5>{h}</h5>
      <p>{title}</p>
    </article>
  );
};
export default OrderBlock;
