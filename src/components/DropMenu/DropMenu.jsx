import styles from "./DropMenu.module.scss";

import Logo from "../../assets/logo.png";

import { useRef, useEffect, useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Context from "../../hooks/useContext";

import { links } from "../../static_store/drop_links";

const DropMenu = ({ setClicked, isClicked }) => {
  const componentRef = useRef(null);
  const t = useContext(Context);
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
                {t(link.title)}
              </AnchorLink>
            );
          })}
        </div>
        <div className={styles.contacts}>
          <h4>{t("contact_h")}</h4>
          <a href="tel:+380957772697">+38(095) 777-26-97</a>
          <a href="tel:+380967772697">+38(096) 777-26-97</a>
          <a href="tel:+380737772697">+38(073) 777-26-97</a>
        </div>
      </article>
    </article>
  );
};
export default DropMenu;
