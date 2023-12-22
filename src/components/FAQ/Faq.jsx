import styles from "./Faq.module.scss";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";

import Open from "../../assets/open.png";

const Faq = () => {
  return (
    <section className={styles.root} id="consultation">
      <article
        className={styles.wrapper}
        data-aos="fade-right"
        data-aos-duration="1500"
      >
        <h1>ПЕРЕВАГИ НАТЯЖНИХ СТЕЛЬ </h1>
        <Accordion className={styles.accordion}>
          <AccordionItem>
            <AccordionHeader>
              <h3 className={`accordion-title`}>
                Простота установки і безпека
              </h3>
              <img alt="Close" src={Open} width={25} height={25} />
            </AccordionHeader>

            <AccordionBody>
              <div className="accordion-body">
                Монтаж натяжних стель виконується швидко, без клейових
                матеріалів та без гіпсових шпаклювальних робіт. Не потребується
                пересування меблів чи спеціальні виміри - потрібно просто
                винести квіти та тварин. Процес встановлення чистий і безпечний,
                з використанням перфораторів з вбудованими пилососами, що
                забезпечує чистоту на місці.
              </div>
            </AccordionBody>
          </AccordionItem>

          <AccordionItem>
            <AccordionHeader>
              <h3 className={`accordion-title`}>Широкий вибір дизайну</h3>
              <img alt="Close" src={Open} width={25} height={25} />
            </AccordionHeader>

            <AccordionBody>
              <div className="accordion-body">
                Монтаж натяжних стель виконується швидко, без клейових
                матеріалів та без гіпсових шпаклювальних робіт. Не потребується
                пересування меблів чи спеціальні виміри - потрібно просто
                винести квіти та тварин. Процес встановлення чистий і безпечний,
                з використанням перфораторів з вбудованими пилососами, що
                забезпечує чистоту на місці.
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <h3 className={`accordion-title`}>Довговічність та гарантія</h3>
              <img alt="Close" src={Open} width={25} height={25} />
            </AccordionHeader>

            <AccordionBody>
              <div className="accordion-body">
                Монтаж натяжних стель виконується швидко, без клейових
                матеріалів та без гіпсових шпаклювальних робіт. Не потребується
                пересування меблів чи спеціальні виміри - потрібно просто
                винести квіти та тварин. Процес встановлення чистий і безпечний,
                з використанням перфораторів з вбудованими пилососами, що
                забезпечує чистоту на місці.
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <h3 className={`accordion-title`}>
                Захист від затоплення та вологості
              </h3>
              <img alt="Close" src={Open} width={25} height={25} />
            </AccordionHeader>

            <AccordionBody>
              <div className="accordion-body">
                Монтаж натяжних стель виконується швидко, без клейових
                матеріалів та без гіпсових шпаклювальних робіт. Не потребується
                пересування меблів чи спеціальні виміри - потрібно просто
                винести квіти та тварин. Процес встановлення чистий і безпечний,
                з використанням перфораторів з вбудованими пилососами, що
                забезпечує чистоту на місці.
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <h3 className={`accordion-title`}>Функціональне освітлення</h3>
              <img alt="Close" src={Open} width={25} height={25} />
            </AccordionHeader>

            <AccordionBody>
              <div className="accordion-body">
                Монтаж натяжних стель виконується швидко, без клейових
                матеріалів та без гіпсових шпаклювальних робіт. Не потребується
                пересування меблів чи спеціальні виміри - потрібно просто
                винести квіти та тварин. Процес встановлення чистий і безпечний,
                з використанням перфораторів з вбудованими пилососами, що
                забезпечує чистоту на місці.
              </div>
            </AccordionBody>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <h3 className={`accordion-title`}>
                Простота догляду та екологічність
              </h3>
              <img alt="Close" src={Open} width={25} height={25} />
            </AccordionHeader>

            <AccordionBody>
              <div className="accordion-body">
                Монтаж натяжних стель виконується швидко, без клейових
                матеріалів та без гіпсових шпаклювальних робіт. Не потребується
                пересування меблів чи спеціальні виміри - потрібно просто
                винести квіти та тварин. Процес встановлення чистий і безпечний,
                з використанням перфораторів з вбудованими пилососами, що
                забезпечує чистоту на місці.
              </div>
            </AccordionBody>
          </AccordionItem>
        </Accordion>
      </article>
    </section>
  );
};
export default Faq;
