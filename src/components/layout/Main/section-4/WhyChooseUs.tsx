import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import { CARD_US } from "./dataUs";
import styles from "./Why-choose-us.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Box from "@/components/ui/Card/Box-Heading/Box";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
type Props = {};

const WhyChooseUs = (props: Props) => {
  const [ref, isVisible] = useScrollAnimation();
  const { whyChoose } = pageData;
  return (
    <section className={styles["why-choose-us"]}>
<Box {...whyChoose}/>
<Heading {...whyChoose}/>
      <div
        ref={ref}
        className={`${styles["why-choose-us_container"]} ${isVisible ? styles.visible : ""}`}>
        {CARD_US.map((item) => (
          <div key={item.id} className={styles["why-choose-us_card-us"]}>
            <div className={styles["svg"]}>{item.svg}</div>
            <div className={styles["title"]}>{item.titleCard}</div>
            <div className={styles["description"]}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
