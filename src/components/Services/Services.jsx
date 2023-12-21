import styles from "./Services.module.scss";

import Arrow from "../../assets/arrowWhite.png";
import Image from "../../assets/Rectangle 22.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setHeading } from "../../redux/slices/productSlice";

const service_links = [
  {
    title: "Сатинова натяжна стеля",
    number: "01",
  },
  {
    title: "Матова стеля",
    number: "02",
  },
  {
    title: "Глянцева натяжна стеля",
    number: "03",
  },
  {
    title: "Дворівнева стеля",
    number: "04",
  },
  {
    title: "Дворівнева з підсвіткою",
    number: "05",
  },
  {
    title: "Світлопропускаюча стеля",
    number: "06",
  },
  {
    title: "Ширяюча натяжна стеля",
    number: "07",
  },
  {
    title: "Тіньова натяжна стеля",
    number: "08",
  },
  {
    title: "Контурна стеля",
    number: "09",
  },
  {
    title: "Стеля з фотодруком",
    number: "10",
  },
  {
    title: "Стеля зі світловою лінією",
    number: "11",
  },
  {
    title: "Стеля з нішою під карниз",
    number: "12",
  },
  {
    title: "Трекових система освітлення",
    number: "13",
  },
  {
    title: "Мансардні стелі",
    number: "14",
  },
];

const Services = () => {
  const product = useSelector((state) => state.product);
  const toTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  const dispatch = useDispatch();
  const handleCLick = (title) => {
    dispatch(setHeading(title));
  };
  return (
    <section className={styles.root} id="offers">
      <article className={styles.wrapper}>
        <h1>НАШІ ПОСЛУГИ</h1>
        <article className={styles.info_block}>
          <div className={styles.links_block}>
            {service_links.map((link) => {
              return (
                <p
                  key={link.title}
                  onClick={() => handleCLick(link.title)}
                  className={
                    link.title === product.heading ? styles.current : ""
                  }
                >
                  <b>{link.number}</b> &nbsp;{link.title}
                </p>
              );
            })}
          </div>
          <div className={styles.mobile_links_block}>
            <select
              value={product.heading}
              onChange={(e) => handleCLick(e.target.value)}
            >
              {service_links.map((link, index) => {
                return (
                  <option
                    value={link.title}
                    key={index}
                    className={styles.option}
                  >
                    {link.number} &nbsp;{link.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.image_block}>
            <p>
              Матові натяжні стелі виглядають як натуральні, з шпаклюванням
              ідеально рівної поверхні. Це дозволяє поєднувати їх з будь-яким
              інтер'єром, гарно виглядають як в офісі, так і вдома.
            </p>
            <Link to="/products" onClick={toTop}>
              <img alt="Arrow" src={Arrow} width={30} height={30} />
              Дізнатися більше
            </Link>
            <img alt="Stelya" src={Image} width={660} height={515} />
          </div>
        </article>
      </article>
    </section>
  );
};
export default Services;
