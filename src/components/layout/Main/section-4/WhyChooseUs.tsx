import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import { CARD_US } from "./dataUs";
import styles from "./Why-choose-us.module.scss";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Box from "@/components/ui/Card/Box-Heading/Box";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import React, { useRef } from "react";
import { useCardScrollAnimation } from "@/hooks/useCardScrollAnimation";
type Props = {};

const WhyChooseUs = (props: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { whyChoose } = pageData;
  useCardScrollAnimation(
    ref as React.RefObject<HTMLDivElement>,
    `.${styles["why-choose-us_card-us"]}`,
  );
  return (
    <section className={styles["why-choose-us"]}>
      <Box {...whyChoose} />
      <Heading {...whyChoose} />
      <div ref={ref} className={`${styles["why-choose-us_container"]}`}>
        {CARD_US.map((item) => (
          <div key={item.id} className={styles["why-choose-us_card-us"]}>
            <div className={styles["svg"]}>{item.svg}</div>
            <div className={styles["title"]}>{item.titleCard}</div>
            <div className={styles["description"]}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
