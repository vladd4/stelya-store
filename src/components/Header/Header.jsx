import styles from "./Header.module.scss";

import Burger from "../../assets/burger.png";
import Return from "../../assets/Refund_back.png";

import DropMenu from "../DropMenu/DropMenu";

import { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Header = () => {
  const [isClicked, setClicked] = useState(false);
  const header = useSelector((state) => state.header);
  const handleShowDrop = () => {
    setClicked(true);
    if (document.querySelector(".opacity-components")) {
      document.querySelector(".opacity-components").style.opacity = "0.6";
    }
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
            <p className={styles.current_lang}>Укр</p>
            <span>|</span>
            <p>Рус</p>
          </article>
          {header.isClicked ? (
            <Link to="/">
              <img width={30} height={30} alt="Back" src={Return} />
              Повернутись на головну
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
