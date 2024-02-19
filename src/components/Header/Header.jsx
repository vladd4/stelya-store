import styles from "./Header.module.scss";

import DropMenu from "../DropMenu/DropMenu";

import { useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setRu } from "../../redux/slices/saleSlice";

import Burger from "../../assets/burger.png";
import Return from "../../assets/Refund_back.png";

const Header = ({ t, i18n }) => {
  const [isClicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  const header = useSelector((state) => state.header);

  const handleShowDrop = () => {
    setClicked(true);
    if (document.querySelector(".opacity-components")) {
      document.querySelector(".opacity-components").style.opacity = "0.6";
    }
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    language === "ru"
      ? document.querySelector("#ru").classList.add(styles.current_lang)
      : document.querySelector("#ru").classList.remove(styles.current_lang);
    language === "ua"
      ? document.querySelector("#ua").classList.add(styles.current_lang)
      : document.querySelector("#ua").classList.remove(styles.current_lang);
  };
  return (
    <>
      <header className={styles.root}>
        <nav className={styles.wrapper}>
          <article
            className={`${styles.lang_block} ${
              header.isClicked ? styles.lang_white : ""
            }`}
          >
            <p
              id="ua"
              className={styles.current_lang}
              onClick={() => {
                changeLanguage("ua");
                dispatch(setRu(false));
              }}
            >
              Укр
            </p>
            <span>|</span>
            <p
              id="ru"
              onClick={() => {
                changeLanguage("ru");
                dispatch(setRu(true));
              }}
            >
              Рус
            </p>
          </article>
          {header.isClicked ? (
            <Link to="/">
              <img width={30} height={30} alt="Back" src={Return} />
              {t("return_btn")}
            </Link>
          ) : (
            <img
              id="burger-icon"
              alt="Burger menu"
              src={Burger}
              width={30}
              height={31}
              onClick={handleShowDrop}
            />
          )}
        </nav>
      </header>
      <DropMenu setClicked={setClicked} isClicked={isClicked} />
    </>
  );
};
export default Header;
