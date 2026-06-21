import Box from "@/components/ui/Card/Box-Heading/Box";
import styles from "./Our-courses.module.scss";
import { pageData } from "@/components/ui/Card/Box-Heading/dataBox";
import Heading from "@/components/ui/Card/Box-Heading/Heading";
import Button from "@/components/ui/Button/Button";
import { dataCard } from "./dataCard";
import { useCardScrollAnimation } from "@/hooks/useCardScrollAnimation";
import type React from "react";
import { useRef } from "react";

const OurCourses = () => {
  const { ourCourses } = pageData;
  const currentRef = useRef<HTMLDivElement | null>(null);

  useCardScrollAnimation(
    currentRef as React.RefObject<HTMLDivElement>,
    `.${styles["item-card"]}`,
  );
  return (
    <section className={styles["our-courses"]}>
      <div ref={currentRef} className={`${styles["our-courses_container"]}`}>
        <Box {...ourCourses} />

        <div className={styles["our-courses_title-box"]}>
          <div className={styles["right"]}>
            <Heading {...ourCourses} />
            <p>
              Her yaş grubuna yönelik kapsamlı bir bilimsel deneyim sunuyoruz.
            </p>
          </div>
          <div className={styles["left"]}>
            <Button
              variant="outline"
              children="daha fazlasını keşfedin"
              arrow
              style={{
                borderColor: "var(--text-color-grey)",
              }}
            />
          </div>
        </div>

        <div className={`${styles["our-courses_card"]}`}>
          {dataCard.map((card, index) => (
            <div
              style={{ "--item-index": index } as React.CSSProperties}
              key={card.id}
              className={styles["item-card"]}>
              <div className={styles["card-img"]}>
                <img src={card.img} alt={card.desc} />
              </div>
              <div className={styles["card-descrapthion"]}>
                <h3>{card.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCourses;
