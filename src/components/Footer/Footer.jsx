import styles from "./Footer.module.scss";

import Social from "../../assets/social.png";
import Arrow from "../../assets/arrowUp.png";
import Logo from "../../assets/logo.png";
import { useDispatch } from "react-redux";
import { setClicked } from "../../redux/slices/formSlice";

import AnchorLink from "react-anchor-link-smooth-scroll";

const Footer = () => {
  const dispatch = useDispatch();
  return (
    <footer className={styles.root} id="form">
      <article className={styles.wrapper}>
        <div className={styles.header_block}>
          <h1>
            ЗАЦІКАВИЛА ПРОПОЗИЦІЯ? ЗАПОВНІТЬ <b>ЗАЯВКУ</b> ТА ОТРИМАЙТЕ ШВИДКУ
            КОНСУЛЬТАЦІЮ.
          </h1>
          <button onClick={() => dispatch(setClicked(true))}>
            <img alt="Arrow Up" src={Arrow} width={43} height={43} />
            Дізнатися більше
          </button>
        </div>
        <div className={styles.info_block}>
          <div className={styles.contacts}>
            <h5>Контакти</h5>
            <p>+38(095) 777-26-97</p>
            <p>+38(095) 777-26-97</p>
            <p>+38(095) 777-26-97</p>
            <p>example@gmail.com</p>
            <p>вул. Юрія Литвинського 33 м.Київ 02000</p>
            <div className={styles.social_icons}>
              <a href="http://some.com" target="_blank" rel="noreferrer">
                <img alt="Social" src={Social} width={40} height={40} />
              </a>
              <a href="http://some.com" target="_blank" rel="noreferrer">
                <img alt="Social" src={Social} width={40} height={40} />
              </a>
              <a href="http://some.com" target="_blank" rel="noreferrer">
                <img alt="Social" src={Social} width={40} height={40} />
              </a>
            </div>
          </div>
          <div className={styles.logo_block}>
            <img alt="StelyaStore" src={Logo} width={233} height={239} />
            <nav>
              <AnchorLink href="#offers">Послуги</AnchorLink>
              <AnchorLink href="#workingstages">Етапи роботи</AnchorLink>
              <AnchorLink href="#partners">Партнери</AnchorLink>
              <AnchorLink href="#consultation">Консультація</AnchorLink>
            </nav>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2541.827936151207!2d30.658331676402145!3d50.42567737158746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c521ce1bb7af%3A0x9877fd6781bdfaf8!2z0LLRg9C70LjRhtGPINCu0YDRltGPINCb0LjRgtCy0LjQvdGB0YzQutC-0LPQviwgMzMsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1702984704854!5m2!1suk!2sua"
            width="600"
            height="350"
            name="map"
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
