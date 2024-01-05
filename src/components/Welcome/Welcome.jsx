import styles from "./Welcome.module.scss";

import Logo from "../../assets/logo.png";
import Arrow from "../../assets/arrow.png";
import { useDispatch } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";
import { useContext } from "react";
import Context from "../../hooks/useContext";

import ReactPixel from "react-facebook-pixel";

const Welcome = () => {
  const dispatch = useDispatch();
  const t = useContext(Context);
  const handleShowForm = () => {
    dispatch(setClicked(true));
    ReactPixel.track("InitiateCheckout");
  };
  return (
    <section className={styles.root} id="welcome">
      <article
        className={styles.wrapper}
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <img
          className={styles.logo}
          alt="StyleaStore"
          src={Logo}
          width={230}
          height={240}
        />
        <h1>{t("welcome_h")}</h1>
        <p>{t("welcome_p")}</p>
        <button onClick={handleShowForm}>
          <img alt="Arrow" src={Arrow} width={43} height={43} />
          {t("welcome_btn")}
        </button>
      </article>
    </section>
  );
};
export default Welcome;
