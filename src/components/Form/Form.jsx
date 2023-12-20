import styles from "./Form.module.scss";

import Close from "../../assets/Group 3.png";
import Arrow from "../../assets/arrow.png";

import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { setClicked, setClickedAlert } from "../../redux/slices/formSlice";

import { sendFormToTelegram } from "../../utils/sendTelegram";

const Form = () => {
  const { register, reset, handleSubmit } = useForm();
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
  };

  if (form.isClicked) {
    return (
      <section className={styles.root}>
        <article className={styles.wrapper}>
          <div className={styles.info_block}>
            <h1>ЗАПОВНІТЬ ФОРМУ</h1>
            <div className={styles.contacts}>
              <h5>Контакти</h5>
              <a href="tel:">+38(095) 777-26-97</a>
              <a href="tel:">+38(095) 777-26-97</a>
              <a href="tel:">+38(095) 777-26-97</a>
              <a href="mailto:">example@gmail.com</a>
              <a href="#">вул. Юрія Литвинського 33 м.Київ 02000</a>
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
            <h1>ЗАПОВНІТЬ ФОРМУ</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                placeholder="Ім'я"
                name="name"
                required
                {...register("name")}
              />
              <input
                placeholder="Електронна пошта"
                name="mail"
                {...register("mail")}
              />
              <input
                placeholder="Номер телефону"
                name="phone"
                required
                {...register("phone")}
              />
              <button type="submit">
                <img alt="Arrow" src={Arrow} width={25} height={25} />
                Відправити
              </button>
            </form>
          </div>
        </article>
      </section>
    );
  } else return null;
};
export default Form;
