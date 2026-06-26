import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import styles from "./Our-instructure.module.scss";
import Box from "@/components/ui/Card/Box-Heading/Box";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import { dataInstucture } from "./dataInstructure";
import React, { useRef } from "react";
import { useCardScrollAnimation } from "@/hooks/useCardScrollAnimation";
type Props = {};

const OurInstructure = (props: Props) => {
  const { ourInstructure } = pageData;
  const ref = useRef<HTMLDivElement>(null);

  useCardScrollAnimation(
    ref as React.RefObject<HTMLDivElement>,
    `.${styles["card-img"]}, .${styles["card-text"]}`
  );

  return (
    <section className={styles["our-instructure"]}>
      <div className={styles["our-instructure_container"]}>
        <div className={styles["our-instructure_heading"]}>
          <Box {...ourInstructure} />
          <Heading {...ourInstructure} />
        </div>
        <div ref={ref} className={styles["our-instructure_education"]}>
          {dataInstucture.map((card,) => {
              
            return (
              <div
              key={card.id}
                className={`${styles[`card-${card.type}`]} ${styles[`item-${card.id}`]}`}>
                {card.type == "img" && (
                  <img src={card.img} alt={card.descraption} />
                )}
                {card.type == "text" && (
                  <>
                    <div className={styles["svg"]}>{card.svg}</div>
                    <p>{card.titleData}</p>
                    <span>{card.descraption}</span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurInstructure;
