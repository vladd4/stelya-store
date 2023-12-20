import styles from "./DropMenu.module.scss";

import Logo from "../../assets/logo.png";

import { useRef, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const links = [
  {
    title: "Акція",
    href: "#sale",
  },
  {
    title: "Головна",
    href: "#welcome",
  },
  {
    title: "Послуги",
    href: "#offers",
  },
  {
    title: "Продукція",
    href: "#products",
  },
  {
    title: "Етапи роботи",
    href: "#workingstages",
  },
  {
    title: "Консультація",
    href: "#consultation",
  },
  {
    title: "Наші партнери",
    href: "#partners",
  },
  {
    title: "Форма зв'язку",
    href: "#form",
  },
  {
    title: "Контакти",
    href: "#contacts",
  },
];

const DropMenu = ({ setClicked, isClicked }) => {
  const componentRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      const burgerIcon = document.querySelector("#burger-icon");
      if (
        componentRef.current &&
        !componentRef.current.contains(event.target) &&
        event.target !== burgerIcon
      ) {
        setClicked(false);
        if (document.querySelector(".opacity-components")) {
          document.querySelector(".opacity-components").style.opacity = "1";
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setClicked]);
  return (
    <article
      ref={componentRef}
      className={`${styles.root} ${isClicked ? styles.show_drop : ""}`}
    >
      <article className={styles.wrapper}>
        <img alt="StelyaStore" src={Logo} width={232} height={239} />
        <div className={styles.links_block}>
          {links.map((link) => {
            return (
              <AnchorLink
                href={link.href}
                key={link.href}
                onClick={() => {
                  setClicked(false);
                  if (document.querySelector(".opacity-components")) {
                    document.querySelector(
                      ".opacity-components"
                    ).style.opacity = "1";
                  }
                }}
              >
                {link.title}
              </AnchorLink>
            );
          })}
        </div>
        <div className={styles.contacts}>
          <h4>Контакти</h4>
          <a href="tel:">+38(095) 777-26-97</a>
          <a href="tel:">+38(095) 777-26-97</a>
          <a href="tel:">+38(095) 777-26-97</a>
        </div>
      </article>
    </article>
  );
};
export default DropMenu;
