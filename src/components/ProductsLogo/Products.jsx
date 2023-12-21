import Slider from "../Slider/Slider";
import styles from "./Products.module.scss";

import Logo1 from "../../assets/Rectangle 27.png";
import Logo2 from "../../assets/Rectangle 28.png";
import Logo3 from "../../assets/Rectangle 29.png";
import Logo4 from "../../assets/Rectangle 31.png";
import Logo5 from "../../assets/Rectangle 34.png";

const imagesStatic = [Logo2, Logo2, Logo2, Logo2, Logo2];

const Products = ({ title, id, images }) => {
  return (
    <section className={styles.root} id={id}>
      <h1>{title}</h1>
      <Slider images={images ? images : imagesStatic} />
    </section>
  );
};
export default Products;
