import styles from "./Alert.module.scss";

import Close from "../../assets/close.png";
import { useDispatch, useSelector } from "react-redux";
import { setClickedAlert } from "../../redux/slices/formSlice";

const Alert = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  if (form.isClickedAlert) {
    return (
      <article className={styles.root}>
        <img
          className={styles.close_btn}
          alt="Close"
          src={Close}
          width={25}
          height={25}
          onClick={() => dispatch(setClickedAlert(false))}
        />
        <h1>ДЯКУЄМО ЩО ОБИРАЄТЕ НАС!</h1>
        <p>Наш менеджер зв'яжеться з вами протягом 30 хвилин.</p>
      </article>
    );
  } else return null;
};
export default Alert;
