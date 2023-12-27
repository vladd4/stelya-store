import styles from "./Faq.module.scss";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import Open from "../../assets/open.png";
import { useContext } from "react";
import Context from "../../hooks/useContext";

const faq_info = [
  {
    title: "faq_1_h",
    text: "faq_1_p",
  },
  {
    title: "faq_2_h",
    text: "faq_2_p",
  },
  {
    title: "faq_3_h",
    text: "faq_3_p",
  },
  {
    title: "faq_4_h",
    text: "faq_4_p",
  },
  {
    title: "faq_5_h",
    text: "faq_5_p",
  },
];

const Faq = () => {
  const t = useContext(Context);
  return (
    <section className={styles.root} id="consultation">
      <article
        className={styles.wrapper}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h1>ПЕРЕВАГИ НАТЯЖНИХ СТЕЛЬ</h1>
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
