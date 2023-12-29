import Slider from "../Slider/Slider";
import styles from "./Products.module.scss";

import Logo1 from "../../assets/Rectangle 27.png";
import Logo2 from "../../assets/Rectangle 28.png";
import Logo3 from "../../assets/Rectangle 29.png";
import Logo4 from "../../assets/Rectangle 31.png";
import Logo5 from "../../assets/Rectangle 34.png";
import { useContext } from "react";
import Context from "../../hooks/useContext";

const imagesStatic = [Logo1, Logo2, Logo3, Logo4, Logo5];

const Products = ({ title, id, images }) => {
  const t = useContext(Context);
  return (
    <section className={styles.root} id={id}>
      <h1>{t(title)}</h1>
      <Slider images={images ? images : imagesStatic} />
    </section>
  );
};
export default Products;
