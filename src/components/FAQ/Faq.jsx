import styles from "./Faq.module.scss";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import { useContext } from "react";
import Context from "../../hooks/useContext";

import { faq_info } from "../../static_store/faq_info";

import Open from "../../assets/open.png";

const Faq = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root} id="consultation">
      <article
        className={styles.wrapper}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h1>{t("faq_h")}</h1>
        <Accordion className={styles.accordion}>
          {faq_info.map((info) => {
            return (
              <AccordionItem key={info.title}>
                <AccordionHeader>
                  <h3 className={`accordion-title`}>{t(info.title)}</h3>
                  <img alt="Close" src={Open} width={25} height={25} />
                </AccordionHeader>
                <AccordionBody>
                  <div className="accordion-body">{t(info.text)}</div>
                </AccordionBody>
              </AccordionItem>
            );
          })}
        </Accordion>
      </article>
    </section>
  );
};
export default Faq;
