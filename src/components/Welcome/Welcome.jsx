import styles from "./Welcome.module.scss";

import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow.png";
import { useDispatch } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";

const Welcome = () => {
  const dispatch = useDispatch();
  const handleShowForm = () => {
    dispatch(setClicked(true));
  };
  return (
    <section className={styles.root} id="welcome">
      <article className={styles.wrapper}>
        <img
          className={styles.logo}
          alt="StyleaStore"
          src={Logo}
          width={230}
          height={240}
        />
        <h1>
          StelyaStore - ваш надійний партнер у створенні ідеальної обстановки
        </h1>
        <p>
          Ми забезпечимо ваш комфорт та якість, гарантуючи прозорі ціни та
          надійність протягом тривалого періоду гарантії
        </p>
        <button onClick={handleShowForm}>
          <img alt="Arrow" src={Arrow} width={43} height={43} />
          Хочу стелю
        </button>
      </article>
    </section>
  );
};
export default Welcome;
