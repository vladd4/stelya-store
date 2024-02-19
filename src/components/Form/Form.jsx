import styles from "./Form.module.scss";

import { useContext } from "react";

import { useForm } from "react-hook-form";

import { useSelector, useDispatch } from "react-redux";
import { setClicked, setClickedAlert } from "../../redux/slices/formSlice";

import { sendFormToTelegram } from "../../utils/sendTelegram";

import Context from "../../hooks/useContext";

// eslint-disable-next-line
import ReactPixel from "react-facebook-pixel";

import Close from "../../assets/Group 3.png";
import Arrow from "../../assets/arrow.png";

const Form = () => {
  const { register, reset, handleSubmit } = useForm();
  const t = useContext(Context);
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.name.trim() === "" || data.phone.trim() === "") {
      alert("Заповніть, будь-ласка, необхідні поля!");
      return;
    }
    let string = `Проект: StelyaStore \nІм'я: ${data.name} \nНомер телефону: ${data.phone} \nE-mail: ${data.mail} \n`;
    sendFormToTelegram(string);
    reset();
    dispatch(setClicked(false));
    dispatch(setClickedAlert(true));
    ReactPixel.track("Purchase", {
      value: 1,
      currency: "USD",
    });
  };

  if (form.isClicked) {
    return (
      <section className={styles.root}>
        <article className={styles.wrapper}>
          <div className={styles.info_block}>
            <h1>{t("form_h")}</h1>
            <div className={styles.contacts}>
              <h5>{t("contact_h")}</h5>
              <a href="tel:+380957772697">+38(095) 777-26-97</a>
              <a href="tel:+380967772697">+38(096) 777-26-97</a>
              <a href="tel:+380737772697">+38(073) 777-26-97</a>
              <a href="mailto:Stelyastore86@gmail.com">
                Stelyastore86@gmail.com
              </a>
              <a
                href="https://maps.app.goo.gl/4d7DExM4ooRvLDwx9"
                target="_blank"
                rel="noreferrer"
              >
                {t("address")}
              </a>
            </div>
          </div>
          <div className={styles.empty_block}></div>
          <div className={styles.form_block}>
            <img
              alt="Close"
              src={Close}
              width={30}
              height={30}
              onClick={() => dispatch(setClicked(false))}
            />
            <h1>{t("form_h")}</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder={t("name")}
                name="name"
                required
                {...register("name")}
              />
              <input
                placeholder={t("email")}
                name="mail"
                {...register("mail")}
              />
              <input
                placeholder={t("phone")}
                name="phone"
                required
                {...register("phone")}
              />
              <button type="submit">
                <img alt="Arrow" src={Arrow} width={25} height={25} />
                {t("form_btn")}
              </button>
            </form>
          </div>
        </article>
      </section>
    );
  } else return null;
};
export default Form;
