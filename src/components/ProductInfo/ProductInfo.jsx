import styles from "./ProductPage.module.scss";

import { useContext, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setClicked } from "../../redux/slices/headerSlice";

import Context from "../../hooks/useContext";

import ProductSlider from "./ProductSlider";

const ProductInfo = () => {
  const t = useContext(Context);
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(setClicked(true));
    return () => {
      dispatch(setClicked(false));
    };
  }, [dispatch]);
  return (
    <section className={styles.root} id="product-info">
      <article className={styles.wrapper}>
        <ProductSlider images={product.images} />
        <div className={styles.info}>
          <h1>{t(product.heading)}</h1>
          <p>{t(product.text)}</p>
        </div>
      </article>
    </section>
  );
};
export default ProductInfo;
