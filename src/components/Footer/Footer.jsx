import styles from "./Footer.module.scss";

import Inst from "../../assets/instagram-icon.png";
import Face from "../../assets/facebook-icon.png";
import Teleg from "../../assets/telegram-icon.png";
import Arrow from "../../assets/arrowUp.png";
import Logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { useContext } from "react";
import Context from "../../hooks/useContext";

const Footer = () => {
  const dispatch = useDispatch();
  const t = useContext(Context);
  return (
    <footer className={styles.root} id="contacts">
      <article className={styles.wrapper}>
        <div
          className={styles.header_block}
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h1>
            {t("offer_h")} <b>{t("offer_h_b")}</b>
            {t("offer_h2")}
          </h1>
          <button onClick={() => dispatch(setClicked(true))}>
            <img alt="Arrow Up" src={Arrow} width={43} height={43} />
            {t("conslut_btn")}
          </button>
        </div>
        <div
          className={styles.info_block}
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className={styles.contacts}>
            <h5>{t("contact_h")}</h5>
            <a href="tel:+380957772697">+38(095) 777-26-97</a>
            <a href="tel:+380967772697">+38(096) 777-26-97</a>
            <a href="tel:+380737772697">+38(073) 777-26-97</a>
            <a href="mailto:">example@gmail.com</a>
            <a
              href="https://maps.app.goo.gl/4d7DExM4ooRvLDwx9"
              target="_blank"
              rel="noreferrer"
            >
              {t("address")}
            </a>
            <div className={styles.social_icons}>
              <a href="http://some.com" target="_blank" rel="noreferrer">
                <img alt="Social" src={Inst} width={40} height={40} />
              </a>
              <a href="http://some.com" target="_blank" rel="noreferrer">
                <img alt="Social" src={Face} width={40} height={40} />
              </a>
              <a href="http://some.com" target="_blank" rel="noreferrer">
                <img alt="Social" src={Teleg} width={40} height={40} />
              </a>
            </div>
          </div>
          <div className={styles.logo_block}>
            <img alt="StelyaStore" src={Logo} width={233} height={239} />
            <nav>
              <AnchorLink href="#offers">{t("burg_link_3")}</AnchorLink>
              <AnchorLink href="#workingstages">{t("burg_link_5")}</AnchorLink>
              <AnchorLink href="#partners">{t("footer_part")}</AnchorLink>
              <AnchorLink href="#consultation">
                {t("footer_consalt")}
              </AnchorLink>
            </nav>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.827936151207!2d30.658331676402145!3d50.42567737158746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c521ce1bb7af%3A0x9877fd6781bdfaf8!2z0LLRg9C70LjRhtGPINCu0YDRltGPINCb0LjRgtCy0LjQvdGB0YzQutC-0LPQviwgMzMsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1702984704854!5m2!1suk!2sua"
            width="600"
            height="350"
            name="iframe_map"
            title="iframe_map"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.map}
          ></iframe>
        </div>
      </article>
      <p className={styles.copy}>
        Copyright © Stelya-Store. All rights Reserved.
      </p>
    </footer>
  );
};
export default Footer;
