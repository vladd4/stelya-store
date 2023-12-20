import styles from "./ProductPage.module.scss";

import Image from "../../assets/image.png";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setClicked } from "../../redux/slices/headerSlice";

const ProductInfo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setClicked(true));

    return () => {
      dispatch(setClicked(false));
    };
  }, []);
  return (
    <section className={styles.root}>
      <article className={styles.wrapper}>
        <img alt="sdsd" src={Image} />
        <div className={styles.info}>
          <h1>МАТОВІ СТЕЛІ</h1>
          <p>
            Матові натяжні стелі виглядають як натуральні, з шпаклюванням
            ідеально рівної поверхні. Це дозволяє поєднувати їх з будь-яким
            інтер'єром, гарно виглядають як в офісі, так і вдома. Основна
            перевага матових стель – візуальна натуральність. З відстані 1 м
            професіонал важко відрізнить їх від бетонного штукатуреного
            перекриття. Декоративна поверхня після монтажу виходить ідеально
            гладкою, тому добре приховує дефекти ЖБІ-конструкцій. Завдяки
            швидкій системі встановлення, не потрібно вивозити меблі або
            вивільняти кімнату на тиждень – весь процес монтажу займає кілька
            годин. Щоб замовити натяжну стелю з матовою поверхнею, подайте
            заявку, і ми проконсультуємо вас. Ми надаємо великий вибір кольорів,
            професійно монтуємо, маємо вигідні ціни та акції.
          </p>
        </div>
      </article>
    </section>
  );
};
export default ProductInfo;
