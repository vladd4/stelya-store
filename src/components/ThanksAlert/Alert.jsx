import styles from "./Alert.module.scss";

import { useContext } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setClickedAlert } from "../../redux/slices/formSlice";

import Context from "../../hooks/useContext";

import Close from "../../assets/close.png";

const Alert = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const t = useContext(Context);

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
        <h1>{t("alert_h")}</h1>
        <p>{t("alert_p")}</p>
      </article>
    );
  } else return null;
};
export default Alert;
